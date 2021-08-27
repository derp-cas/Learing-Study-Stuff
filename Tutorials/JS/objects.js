// Objects are similar to arrays, except that instead of using indexes
// to access and modify their data, you access the data in objects through
// what are called properties.

// After you've created a JavaScript object, you can update its properties at
// bracket notation to update.

var myDog = {
    name: "Doggo",
    legs: 6,
    tails: 60,
    friend: ["Bob", "Rob"],
};
//...................
var testObj = {
    hat: "ballcap",
    shirt: "jersey",
    shoes: "cleats",
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;
//.................

var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water",
};

var entreeValue = testObj["an entree"];
var drinkValue = testObj["the drink"];

//.................

var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas",
};

var playerNumber = 16;
var player = testObj[playerNumber];

//...............
var myDog = {
    name: "Coder",
    legs: 4,
    tails: 1,
    friends: ["freeCodeCamp Campers"],
};
myDog.name = "Happy Coder";
myDog.bark = "woof"; // adds bark property to myDog
delete myDog.tails;

//...............
// Setup
function phoneticLookup(val) {
    var result = "";
    var lookup = {
        alpha: "Adams",
        bravo: "Boston",
        charlie: "Chicago",
        delta: "Denver",
        echo: "Easy",
        foxtrot: "Frank",
    };
    result = lookup[val];
    return result;
}

phoneticLookup("charlie");
