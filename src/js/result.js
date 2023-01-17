import constant from './constants.js'

export default function result(value) {
    const positionTask = constant.positionTask
    let contentTask = 
    `<div class="taskboard__item task task--backlog" draggable = true>
       <div class="task__body">
         <p class="task__view">${value}</p>
         <input class="task__input" type="text" value="${value}">
       </div>
       <button class="task__edit" type="button" aria-label="Изменить"></button>
    </div>`;
  positionTask.insertAdjacentHTML("beforebegin", contentTask);
  return positionTask.previousSibling;
}