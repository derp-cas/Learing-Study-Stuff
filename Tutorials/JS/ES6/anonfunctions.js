const magic = () => new Date();
// does the same as following code
var magic = function () {
    return new Date();
};

//example
const doubler = (item) => item * 2;
doubler(4);
// doubler(4) would return the value 8.

const multiplier = (item, multi) => item * multi;
multiplier(4, 2);
// multiplier(4, 2) would return the value 8.

//concat merges this two arrays
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));
