//inherit behaviors form a supertype
function Animal() {}

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    },
};

//Object.create(obj) creates a new object and sets obj as the new objects prototype
let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);

beagle.eat();
duck.eat();
console.log(duck instanceof Animal);

//
//set the childs prototype to an instance of the parent
function Animal() {}

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    },
};

function Dog() {}
//beagle inherits all of animals properties including the eat method.
Dog.prototype = Object.create(Animal.prototype);
let beagle = new Dog();

//
// reset and inherited constructor property
function Animal() {}
function Bird() {}
function Dog() {}

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

//Bird and Dog will now have their respective constructor set
//instead of beeing Animal
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;
let duck = new Bird();
let beagle = new Dog();

//
// adding methods after inheritance
function Animal() {}
Animal.prototype.eat = function () {
    console.log("nom nom nom");
};

function Dog() {}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
    console.log("Woof!");
};

let beagle = new Dog();
beagle.bark();
beagle.eat();
NICE;

//
//override inherited methods
function Bird() {}

Bird.prototype.fly = function () {
    return "I am flying!";
};

function Penguin() {}
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;
//overriding the fly function
Penguin.prototype.fly = function () {
    return "Alas, this is a flightless bird.";
};

let penguin = new Penguin();
console.log(penguin.fly());

//
//use a mixin to add common behavior between unrelated objects
let bird = {
    name: "Donald",
    numLegs: 2,
};

let boat = {
    name: "Warrior",
    type: "race-boat",
};

let glideMixin = function (obj) {
    obj.glide = function () {
        console.log(obj.name + " is gliding like a boss");
    };
};
//pass both objects to glideMixin
glideMixin(bird);
glideMixin(boat);
//now bird an boat can both glide
bird.glide();
boat.glide();

//
//use closure to protect properties within an object from being modified externally
//
// The simplest way to make this public property private is by creating a variable
// within the constructor function. This changes the scope of that variable to be
// within the constructor function versus available globally. This way, the variable
// can only be accessed and changed by methods also within the constructor function.
function Bird() {
    let weight = 15;
    this.getWeight = function () {
        return weight;
    };
}
//another example
function Bird() {
    let hatchedEgg = 10;

    this.getHatchedEggCount = function () {
        return hatchedEgg;
    };
}
let ducky = new Bird();
ducky.getHatchedEggCount();

//
//immidiately invoked function expression(IIFE)
//the () at the end of the fucntion cause it to be immidiately executed or invoked
(function () {
    console.log("A cozy nest is ready");
})();

//
//use an IIFE to create a module
let funModule = (function () {
    return {
        isCuteMixin: function (obj) {
            obj.isCute = function () {
                return true;
            };
        },
        singMixin: function (obj) {
            obj.sing = function () {
                console.log(obj.name + " Sing to an awesome tune");
            };
        },
    };
})();

let dog = {
    name: "Doggo",
    race: "Shiba Inu",
};
funModule.isCuteMixin(dog);
funModule.singMixin(dog);
dog.isCute();
dog.sing();
