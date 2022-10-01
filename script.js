// To-do App:
//Build a simple todo app which adds tasks,edit the tasks and also delete the tasks.

let i = 1;

// Adding elements
function add() {
  document.querySelector(".nothing").classList.add("hide");
  let text = document.querySelector(".addTask").value;

  if (text === "") {
    return alert("Please enter task first");
  } else {
    createTaskElement(text);

    document.querySelector(".addTask").value = "";
  }

  event.preventDefault();
}

// Removing elements
function remove(node) {
  node.parentNode.remove();
  document.querySelector(".addTask").value = "";
  i--;
  console.log(i);
  if (i === 1) {
    document.querySelector(".nothing").classList.remove("hide");
  }
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
    [i].querySelector("button")
    .append(document.createElement("i"));

  let taskDiv = document.querySelectorAll(".tasksDiv div")[i];
  taskDiv.setAttribute("class", "tasksrow2");

  taskDiv.querySelector("input").setAttribute("class", "check");
  taskDiv.querySelector("input").setAttribute("type", "checkbox");
  taskDiv.querySelector("input").setAttribute("onclick", "lineThrough(this)");

  taskDiv.querySelector("p").setAttribute("class", "whatToDo");
  taskDiv.querySelector("p").textContent = text;

  taskDiv.querySelector("button").setAttribute("class", "removebtn");
  taskDiv.querySelector("button").setAttribute("onclick", "remove(this)");
  taskDiv.querySelector("button").classList.add("btn");

  taskDiv.querySelector("button i").setAttribute("class", "fa-solid");
  taskDiv.querySelector("button i").classList.add("fa-minus");
  taskDiv.querySelector("button i").style.color = "#fff";

  i++;
  console.log(i);
}

// Checked task
function lineThrough(node) {
  node.parentNode.querySelector(".whatToDo").classList.toggle("lineThrough");
  node.parentNode.classList.toggle("green");
}
