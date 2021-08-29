var myArray = [];

var x = 0;

while (x <= 5) {
    myArray.push(x);
    x++;
}

//for
var myArray = [];

for (var i = 1; i <= 5; i++) {
    myArray.push(i);
}

//odd numbers
var myArray = [];

for (var i = 1; i <= 9; i += 2) {
    myArray.push(i);
}

//odd numbers but different
var myArray = [];

for (var i = 9; i >= 1; i -= 2) {
    myArray.push(i);
}

//iterate
var myArr = [2, 3, 4, 5, 6];
var total = 0;

for (var i = 0; i < myArr.length; i++) {
    total += myArr[i];
}

//nesting for loops
function multiplyAll(arr) {
    var product = 1;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    console.log(product);
    return product;
}

multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6, 7],
]);

//do-while
// a do...while loop  will first do one pass of the code inside
// the loop no matter what, and then continue to run the loop while the specified
// condition evaluates to true.

// Setup
var myArray = [];
var i = 10;
do {
    myArray.push(i);
    i++;
} while (i < 5);
