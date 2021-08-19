"use strict";
const input = document.querySelector ("input");
const addButton = document.querySelector (".add");
const listContainer = document.querySelector (".list")


addButton.addEventListener("click",  getJokes) ;


function getJokes(e) {
    e.preventDefault();

    const number = document.querySelector("input[type=number]").value;

    const xhr = new XMLHttpRequest();

    xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function () {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText);
            console.log(response);
            
            let output = "";

            if(response.type === "success") {
                const clearBtn = document.createElement("button");
                clearBtn.textContent= "Clear";
                clearBtn.classList.add("button");

                clearBtn.onclick = function () {
                   location.reload();
                }
               
                const header = document.querySelector("header");
                header.appendChild(clearBtn);
                response.value.forEach(function(joke) {
               output += `<li>${joke.joke}</li>`;
               listContainer.innerHTML = output;

                })
            } else {
                output += "<li>Something went wrond</li>"
            }
         }
    }

    xhr.send();
    console.log(number);
}



