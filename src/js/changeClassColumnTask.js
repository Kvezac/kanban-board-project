// changeClassColumnTask.js

export function classChengeColumnTask(task) {
  task.classList.value = task.classList.value.replace(
    /\btask--.+\b/,
    task.parentNode.parentNode.classList[1].replace(/board__group/, "")
  );
  console.log('change');
}
