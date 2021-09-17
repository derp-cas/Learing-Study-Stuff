//the object ist called tekkenCharacter
//it has 3 properties which map to a specific value
const tekkenCharacter = {
    player: "Hwoarang",
    fightingStyle: "Tae Kwon Doe",
    human: true,
};
//you can add a new property like that
tekkenCharacter.origin = "South Korea";
//if the property has a space in it you have to use brackets and ""
tekkenCharacter["hair color"] = "dyed orange";
//it can be done like this aswell
const eyes = "eye color";
tekkenCharacter[eyes] = "brown";
//after adding all the examples the object will look like this
const tekkenCharacter = {
    player: "Hwoarang",
    fightingStyle: "Tae Kwon Doe",
    human: true,
    origin: "South Korea",
    "hair color": "dyed orange",
    "eye color": "brown",
};

//another example
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
};
foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;
console.log(foods);

//modify an object nested within an object
let nestedObject = {
    id: 28802695164,
    date: "December 31, 2016",
    data: {
        totalUsers: 99,
        online: 80,
        onlineStatus: {
            active: 67,
            away: 13,
            busy: 8,
        },
    },
};
//to modify busy ->
nestedObject.data.onlineStatus.busy = 10;

//anotherone
let userActivity = {
    id: 23894201352,
    date: "January 1, 2017",
    data: {
        totalUsers: 51,
        online: 42,
    },
};
userActivity.data.online = 45;
console.log(userActivity);

//acces property names with bracket notation
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27,
};

function checkInventory(scannedItem) {
    // will return the value of that key or undefinded if its not present.
    return foods[scannedItem];
}

console.log(checkInventory("apples"));

// delete keyowrt to remove object properties
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27,
};

delete foods.oranges;
delete foods.plums;
delete foods.strawberries;

console.log(foods);

//check if an object has property
let users = {
    Alan: {
        age: 27,
        online: true,
    },
    Jeff: {
        age: 32,
        online: true,
    },
    Sarah: {
        age: 48,
        online: true,
    },
    Ryan: {
        age: 19,
        online: true,
    },
};
// checks if ALL four names are in user
function isEveryoneHere(userObj) {
    if (
        "Alan" in userObj &&
        "Jeff" in userObj &&
        "Sarah" in userObj &&
        "Ryan" in userObj
    ) {
        return true;
    } else {
        return false;
    }
}

console.log(isEveryoneHere(users));

//Iterate through the keys of an object with for in statement
// this would log every user each in its own line
for (let user in users) {
    console.log(user);
}

//another example
let users = {
    Alan: {
        age: 27,
        online: true,
    },
    Jeff: {
        age: 32,
        online: true,
    },
    Sarah: {
        age: 48,
        online: true,
    },
    Ryan: {
        age: 19,
        online: true,
    },
};

function countOnline(usersObj) {
    let usersOnline = 0;
    for (let user in usersObj) {
        if (usersObj[user].online === true) {
            usersOnline++;
        }
    }
    return usersOnline;
}
console.log(countOnline(users));

// generate an array of all object keys with object.keys()
let users = {
    Alan: {
        age: 27,
        online: false,
    },
    Jeff: {
        age: 32,
        online: true,
    },
    Sarah: {
        age: 48,
        online: false,
    },
    Ryan: {
        age: 19,
        online: true,
    },
};

function getArrayOfUsers(obj) {
    return Object.keys(obj);
}

console.log(getArrayOfUsers(users));

//modify an array stored in an object
let user = {
    name: "Kenneth",
    age: 28,
    data: {
        username: "kennethCodesAllDay",
        joinDate: "March 26, 2016",
        organization: "freeCodeCamp",
        friends: ["Sam", "Kira", "Tomo"],
        location: {
            city: "San Francisco",
            state: "CA",
            country: "USA",
        },
    },
};

function addFriend(userObj, friend) {
    userObj.data.friends.push(friend);
    return user.data.friends;
}

console.log(addFriend(user, "Pete"));
