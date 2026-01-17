document.addEventListener("DOMContentLoaded", () => {
  const toDoInput = document.getElementById("to-do-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const toDoList = document.getElementById("to-do-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => renderTask(task));

  addTaskBtn.addEventListener("click", () => {
    const textInput = toDoInput.value.trim();
    if (textInput === "") return;

    const newTask = {
      id: Date.now(),
      text: textInput,
      completed: false,
    };

    tasks.push(newTask);
    saveTask();
    renderTask(newTask);
    toDoInput.value = "";
    console.log(tasks);
  });

  function renderTask(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    li.innerHTML = `
    ${task.text}
    <span>X</span>`;

    li.addEventListener("click", (e) => {
      if (e.target.tagName === "SPAN") return;
      task.completed = !task.completed;
      li.classList.toggle("completed");
      saveTask();
    });

    li.querySelector("span").addEventListener("click", (e) => {
      e.stopPropagation(); // prevent toggle from firing
      tasks = tasks.filter((t) => t.id !== task.id);
      li.remove();
      saveTask();
    });

    toDoList.appendChild(li);
  }

  function saveTask(task) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
