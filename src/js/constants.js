// consstants.js //
 const constant = {
  'applicantForm': document.querySelector(".add-task__form"),
  'positionTask': document.querySelector(".task--empty"),
  'taskboardAllTask': document.querySelectorAll(".taskboard__list"),
  'changeText':  document.querySelector(".taskboard"),
  'inputTextFocus': document.querySelector(".task__input"),
  'taskElements': document.querySelectorAll(".taskboard__item"),
  'deleteTasks': document.querySelector(".button--clear"),
  'taskListBasket': document.querySelectorAll(".task--basket"),

};

export const columnClass = {
  "taskboard__group-heading--backlog": "task--backlog",
  "taskboard__group-heading--processing": "task--processing",
  "taskboard__group-heading--done": "task--done",
  "taskboard__group-heading--basket": "task--basket",
}


export default constant
 