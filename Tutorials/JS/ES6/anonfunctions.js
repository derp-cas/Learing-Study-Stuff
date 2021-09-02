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
//outputs [1,2,3,4,5]

//setting default parameters
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());
// outputs : Hello John
//         : Hello Anonymous

// adds +1 too number when value is not specified
const increment = (number, value = 1) => number + value;

//Rest Parameter
function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], {}));
// The console would display the strings You have passed 3 arguments. and You have passed 4 arguments..

const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
};
//returns the sum of args, no matter how many

//spread operator used to copy arr1 to arr2
const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;

arr2 = [...arr1];

console.log(arr2);

//Use Destructuring Assignment to Extract Values from Objects
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80,
};
const { today } = HIGH_TEMPERATURES;
const { tomorrow } = HIGH_TEMPERATURES;
// assigns 77 to today and 80 to tomorrow

//assign new var names
const user = { name: "John Doe", age: 34 };
// Here's how you can give new variable names in the assignment:
const { name: userName, age: userAge } = user;

//
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80,
};
const { today: highToday } = HIGH_TEMPERATURES;
const { tomorrow: highTomorrow } = HIGH_TEMPERATURES;

//Destructuring nested objects
const user = {
    johnDoe: {
        age: 34,
        email: "johnDoe@freeCodeCamp.com",
    },
};
// Here's how to extract the values of object properties and assign them to variables with the same name:
const {
    johnDoe: { age, email },
} = user;
// And here's how you can assign an object properties' values to variables with different names:
const {
    johnDoe: { age: userAge, email: userEmail },
} = user;

//
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 },
};
const {
    today: { low: lowToday, high: highToday },
} = LOCAL_FORECAST;

//destructuring arrays
let a = 8,
    b = 6;
[a, b] = [b, a];

//remove first two values from array
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
    const [a, b, ...arr] = list;
    return arr;
}
const arr = removeFirstTwo(source);
//a,b could be saved to another variable

//
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85,
};
const half = ({ max, min }) => {
    return (max + min) / 2.0;
};
