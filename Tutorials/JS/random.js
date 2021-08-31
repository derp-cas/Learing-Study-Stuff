function randomFraction() {
    var rdm = Math.random();
    return rdm;
}

//random nubmer between 0-9
function randomWholeNum() {
    return Math.floor(Math.random() * 10);
}

//generate random whole numbers within a range
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
