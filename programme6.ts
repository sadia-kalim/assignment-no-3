//write a programme having an array of numbers, if the number is negative ,
//it should remove the negative number from array.
let number=[1, 0, -1, 22, 4,  10,];
let negative =number.splice(2,1,0);

console.log(negative);