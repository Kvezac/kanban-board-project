// const selector
import { taskInput, deleteCards, emptyBasket } from "./taskInput.js";
import changeTextElement from "./changeText.js";
import constant from "./constants.js";
import { dragStart, dragEnd } from "./dragAndDrop.js";



constant.applicantForm.addEventListener("submit", taskInput);
constant.changeText.addEventListener("click", changeTextElement);
constant.deleteTasks.addEventListener('click', deleteCards)
// const allBoxes = constant.taskboardAllTask

constant.taskboardAllTask.forEach((box) => {
  box.addEventListener("dragstart", dragStart);
  box.addEventListener("dragend", dragEnd);
});

emptyBasket();
