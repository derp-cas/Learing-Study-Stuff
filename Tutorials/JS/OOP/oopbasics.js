let dog = {
    name: "Doggo",
    numLegs: 4,
    sayLegs: function () {
        return "This dog has " + this.numLegs + " legs.";
    },
};

console.log(dog.name);
console.log(dog.numLegs);
console.log(dog.sayLegs());

//define a constructor function
//constructors are functions that create new objects

//Constructors are defined with a capitalized name to distinguish them from other
//functions that are not constructors.

//Constructors use the keyword this to set properties of the object they will create.
//Inside the constructor, this refers to the new object it will create.

//Constructors define properties and behaviors instead of returning a value as
//other functions might.

//NOTE: this inside the constructor always refers to the object being created
function Dog() {
    (this.name = "Dogger"), (this.color = "green");
    this.numLegs = 4;
}

let hound = new Dog();
//props of hound could be modified and accessed like this
hound.name = "Richard";
hound.name;

//extend consturctors to recive arguments
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}

let terrier = new Dog("Dogmatix", "white");

//verify if an object is an instance of a constructor
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}
let myHouse = new House(3);
myHouse instanceof House;
//last line will output true

//add properties to an array
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
for (let property in canary) {
    if (canary.hasOwnProperty(property)) {
        ownProps.push(property);
    }
}
console.log(ownProps);

//use prototype properties to reduce dublicate code
function Dog(name) {
    this.name = name;
}
Dog.prototype.numLegs = 4;
let beagle = new Dog("Snoopy");

//iterate over all properties (ownproperties and protoype properties)
function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

for (let property in beagle) {
    if (beagle.hasOwnProperty(property)) {
        ownProps.push(property);
    } else {
        prototypeProps.push(property);
    }
}
console.log(ownProps);
console.log(prototypeProps);

//check if the type of an object
//instanceof is mostly better to use so basicly forget it
function Dog(name) {
    this.name = name;
}

function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
        return true;
    } else {
        return false;
    }
}
