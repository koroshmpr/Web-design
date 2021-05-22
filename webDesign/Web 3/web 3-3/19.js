let MyArrey = [];
for (let i = 0; i < 5; i++) {
  let answersheet = prompt("Please Enter your answer" + (i + 1));
  MyArrey.push(answersheet);

}
console.log(MyArrey);

// arry slice()
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