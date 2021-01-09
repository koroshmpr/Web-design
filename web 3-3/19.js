let fn = prompt("Enter your Firstname")
let ln = prompt("Enter your Lastname")
let a = prompt("Enter your Age")
let h = prompt("Enter your  Height")

let detail = [0, 1, 2, 3]
detail[0] = fn
detail[1] = ln
detail[2] = a
detail[3] = h
console.log(detail)

let animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

let ages = [3, 10, 18, 20];

function checkAdult(age) {
  return age >= 18;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.some(checkAdult);
}