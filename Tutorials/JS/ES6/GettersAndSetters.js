// Getter function are returning the alue of an objects private
//variable without accesing the private variable

//Setter functions modify the value of an objects private variable
//based on the value passed into the setters function.
//This change could involve calculations, or overwriting the previous
// value completely.
class Book {
    constructor(author) {
        this._author = author;
    }
    // getter
    get writer() {
        return this._author;
    }
    // setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}
const novel = new Book("anonymous");
console.log(novel.writer);
novel.writer = "newAuthor";
console.log(novel.writer);
//the console would display: anonymous and newAuthor
//Note: It is convention to precede the name of a private
// variable with an underscore (_).

//another example
class Thermostat {
    constructor(fahrenheit) {
        this._fahrenheit = fahrenheit;
    }
    get temperature() {
        return (5 / 9) * (this._fahrenheit - 32);
    }
    set temperature(celsius) {
        this._fahrenheit = (celsius * 9.0) / 5 + 32;
    }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
