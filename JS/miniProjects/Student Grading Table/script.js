addEventListener("DOMContentLoaded", () => {
  const message = document.getElementById("message");
  const wish = document.getElementById("wish");
  const btn = document.getElementById("submit-btn");

  btn.addEventListener("click", function (e) {
    e.preventDefault();
    message.textContent = "";
    wish.textContent = "";
    const birthday = document.getElementById("birthday").value;
    const today = new Date();
    const todayDate = today.getDate();
    const todayMonth = today.getMonth() + 1;
    const todayYear = today.getFullYear();
    const birthDay = new Date(birthday);
    const birthDate = birthDay.getDate();
    const birthMonth = birthDay.getMonth() + 1;
    const birthyear = birthDay.getFullYear();

    let years = todayYear - birthyear;
    let months = todayMonth - birthMonth;
    let days = todayDate - birthDate;

    if (days < 0) {
      months--;
      let prevMonthDays = new Date(todayYear, todayMonth, 0);
      days += prevMonthDays;
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    message.textContent = `you are ${years} years , ${months} months and ${days} Old!`;
    if (months ==0 && days == 0) {
      wish.textContent = "WISH YOUR HAPPY BIRTHDAY !";
    }
  });
});
