const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("toDoList");
const emptyState = document.getElementById("emptyState");

function addTask() {
  const taskText = todoInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.className =
    "flex justify-between items-center bg-gray-100 px-3 py-2 rounded-xl";

  li.innerHTML = `
<span>${taskText}</span>
<button class = "text-red-500 hover:text-red-700 font-bold">X</button>`;

  li.querySelector("button").addEventListener("click", () => {
    li.remove();

    if (todoList.children.length === 0) {
      emptyState.style.display = "flex";
    }
  });

  emptyState.style.display = "none";
  todoList.appendChild(li);

  todoInput.value = "";
}

addBtn.addEventListener("click", addTask);

todoInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
