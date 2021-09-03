//
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"],
};
function makeList(arr) {
    const failureItems = [];
    for (let i = 0; i < arr.length; i++) {
        failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    return failureItems;
}

const failuresList = makeList(result.failure);

//Property Shorthand
const getMousePosition = (x, y) => ({
    x: x,
    y: y,
});
// does the same as
const getMousePosition = (x, y) => ({ x, y });

//
const createPerson = (name, age, gender) => ({ name, age, gender });

//concise declarative functions with es6
//with es6 you can remove the function keyword and colon
//when defining functions in objects.
// This can be shorten:
const bicycle = {
    gear: 2,
    setGear: function (newGear) {
        this.gear = newGear;
    },
};
bicycle.setGear(3);
console.log(bicycle.gear);
// to this
const bicycle = {
    gear: 2,
    setGear(newGear) {
        this.gear = newGear;
    },
};
bicycle.setGear(3);
console.log(bicycle.gear);

//Vegetable class allows to create vegetable object with a property
//name that gets passed to the constructor
class Vegetable {
    constructor(name) {
        this.name = name;
    }
}
const carrot = new Vegetable("carrot");
console.log(carrot.name);
