// changeText.js
import constant from "./constants.js";

export default function changeTextElement(element) {
//   event = event.target;
  console.log(element.target.textContent);
//   changeActive(task)
const classBool = element.target.classList.toggle('task--active');
if (classBool) {
  console.log(element.target.querySelector("input"));
  // element.target.querySelector("input").value = element.target.querySelector("p");
  element.target.classList.toggle('task--active')
}
  // const inputTextFocus = constant.inputTextFocus
  // inputTextFocus.focus();
  // inputTextFocus.selectionStart = inputTextFocus.value.length;
}

