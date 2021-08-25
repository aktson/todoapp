"use strict";
const input = document.querySelector ("input");
const addButton = document.querySelector (".add");
const listContainer = document.querySelector (".list");
const clearBtn = document.querySelector(".clear");


addButton.addEventListener("click",  getJokes) ;




async function getJokes() {
    try {
        const number = document.querySelector("input[type=number]").value;
        const url = `http://api.icndb.com/jokes/random/${number}`;
    
    
        const response = await fetch(url);
        const data = await response.json();
        const jokes = data.value;
    
     
        clearBtn.onclick = function () {
            location.reload();
        }
       
        for (let i = 0; i < jokes.length; i++) {
            listContainer.innerHTML +=  `<li>${jokes[i].joke}</li>`;
            clearBtn.classList.remove("hidden");
        }
    }
    catch (error) {
        listContainer.innerHTML = showError("Opps.. Something went wrong..");
    }
}

getJokes();
function showError (message) {
    if (!message) {
        message = "Unknown error";
    } 
    return`<p class ="error">${message}</p>`;
 };

// function getJokes(e) {
//     e.preventDefault();

//     const number = document.querySelector("input[type=number]").value;

//     const xhr = new XMLHttpRequest();

//     xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);

//     xhr.onload = function () {
//         if (this.status === 200) {
//             const response = JSON.parse(this.responseText);
//             console.log(response);
            
//             let output = "";

//             if(response.type === "success") {
//                 const clearBtn = document.createElement("button");
//                 clearBtn.textContent= "Clear";
//                 clearBtn.classList.add("button");

//                 clearBtn.onclick = function () {
//                    location.reload();
//                 }
               
//                 const header = document.querySelector("header");
//                 header.appendChild(clearBtn);
//                 response.value.forEach(function(joke) {
//                output += `<li>${joke.joke}</li>`;
//                listContainer.innerHTML = output;

//                 })
//             } else {
//                 output += "<li>Something went wrond</li>"
//             }
//          }
//     }

//     xhr.send();
//     console.log(number);
// }



