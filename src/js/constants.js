// consstants.js //
const constant = {
  applicantForm: document.querySelector(".add-task__form"),
  positionTask: document.querySelector(".task--empty"),
  taskboardAllTask: document.querySelectorAll(".taskboard__list"),
  changeText: document.querySelector(".taskboard"),
  inputTextFocus: document.querySelector(".task__input"),
  taskElements: document.querySelectorAll(".taskboard__item"),
  deleteTasks: document.querySelector(".button--clear"),
  taskListBasket: document.querySelectorAll(".task--basket"),
};

export const listClassColumn = {
  "taskboard__group--backlog": "task--backlog",
  "taskboard__group--processing": "task--processing",
  "taskboard__group--done": "task--done",
  "taskboard__group--basket": "task--basket",
};

export default constant;
