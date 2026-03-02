document.addEventListener("DOMContentLoaded", function () {
  const todayElement = document.getElementById("today-date");
  const form = document.getElementById("transaction-form");
  const description = document.getElementById("description");
  const amoutInput = document.getElementById("amout");
  const typeSelect = document.getElementById("type");
  const balance = document.getElementById("balance");
  const income1 = document.getElementById("income");
  const expense1 = document.getElementById("expense");
  const list = document.getElementById("list");

  const today = new Date();
  todayElement.textContent = today.toDateString();
  let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

  function addTransaction(e) {
    e.preventDefault();

    const text = description.value.trim();
    const amount = +amoutInput.value;
    const type = typeSelect.value;

    if (text == "" || amount <= 0) {
      alert("Please enter valid data");

      return;
    }

    const transaction = {
      id: Date.now(),
      text,
      amount,
      type,
    };

    transactions.push(transaction);
    updateUI();
    form.reset();
  }

  function updateUI() {
    list.innerHTML = "";
    let income = 0;
    let expense = 0;

    transactions.forEach((transaction) => {
      const li = document.createElement("li");

      li.innerHTML = `${transaction.text} - Rs:${transaction.amount}
        <button class="delete-btn" data-id="${transaction.id}">X</button>`;

      list.appendChild(li);

      if (transaction.type == "income") {
        income += transaction.amount;
      } else {
        expense += transaction.amount;
      }
    });

    income1.textContent = income;
    expense1.textContent = expense;
    balance.textContent = income - expense;

    localStorage.setItem("transactions", JSON.stringify(transactions));
  }

  function deleteTransaction(id) {
    transactions = transactions.filter((t) => t.id !== id);
    updateUI();
  }

  list.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-btn")) {
      const id = Number(e.target.getAttribute("data-id"));
      deleteTransaction(id);
    }
  });
  form.addEventListener("submit", addTransaction);
  updateUI();
});
