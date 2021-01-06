//arry concat() method
let mamada = ['mamad', 'mamali', 'mohamad'];
let davooda = ['davood', 'david', 'darkoob'];
console.log(mamada.concat(davooda));


//arry copywithin() method
let rang = ['Blue', 'Red', 'White', 'Teal', 'Black'];

// copy to index 0 the element at index 3
console.log(rang.copyWithin(0, 3, 4));
// expected output: Array ["d", "b", "c", "d", "e"]

// copy to index 1 all elements from index 3 to the end
console.log(rang.copyWithin(1, 3));
// expected output: Array ["d", "d", "e", "d", "e"]
