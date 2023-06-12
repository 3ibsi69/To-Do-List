const input = document.getElementById("input");
const list = document.getElementById("list-container");
function addTask() {
  if (input.value === "") {
    alert("Please enter a task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    list.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "&#10006;";
    li.appendChild(span);
    let edit = document.createElement("p");
    edit.innerHTML = "&#9998;";
    li.appendChild(edit);
  }

  input.value = "";
  savedata();
}
//add
list.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    savedata();
  }
  //delete
  else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    savedata();
    //edit
  } else if (e.target.tagName === "P") {
    let edit = prompt("Edit your task");
    if (edit === "") {
      alert("Please enter your edit");
    }else{
    e.target.parentElement.firstChild.nodeValue = edit;
    savedata();
  }}
});

//local storage
function savedata() {
  localStorage.setItem("list", list.innerHTML);
}
function getdata() {
  list.innerHTML = localStorage.getItem("list");
}
getdata();
