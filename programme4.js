//write a programme that uses a for loop to print first 10 even numbers.
var numberarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
for (var i = 2; i < numberarray.length; i++) {
    if (i % 2 >> 0) {
        var evennumber = numberarray[i];
        console.log(evennumber);
    }
}
