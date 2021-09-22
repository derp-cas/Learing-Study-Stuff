//setting the prototype to a new object erases the constructor property
//this can be fixed by defining the constructor in the prototype
function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    constructor: Dog,
    numLegs: 2,
    eat: function () {
        console.log("Omnonomomnonoj, mlem mlem");
    },
    describe: function () {
        console.log("My name is " + this.name);
    },
};

//checking where an objects prototype comes from
function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");
console.log(Dog.prototype.isPrototypeOf(beagle));
//returns ture

//prototype chain
function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle); // yields true

console.log(Object.prototype.isPrototypeOf(Dog.prototype));

//using inheritance
//DRY: Dont repeat yourself
function Cat(name) {
    this.name = name;
}

Cat.prototype = {
    constructor: Cat,
};

function Bear(name) {
    this.name = name;
}

Bear.prototype = {
    constructor: Bear,
};

function Animal() {}

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    },
};
