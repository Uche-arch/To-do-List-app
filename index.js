const input = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (input.value == "") {
    alert("You have not added a task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    input.value = "";
    saveData();
  }
}
window.addEventListener("keydown", add);
function add(event) {
  switch (event.key) {
    case "Enter":
      addTask();
    break;
  }
}

listContainer.addEventListener(
  "click",
  function (a) {
    if (a.target.tagName === "LI") {
      a.target.classList.toggle("checked");
      saveData();
    } else if (a.target.tagName === "SPAN") {
      a.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
document.addEventListener("DOMContentLoaded", showTask());

document.getElementsByTagName("li").addEventListener("click", toggleCheck);
