// alert("Connected ")

// Example 1

document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "The Paragraph Is Changed";
  });

// Example 2

document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight");
  });

// Example 3

document.getElementById("changeOrder").addEventListener("click", function () {
  let coffeeType = document.getElementById("coffeeType");
  coffeeType.textContent = "Espresso";
  coffeeType.style.backgroundColor = "green";
  coffeeType.style.padding = "5px";
  coffeeType.style.marginBottom = "5px";
});

//   Example 4

document.getElementById("addNewItem").addEventListener("click", function () {
  let List = document.getElementById("shoppingList");
  let li = document.createElement("li");
  li.textContent = "Eggs";

  List.appendChild(li);
});

//   Example 5

document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let taskList = document.getElementById("taskList");
    taskList.lastElementChild.remove();

    // let taskList = document.getElementById("taskList");
    // taskList.children[taskList.children.length - 1].remove();
  });

// Example 6

document
  .getElementById("clickMeButton")
  .addEventListener("dblclick", function () {
    alert("Hey! There");
  });

// Example 7

document.getElementById("teaList").addEventListener("click", function (event) {
  if (event.target && event.target.matches(".teaItem")) {
    alert("You selected: " + event.target.textContent);
  }
});
