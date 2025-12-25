const dobInput = document.getElementById("dob");
const result = document.getElementById("result");
const calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", () => {
  const dobValue = dobInput.value;

  if (!dobValue) {
    result.textContent = "Please select your date of birth.";
    result.className = "mt-6 text-center text-red-500 font-medium";
    return;
  }

  const dob = new Date(dobValue);
  const today = new Date();

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    const previousMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    ).getDate();
    days += previousMonth;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  result.className = "mt-6 text-center text-gray-800 font-medium";
  result.innerHTML = `
    <p class="text-gray-700">You are</p>
    <p class="text-gray-700 text-lg font-semibold mt-1">
      ${years} Years, ${months} Months, ${days} Days
    </p>
  `;
});
