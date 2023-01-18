// changeClassColumnTask.js

import { listClassColumn } from "./constants.js";

export function classChengeColumnTask(task) {
  const newClassPosition =
    listClassColumn[task.parentNode.parentNode.classList[1]];
  const oldClassPosition = task.classList[2];
  task.classList.value = task.classList.value.replace(
    oldClassPosition,
    newClassPosition
  );
  console.log(`Change Class Task: ${task.classList[2]}`);
}
