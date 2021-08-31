let catName;
let quote;
function catTalk() {
    "use strict";

    catName = "Oliver";
    quote = catName + " says Meow!";
}
catTalk();

//
function checkScope() {
    let i = "function scope";
    if (true) {
        let i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}

//const are read-only
//common const names : ONLY_BIGLETTERS_WITH_UNDERSCORES
function printManyTimes(str) {
    const SENTENCE = str + " is cool!";
    for (let i = 0; i < str.length; i += 2) {
        console.log(SENTENCE);
    }
}
printManyTimes("freeCodeCamp");

//Using the const declaration only prevents reassignment of the variable identifier.
const s = [5, 7, 2];
function editInPlace() {
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}
editInPlace();
//outputs s = [2,5,7]

//Object.freeze truly stops any variables from change
function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14,
    };
    Object.freeze(MATH_CONSTANTS);
    try {
        MATH_CONSTANTS.PI = 99;
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
