"use strict";
const input = document.querySelector ("input");
const addButton = document.querySelector (".add");
const resetButton = document.querySelector (".reset");
const deleteButton = document.querySelector (".delete");
const listContainer = document.querySelector (".div-list")





addButton.addEventListener ("click", () => {
  
    let listElements = document.createElement("li");


    if(input.value) {
     
         listContainer.appendChild (listElements);
         listElements.innerHTML =`${input.value}`; 
         listElements.classList.add ("list-style")
         input.value = "";

        listElements.addEventListener ("click", () => {
             listElements.style.textDecoration = "line-through"
             
         })
         listElements.addEventListener ("dblclick", () => {
            listContainer.removeChild (listElements)
            
        })
  
  }
  
})
document.addEventListener ("keydown", (e) => {
    if (e.keyCode === 13) {
        if(input.value) {
            listContainer.innerHTML +=    
            `<ul>
             <li class ="list-style>${heart}  ${input.value}</li>
             </ul>`;
            input.value = "";
        }
       
    }
    
})

resetButton.addEventListener ("click", () => {
  listContainer.innerHTML = "";
  deleteButton.classList.add ("hidden");
  input.value = "";
})


deleteButton.addEventListener ("click", () => {
    if (listContainer.innerHTML) {
        listContainer.innerHTML =``;
    }
 })
