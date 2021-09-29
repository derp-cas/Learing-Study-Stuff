// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
    var newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i]));
    }

    return newArray;
};

var new_s = s.myMap(function (item) {
    return item * 2;
});

//
//Solve with the forEach method
//this keyword gives acces to the oibject we are calling myMap on.
//The forEach method adds elements to already declared empty array
//as we modify each element with the given callback method.

// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
    var newArray = [];
    // Add your code below this line
    this.forEach((a) => newArray.push(callback(a)));
    // Add your code above this line
    return newArray;
};

var new_s = s.myMap(function (item) {
    return item * 2;
});
