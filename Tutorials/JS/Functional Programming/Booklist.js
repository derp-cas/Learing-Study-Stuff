// The global variable
var bookList = [
    "The Hound of the Baskervilles",
    "On The Electrodynamics of Moving Bodies",
    "Philosophiæ Naturalis Principia Mathematica",
    "Disquisitiones Arithmeticae",
];

// Change code below this line
function add(arr, bookName) {
    // copies booklist to newbooklist without ref
    let nuBookList = arr.slice();
    //another way to do it:
    // let nuBookList = [...arr];
    nuBookList.push(bookName);
    return nuBookList;

    // Change code above this line
}

// Change code below this line
function remove(arr, bookName) {
    let removedBookList = arr.slice();
    var book_index = removedBookList.indexOf(bookName);
    if (book_index >= 0) {
        removedBookList.splice(book_index, 1);
        return removedBookList;

        // Change code above this line
    }
}

var newBookList = add(bookList, "A Brief History of Time");
var newerBookList = remove(bookList, "On The Electrodynamics of Moving Bodies");
var newestBookList = remove(
    add(bookList, "A Brief History of Time"),
    "On The Electrodynamics of Moving Bodies"
);

console.log(bookList);
