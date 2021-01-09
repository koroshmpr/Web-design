// arry sort ()
let Fruits = ['Tomato', 'Banana', 'Apple', 'Kiwi', 'Cucumber', 'Orange']
console.log(Fruits.sort())
// This arry will change the original arry 
// new arry  --> Fruits = ["Apple", "Banana", "Cucumber", "Kiwi", "Orange", "Tomato"]

// arry splice ()
let months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
// second proptrey in splice arry will show that index value will replace or add  ( 0 means add & 1 means replace)