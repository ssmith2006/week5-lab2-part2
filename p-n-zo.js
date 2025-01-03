"use strict";




function PosNegZer(num) {
  if (num > 0) {
    alert("positive");
  } else if (num < 0) {
    alert("negative");
  } else if (num = "0") {
    alert("zero");
  } else{
    alert("Invalid");
  }
}

let userInput = prompt("Enter a Number");
PosNegZer(userInput);