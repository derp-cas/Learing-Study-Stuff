function convertToF(celsius) {
    let fahrenheit;
    fahrenheit = celsius * (9 / 5) + 32;
    return fahrenheit;
}

convertToF(30);

// reverse a string
function reverseString(str) {
    for (var reversedStr = "", i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

//shorter version
function reverseString(str) {
    return str.split("").reverse().join("");
}

//farcorialize a number
function factorialize(num) {
    for (var product = 1; num > 0; num--) {
        product *= num;
    }
    return product;
}

factorialize(5);

//using recursion
function factorialize(num) {
    if (num === 0) {
        return 1;
    }
    return num * factorialize(num - 1);
}

factorialize(5);

//find longest word
function findLongestWordLength(str) {
    //convert the string into an arraoy of words
    let words = str.split(" ");
    //keep track of maximum length
    let maxLength = 0;
    //
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
        }
    }

    return maxLength;
}

//return lagrest numbers in arrays
function largestOfFour(arr) {
    //store the results
    let results = [];
    //iterate through the outer array
    for (let i = 0; i < arr.length; i++) {
        //hold the largest number
        //must be outside the inner loop so it wont be reassigned
        //until it finds a larger number
        let largestNumber = arr[i][0];
        // innerloop for the subarrays
        for (let j = 1; j < arr[i].length; j++) {
            //check if the element of the subarray islarger than currently
            //stored largest number
            if (arr[i][j] > largestNumber) {
                largestNumber = arr[i][j];
            }
        }
        results[i] = largestNumber;
    }

    return results;
}
largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
]);

//confirm the ending
function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
}

confirmEnding("He has to give me a new name", "name");

//repeat a string x times
function repeatStringNumTimes(str, num) {
    var accumulatedStr = "";

    while (num > 0) {
        accumulatedStr += str;
        num--;
    }

    return accumulatedStr;
}

//string kürzen
function truncateString(str, num) {
    if (str.length > num) {
        return str.slice(0, num) + "...";
    } else {
        return str;
    }
}

//passing the truth test
function findElement(arr, func) {
    let num = 0;

    for (let i = 0; i < arr.length; i++) {
        num = arr[i];
        if (func(num)) {
            return num;
        }
    }

    return undefined;
}

findElement([1, 2, 3, 4], (num) => num % 2 === 0);

//Check if a value is classified as a boolean primitive. Return true or false.
function booWho(bool) {
    return typeof bool === "boolean";
}

//first letter of eacht word should be capilaized
String.prototype.replaceAt = function (index, character) {
    return (
        this.substr(0, index) +
        character +
        this.substr(index + character.length)
    );
};

function titleCase(str) {
    var newTitle = str.split(" ");
    var updatedTitle = [];
    for (var st in newTitle) {
        updatedTitle[st] = newTitle[st]
            .toLowerCase()
            .replaceAt(0, newTitle[st].charAt(0).toUpperCase());
    }
    return updatedTitle.join(" ");
}

//Copy each element of the first array into the second array, in order.
//begin inserting elements at index n of the second array.
//Return the resulting array. The input arrays should remain the
//same after the function runs.
function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    let localArray = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
        localArray.splice(n, 0, arr1[i]);
        n++;
    }
    return localArray;
}

// reemove all falsy values from an array
// falys values are : false, null, 0, "",undefinded and NaN.

function bouncer(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) newArray.push(arr[i]);
    }
    return newArray;
}

//Return the lowest index at which a value (second argument) should be inserted
//into an array (first argument) once it has been sorted. The returned value should
//be a number.
function getIndexToIns(arr, num) {
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= num) return i;
    }

    return arr.length;
}

//Return true if the string in the first element of the array
//contains all of the letters of the string in the second element of the array.
function mutation(arr) {
    let test = arr[1].toLowerCase();
    let target = arr[0].toLowerCase();
    for (let i = 0; i < test.length; i++) {
        if (target.indexOf(test[i]) < 0) return false;
    }
    return true;
}

mutation(["hello", "hey"]);
mutation(["Alien", "line"]);
mutation(["hello", "Hello"]);

//function that splits an array (first argument) into groups the length
//of size (second argument) and returns them as a two-dimensional array.
function chunkArrayInGroups(arr, size) {
    let temp = [];
    let result = [];

    for (let a = 0; a < arr.length; a++) {
        if (a % size !== size - 1) temp.push(arr[a]);
        else {
            temp.push(arr[a]);
            result.push(temp);
            temp = [];
        }
    }

    if (temp.length !== 0) result.push(temp);
    return result;
}
