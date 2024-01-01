//create a function that takes an array,an index and a value as parameter.
//inside the function, use splice method to insert value at specified index
//inthe Array.returen the modified array.
let fruits=["apple", "mangoe","pear", "peach"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

fruits.splice(2,0,"banana");//now we add a new fruit banana on 3no. 
console.log(fruits);