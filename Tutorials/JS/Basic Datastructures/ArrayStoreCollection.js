let yourArray = [1, "Benis", false, 4, 5];

//
let myArray = ["a", "b", "c", "d"];
myArray[1] = 1;
console.log(myArray);

//
function mixedNumbers(arr) {
    arr.unshift("I", 2, "three");
    arr.push(7, "VIII", 9);
    return arr;
}

console.log(mixedNumbers(["IV", 5, "six"]));

//pop removes form end, shift removes [0]
function popShift(arr) {
    let popped = arr.pop();
    let shifted = arr.shift();
    return [shifted, popped];
}

console.log(popShift(["challenge", "is", "not", "complete"]));

//splice starts at index 1 and removers 4 objects
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1, 4);
console.log(arr);

//adding items using splice
function htmlColorNames(arr) {
    arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
    return arr;
}

console.log(
    htmlColorNames([
        "DarkGoldenRod",
        "WhiteSmoke",
        "LavenderBlush",
        "PaleTurquoise",
        "FireBrick",
    ])
);

//slice and dice
function forecast(arr) {
    let todaysWeather = arr.slice(2, 4);
    return todaysWeather;
}
console.log(
    forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"])
);

//spread operator used to copy
function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        newArr.push([...arr]);
        num--;
    }
    return newArr;
}

console.log(copyMachine([true, false, true], 2));

//combine arrays with ...
function spreadOut() {
    let fragment = ["to", "code"];
    let sentence = ["learning", ...fragment, "is", "fun"];

    return sentence;
}

console.log(spreadOut());

//indexOf()
function quickCheck(arr, elem) {
    if (arr.indexOf(elem) >= 0) {
        return true;
    } else {
        return false;
    }
}

console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));

//shorter variant
function quickCheck(arr, elem) {
    return arr.indexOf(elem) >= 0 ? true : false;
}
console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));

//any array nested within arr containing elem will be removed.
function filteredArray(arr, elem) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(elem) == -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(
    filteredArray(
        [
            [3, 2, 3],
            [1, 6, 3],
            [3, 13, 26],
            [19, 3, 9],
        ],
        3
    )
);

//all data items that are greater than 10 will be returned in newArr
function greaterThanTen(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]);

//deep nested array "multidimensional arrays"
let nestedArray = [
    ["deep"],
    [["deeper"], ["deeper2"]],
    [[["deepest"], ["deepest2"]], [[["deepest-est?"]]]],
];
//displays deepest-est?
console.log(nestedArray[2][1][0][0][0]);
//displays deeper2
console.log(nestedArray[1][1][0]);
//displays deepest 2
console.log(nestedArray[2][0][1][0]);

//visualisation of "deepnes levels"
let myNestedArray = [
    "level 1" /* myNestedArray[0]             */,
    ["level 2"] /* myNestedArray[1][0]          */,
    [["level 3", "deep"]] /* myNestedArray[2][0][0]       */,
    [[["level 4", "deeper"]]] /* myNestedArray[3][0][0][0]    */,
    [[[["level 5", "deepest"]]]] /* myNestedArray[4][0][0][0][0] */,
];
//deepsest
console.log(myNestedArray[4][0][0][0][1]);
