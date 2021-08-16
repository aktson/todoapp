"use strict";
const input = document.querySelector ("input");
const addButton = document.querySelector (".add");
const listContainer = document.querySelector (".list")


addButton.addEventListener("click",  getJokes) ;


function getJokes(e) {
    e.preventDefault();

    const number = document.querySelector("input[type=number]").value;

    const xhr = new XMLHttpRequest();
    console.log(number);
}

function receivingFunction(arg) {
    if (arg === typeof "function") {
        console.log(arg);
    }
    else {
        console.log ("not a function")
    }

}

function callbackFunction() {

 console.log ("I am a callback function");
}
console.log(receivingFunction(callbackFunction));

callbackFunction();