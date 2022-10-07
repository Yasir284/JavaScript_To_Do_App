// To-do App:
//Build a simple todo app which adds tasks,edit the tasks and also delete the tasks.

let i = 0;
let j = 0;

// Adding elements
function add() {
  let text = document.querySelector(".addTask").value;

  if (text === "") {
  } else {
    document.querySelector(".nothing").classList.add("hide");
    createTaskElement(text);
    document.querySelector(".addTask").value = "";
    document.querySelector(".totalTasks").textContent = "Total Tasks : " + i;
  }

  event.preventDefault();
}

// Removing elements
function remove(node) {
  node.parentNode.remove();
  getTaskDone();
  i--;
  console.log(i);
  if (i == 0) {
    document.querySelector(".nothing").classList.remove("hide");
  }
  document.querySelector(".totalTasks").textContent = "Total Tasks : " + i;
}

// Edit Tasks
function edit(node) {
  document.querySelector(".addTask").value =
    node.parentNode.querySelector(".whatToDo").textContent;
  remove(node);
}

// Creating elements
function createTaskElement(text) {
  document
    .querySelector(".tasksDiv")
    .appendChild(document.createElement("div"));
  document
    .querySelectorAll(".tasksDiv div")
    [i].append(document.createElement("input"));
  document
    .querySelectorAll(".tasksDiv div")
    [i].append(document.createElement("p"));
  document
    .querySelectorAll(".tasksDiv div")
    [i].append(document.createElement("button"));
  document
    .querySelectorAll(".tasksDiv div")
    [i].querySelectorAll("button")[0]
    .append(document.createElement("i"));
  document
    .querySelectorAll(".tasksDiv div")
    [i].append(document.createElement("button"));
  document
    .querySelectorAll(".tasksDiv div")
    [i].querySelectorAll("button")[1]
    .append(document.createElement("i"));

  let taskDiv = document.querySelectorAll(".tasksDiv div")[i];
  taskDiv.setAttribute("class", "tasksrow2");

  taskDiv.querySelector("input").setAttribute("class", "check");
  taskDiv.querySelector("input").setAttribute("type", "checkbox");
  taskDiv.querySelector("input").setAttribute("onclick", "lineThrough(this)");

  taskDiv.querySelector("p").setAttribute("class", "whatToDo");
  taskDiv.querySelector("p").textContent = text;

  taskDiv.querySelectorAll("button")[0].setAttribute("class", "editbtn");
  taskDiv.querySelectorAll("button")[0].setAttribute("onclick", "edit(this)");
  taskDiv.querySelectorAll("button")[0].classList.add("btn");

  taskDiv
    .querySelectorAll("button")[0]
    .firstChild.setAttribute("class", "fa-solid");
  taskDiv
    .querySelectorAll("button")[0]
    .firstChild.classList.add("fa-pen-to-square");
  taskDiv.querySelectorAll("button")[0].firstChild.style.color = "#fff";

  taskDiv.querySelectorAll("button")[1].setAttribute("class", "removebtn");
  taskDiv.querySelectorAll("button")[1].setAttribute("onclick", "remove(this)");
  taskDiv.querySelectorAll("button")[1].classList.add("btn");

  taskDiv
    .querySelectorAll("button")[1]
    .firstChild.setAttribute("class", "fa-solid");
  taskDiv.querySelectorAll("button")[1].firstChild.classList.add("fa-minus");
  taskDiv.querySelectorAll("button")[1].firstChild.style.color = "#fff";

  i++;
  console.log(i);
}

// Checked task
function lineThrough(node) {
  node.parentNode.querySelector(".whatToDo").classList.toggle("lineThrough");
  node.parentNode.classList.toggle("green");
  getTaskDone();
}

function getTaskDone() {
  let checkbox = document.querySelectorAll(".check");
  for (let i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked == true) {
      j++;
    }
    console.log(checkbox[i].checked);
  }
  document.querySelector(".tasksDone").textContent = `Task Done : ${j}`;
  j = 0;
}
