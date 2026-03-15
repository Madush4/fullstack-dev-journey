addEventListener("DOMContentLoaded", () => {
  function saveStudent() {
    localStorage.setItem("Students", JSON.stringify(students));
  }

  function getStudents() {
    const data = localStorage.getItem("Students");

    if (data !== null) {
      const parsed = JSON.parse(data);
      for (let s of parsed) {
        const student = new Student(s.name, s.mark);
        students.push(student);
      }
      displayTable();
    }
  }

  class Student {
    constructor(name, mark) {
      this.name = name;
      this.mark = mark;
      this.status = mark >= 50 ? "Pass" : "Fail";
      this.grade = this.getGrade();
    }
    getGrade() {
      if (this.mark >= 75) return "A";
      if (this.mark >= 65) return "B";
      if (this.mark >= 55) return "C";
      if (this.mark >= 45) return "D";
      return "F";
    }
  }

  let students = [];
  getStudents();
  function addStudents() {
    const name = document.getElementById("student-name").value.trim();
    const mark = parseInt(document.getElementById("mark").value);

    if (name === "" || isNaN(mark)) {
      alert("Enter a name or valid mark .");
      return;
    }
    let student = new Student(name, mark);
    students.push(student);
    saveStudent();
    document.getElementById("student-name").value = "";
    document.getElementById("mark").value = "";
    displayTable();
  }

  function displayTable() {
    let total = 0;
    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML = "";
    for (let s of students) {
      total += s.mark;
      const color = s.status === "Pass" ? "lightgreen" : "lightcoral";
      const raw = `<tr style="background-color:${color}"><td>${s.name}</td><td>${s.mark}</td><td>${s.status}</td><td>${s.grade}</td></tr>`;
      tableBody.innerHTML += raw;
    }
    const avg = total / students.length;
    document.getElementById("average").innerHTML = avg;
  }

  document.getElementById("studentForm").addEventListener("submit", (e) => {
    e.preventDefault();

    addStudents();
  });
});
