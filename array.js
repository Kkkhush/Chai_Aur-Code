// array containing fruit's name

let fruits =["apple","cherry","banana"]
let intFruits = new Array("kiwi","avacado","dragon fruit")

//extract value
console.log(fruits[0]);
// length of array
console.log(fruits.length);
//datatype
console.log( typeof intFruits);
// changing value at given address
fruits[0]="blueberry";


// adding new element to array
fruits.push("new item");

// adding element at the start of the array
fruits.unshift("new item");


// last element ko remove krti hai
fruits.pop();

