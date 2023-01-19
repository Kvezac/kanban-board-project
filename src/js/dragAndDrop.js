// focus task, drag task, move task, drop task 
import constant from "./constants.js";
import { emptyBasket, hideElement } from "./taskInput.js";
import { сhangeColumnTask } from "./changeClassColumnTask.js";

const taskboardAllTask = constant.taskboardAllTask;
const taskElements = constant.taskElements;

taskElements.forEach((evt) => {
  if (!evt.classList.contains("task--empty")) {
    evt.draggable = true;
  }
});

export function dragStart (evt)  {
  if (evt.target.classList.contains("task")) {
    console.log('dragstart');
    const draggedTask = evt.target;
    draggedTask.classList.add(`task--dragged`);
  }
};

export function dragEnd (evt) {
  const activeElement = document.querySelector(`.task--dragged`);
  evt.target.classList.remove(`task--dragged`);
  console.log('dragend');
  сhangeColumnTask(activeElement);
  emptyBasket();
};

taskboardAllTask.forEach((tasksListElement) =>
  tasksListElement.addEventListener(`dragover`, (evt) => {
    if (evt.target.classList.contains("task")) {
      evt.preventDefault();
      const activeElement = document.querySelector(`.task--dragged`);
      const currentElement = evt.target;
      const pointInsert =
        activeElement !== currentElement && currentElement.classList.contains(`task`);
      if (!pointInsert) {
        return;
      }
      const beforeElement =
        currentElement === activeElement.nextElementSibling
          ? currentElement.nextElementSibling
          : currentElement;
      tasksListElement.insertBefore(activeElement, beforeElement);
    }
    hideElement();
  })
);

