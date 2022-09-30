// To-do App:
//Build a simple todo app which adds tasks,edit the tasks and also delete the tasks.

function add() {
  let text = document.querySelector(".addTask").value;
}

function createTaskElement(text) {
  // let div = document.createElement("div").setAttribute("class", "tasksrow2");
  // let input = document.createElement("input").setAttribute("class", "check");
  // let p = document.createElement("p").setAttribute("class", "whatToDo");
  // let button = document
  //   .createElement("button")
  //   .classList.add("removebtn", "btn")
  //   .setAttribute("onclick", "remove()");
  // let i = document.createElement("i").classList.add("fa-solid", "fa-minus");

  let div = document.createElement("div");
  let input = document.createElement("input");
  let p = document.createElement("p");
  let button = document.createElement("button");
  let i = document.createElement("i");
  document.querySelector(".tasksDiv").append(div);
  document.querySelector(".tasksDiv div").append(input);
  document.querySelector(".tasksDiv div").append(p);
  document.querySelector(".tasksDiv div").append(button);
  document.querySelector(".tasksDiv div button").append(i);
}
