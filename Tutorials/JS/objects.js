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

//Testing object for properties
function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp) == true) {
        return obj[checkProp];
    } else {
        return "Not Found";
    }
}

//Manipulatin complex objects
var myMusic = [
    //note: myMusic is an array
    {
        artist: "Billy Joel",
        title: "Piano Man",
        release_year: 1973,
        formats: ["CD", "8T", "LP"],
        gold: true,
    },
    {
        artist: "Metallica",
        title: "Master of Puppets",
        release_year: 1986,
        formats: ["Vinyl", "Casette", "CD"],
    },
];

//Accessing Nested Objects
var myStorage = {
    car: {
        inside: {
            "glove box": "maps",
            "passenger seat": "crumbs",
        },
        outside: {
            trunk: "jack",
        },
    },
};

var gloveBoxContents = myStorage.car.inside["glove box"];

//2nd example
var ourStorage = {
    desk: {
        drawer: "stapler",
    },
    cabinet: {
        "top drawer": {
            folder1: "a file",
            folder2: "secrets",
        },
        "bottom drawer": "soda",
    },
};
ourStorage.cabinet["top drawer"].folder2;
ourStorage.desk.drawer;

//Acessing nested arrays
var myPlants = [
    {
        type: "flowers",
        list: ["rose", "tulip", "dandelion"],
    },
    {
        type: "trees",
        list: ["fir", "pine", "birch"],
    },
];

var secondTree = myPlants[1].list[1];
