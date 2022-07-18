const addBtn = document.querySelector(".add");
const taskField = document.querySelector(".taskInput");
const list = document.querySelector(".list");

addBtn.addEventListener("click", addTask);
window.addEventListener("keydown", (e) => {
  if(e.key === 'Enter') {
    addTask();
  } else {
    return
  }
});

function addTask() {
  if (taskField.value.length === 0) {
    return 0;
  } else {
    const taskContainer = list.appendChild(document.createElement("div"));
    const task = taskContainer.appendChild(document.createElement("p"));
    const doneBtn = taskContainer.appendChild(document.createElement("i"));
    const deleteBtn = taskContainer.appendChild(document.createElement("i"));

    // Delete button
    deleteBtn.className = "fas fa-trash-alt";
    // Mark complete
    doneBtn.className = "fas fa-check";
    taskContainer.className = "taskContainer";
    task.className = "task";
    task.innerHTML =
      taskField.value.charAt(0).toUpperCase() + taskField.value.slice(1);
    taskField.value = "";
    deleteBtn.addEventListener("click", deleteTask);
    doneBtn.addEventListener("click", checkBtn);

    // 
    function checkBtn(e) {
      e.target.previousSibling.style.textDecoration = "line-through";
    }
    function deleteTask(e) {
      e.target.parentElement.remove();
    }
  }
}
