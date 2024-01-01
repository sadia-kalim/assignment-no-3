//implement a simple shopping cart programme using an array.
//creat a function to add  items, remove items and update quantities using 
//the splice method. print cart's contents after each operation.
var cart = ["vegitables", "fruits", "spices", "detergents"];
console.log(cart);
cart.splice(3, 1, "mop"); // we remove an item detergent and add an item mop.
console.log(cart);
