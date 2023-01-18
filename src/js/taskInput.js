// input task,
import constant from "./constants.js";
import result from "./result.js";

const applicantForm = constant.applicantForm;
const taskboardAllTask = constant.taskboardAllTask;

export function taskInput(event) {
  event.preventDefault();
  console.log("Отправка!");
  serializeForm(applicantForm);
}

function serializeForm(formNode) {
  const { elements } = formNode;
  Array.from(elements).forEach((element) => {
    const value = element.value;
    if (value) {
      applicantForm.reset();
      return result(value), hideElement();
    }
  });
}

export function hideElement() {

  taskboardAllTask.forEach((taskBoard) => {
    let countTask = taskBoard.querySelectorAll(".task").length;
    console.log(countTask);
    const classShadowElement =
      taskBoard.querySelector(".task--empty").classList;
    countTask > 1
      ? classShadowElement.add("hidden-block")
      : classShadowElement.remove("hidden-block");
  });
}

export function deleteCards() {
  const deletedBasketList = document.querySelectorAll(".task--basket");
  deletedBasketList.forEach((deletedTask) => {
    deletedTask.parentNode.removeChild(deletedTask);
  });
  hideElement();
  emptyBasket();
}

export function emptyBasket() {
  const isEmpty = !Boolean(
    document.querySelector(".taskboard__list--trash").children.length - 1
  );
  console.log(isEmpty);
  constant.deleteTasks.disabled = isEmpty;
  return isEmpty;
}
