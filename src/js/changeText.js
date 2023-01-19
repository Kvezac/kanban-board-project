// changeText.js
export function changeTextElement(event) {
  const element = event.target.className;

  if (element === "task__edit") {
    const addingActive = event.target.closest(".taskboard__item");
    const textInput = event.target.parentNode.querySelector(".task__input");
    document
      .querySelector(".taskboard .task.task--active")
      ?.classList?.remove("task--active");
    addingActive.classList.add("task--active");
    textInput.focus();
    textInput.selectionStart = textInput.value.length;
    console.log("adding class: 'task--active'");
  }
}
export function buttonPress(event) {
  if (event.key === "Escape" || event.key === "Enter") {
    const removeActive = event.target.closest(".taskboard__item");
    const textInput = event.target.parentNode
      .querySelector(".task__input")
      .value.trim();
    const textInsert = event.target.parentNode.querySelector(".task__view");
    textInsert.textContent = textInput;
    removeActive.classList.remove("task--active");

    console.log("remove  class: 'task--active'");
  }
}
