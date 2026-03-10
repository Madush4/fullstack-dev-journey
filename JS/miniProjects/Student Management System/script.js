document.addEventListener("DOMContentLoaded", function () {
  const submitBtn = document.getElementById("submit-btn");

  let students = [];

  class Student {
    constructor(name, mark) {
      this.name = name;
      this.mark = mark;
    }

    getGrade() {
      let grade;
      if (this.mark > 85 && this.mark <= 100) return "A";
      if (this.mark > 75 && this.mark <= 85) return "B";
      if (this.mark <= 75 && this.mark > 45) return "C";
      return "F";
    }
  }
  savedStudents();
  displayStudents();
  function isNameValid(name) {
    if (name === "") {
      alert("Enter your name to proceed.");
      return false;
    }
    return true;
  }

  function isMarkValid(mark, markInput) {
    if (markInput.value.trim() == "" || isNaN(mark) || mark < 0) {
      alert("Enter a valid mark to proceed.");
      return false;
    }
    return true;
  }

  function saveStudents() {
    localStorage.setItem("students", JSON.stringify(students));
  }

  function savedStudents() {
    let savedStudents = localStorage.getItem("students");
    let parsed = [];
    if (savedStudents) {
      parsed = JSON.parse(savedStudents);
    }
    students = parsed.map(function (s) {
      return new Student(s.name, s.mark);
    });
  }

  submitBtn.addEventListener("click", function () {
    const nameInput = document.getElementById("name");
    const markInput = document.getElementById("mark");
    const name = nameInput.value.trim();
    const mark = Number(markInput.value);
    if (!isNameValid(name)) return;
    if (!isMarkValid(mark, markInput)) return;
    let student = new Student(name, mark);
    students.push(student);
    saveStudents();
    nameInput.value = "";
    markInput.value = "";
    displayStudents();
  });

  function displayStudents() {
    const list = document.getElementById("list");
    list.innerHTML = "";

    students.forEach(function (student, index) {
      let li = document.createElement("li");
      let deleteBtn = document.createElement("span");
      deleteBtn.textContent = "x";
      deleteBtn.addEventListener("click", function () {
        students.splice(index, 1);
        saveStudents();
        displayStudents();
      });
      deleteBtn.style.color = "red";
      deleteBtn.style.marginLeft = "7px";
      deleteBtn.style.cursor = "pointer";
      li.textContent = `Name: ${student.name} | Mark: ${student.mark} |  Grade: ${student.getGrade()} `;
      li.appendChild(deleteBtn);
      list.appendChild(li);
    });
  }
});
