function clickMe() {
  alert("button click!");
}

function inputValue() {
  const inputValue = document.getElementById("inputValue").value;
  alert(inputValue);
}

function copyValue() {
  const inputValue = document.getElementById("inputValue1").value;
  document.getElementById("copyValue").value = inputValue;
}

let printId = document.getElementById("heading"); //print by id
console.log("Id access:", printId);
console.dir(printId);

let printClass = document.getElementsByClassName("paragraphCss"); // HTMLCollection returns, class
console.log("class accessLog:", printClass);
console.dir(printClass);

let printTag = document.getElementsByTagName("button"); // HTMLCollection returns, tag name
console.log("tag accessLog:", printTag);
console.dir(printTag);

let printOutput = document.querySelector(".paragraphCss"); //querySelector returns, only first matching elements
console.log("printOutput:", printOutput);

let printOutputAll = document.querySelectorAll("button"); //querySelectorAll returns, all matching elements means nodeList
console.log("printOutputAll:", printOutputAll);

// tag access - it access tags.
let tagAccess = document.getElementsByTagName("button");
console.log("tagAccess", tagAccess);

// tagName - return tag for element nodes.
// innerText - return text content of element and all its children.
// innerHTML - return text content of element and all its children with HTML tags.
// textContent - return text content of element even it's hidden.

// let h2 = document.getElementById("idd");
// console.log(h2);

// document.getElementById("idd").innerText + " " + "from Apna college";

// let printDiv = document.querySelectorAll('.box');
// console.log(printDiv);
