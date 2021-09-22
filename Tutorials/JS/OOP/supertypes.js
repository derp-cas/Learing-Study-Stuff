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

let penguin = new Penguin();
console.log(penguin.fly());
