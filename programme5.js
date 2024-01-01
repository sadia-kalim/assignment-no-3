//creat a function that takes a positive integer as parameter and uses a 
//for loop to calaulate and return the factorial of that number.
function fact(num) {
    var fact = 1;
    for (var i = 1; i <= num; i++) {
        fact = fact * i;
        console.log(fact);
    }
}
fact(5);
