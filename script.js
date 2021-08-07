"use strict";
const input = document.querySelector ("input");
const addButton = document.querySelector (".add");
const resetButton = document.querySelector (".reset");
const listContainer = document.querySelector (".list")




addButton.addEventListener ("click", () => {
    let listElements = document.createElement("li");
    let link = document.createElement("a");
    link.innerHTML = "❌";
      if(input.value) {
        
        listContainer.appendChild(listElements);
 
        listElements.innerHTML += input.value;
        listElements.appendChild(link);
        listElements.classList.add("div-list");
     
       
        link.style.cursor = "default";
        link.style.marginLeft = "10px";
       
        resetButton.classList.remove ("hidden");
     
        input.value = "";

        addToLocalStorage (input.value) ;
      const deleteTask =  link.addEventListener ("click", () => {
        listElements.parentNode.removeChild(listElements)
       
        })
// method without delet button, with double click event
        // listElements.addEventListener ("click", () => {
        //      listElements.style.textDecoration = "line-through"
             
        //  })
        //  listElements.addEventListener ("dblclick", () => {
        //     listContainer.removeChild (listElements)
            
        // })
   }
})
//keyboard enter event to add task to task list
document.addEventListener ("keydown", (e) => {
    let listElements = document.createElement("li");
    let link = document.createElement("a");
    link.innerHTML = "❌";
    if (e.keyCode === 13) {
        if(input.value) {
        listContainer.appendChild (listElements);

        listElements.innerHTML += input.value; 
        listElements.appendChild(link);
        listElements.classList.add("div-list");

        resetButton.classList.remove ("hidden");
      
        input.value = "";
        
        addToLocalStorage (input.value) ;
      const deleteTask =  link.addEventListener ("click", () => {
        listElements.parentNode.removeChild(listElements)
       
        })
        }

 }
})

// reset function too clear out listcontainer 
resetButton.addEventListener ("click", () => {
//   listContainer.innerHTML = "";
//   input.value = "";
resetButton.classList.add ("hidden");

//anoother way with looping through container
while(listContainer.firstChild) {
    listContainer.removeChild(listContainer.firstChild);
}
})

// store items to local storage

function addToLocalStorage (task) {
let tasks;
    if (localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.push(task);
    localStorage.getItem("tasks", JSON.stringify(tasks));
}
