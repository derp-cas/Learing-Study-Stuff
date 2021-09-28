// avoiding mutations
var fixedValue = 4;

function incrementer() {
    let newValue = fixedValue + 1;
    return newValue;
}

//
//another option
// the global variable
var fixedValue = 4;

function incrementer() {
    return fixedValue + 1;
}

var newValue = incrementer(); // Should equal 5
console.log(fixedValue); // Should print 4

// Another principle of functional programming is to always declare your
// dependencies explicitly. This means if a function depends on a variable
// or object being present, then pass that variable or object directly into
// the function as an argument.

// The global variable

// The global variable
var fixedValue = 4;

function incrementer(x) {
    return x + 1;
}
console.log(incrementer(fixedValue));

//
//Re
