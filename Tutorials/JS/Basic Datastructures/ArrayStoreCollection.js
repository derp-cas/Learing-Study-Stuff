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
