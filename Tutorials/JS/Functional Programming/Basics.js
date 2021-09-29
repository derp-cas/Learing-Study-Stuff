// avoiding mutations
var fixedValue = 4;

function incrementer() {
    let newValue = fixedValue + 1;
    return newValue;
}

//
//another option
// the global variable
var fixedValue = 4;

function incrementer() {
    return fixedValue + 1;
}

var newValue = incrementer(); // Should equal 5
console.log(fixedValue); // Should print 4

// Another principle of functional programming is to always declare your
// dependencies explicitly. This means if a function depends on a variable
// or object being present, then pass that variable or object directly into
// the function as an argument.

// The global variable

// The global variable
var fixedValue = 4;

function incrementer(x) {
    return x + 1;
}
console.log(incrementer(fixedValue));

//
//Return part of an array using the slice method
function sliceArray(anim, beginSlice, endSlice) {
    let slicedArray = anim.slice(beginSlice, endSlice);
    return slicedArray;
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);

//
//Remove elements from an array using slice instead of splice
function nonMutatingSplice(cities) {
    let newArray = cities.slice(0, 3);
    return newArray;
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);

//
//Combine two arrays using the concat method
function nonMutatingConcat(original, attach) {
    let newArray = original.concat(attach);
    return newArray;
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);

//
//Add Elements to the end of an array using concat instead of push
function nonMutatingPush(original, newItem) {
    let newArray = original.concat(newItem);
    return newArray;
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);
