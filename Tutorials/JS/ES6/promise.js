//promise is a constructor function so we need to use "new"
//keyword to create one.
//It takes a function, as its argument, with two parameters
//resolve and reject.
const myPromise = new Promise((resolve, reject) => {});

const makeServerRequest = new Promise((resolve, reject) => {});
//promises got 3 states: pending, fulfilled, and rejected.

//example
const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not recieved");
    }
});
makeServerRequest.then((result) => {
    console.log(result);
});
makeServerRequest.catch((error) => {
    console.log(error);
});
