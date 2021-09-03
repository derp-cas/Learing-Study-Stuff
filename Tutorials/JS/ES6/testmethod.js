// JavaScript has multiple ways to use regexes. One way to test a regex is using
// the .test() method. The .test() method takes the regex, applies it to a
// string (which is placed inside the parentheses), and returns true or
// false if your pattern finds something or not.

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);

//anotherone
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);

//Match a literal string with different Possibilities
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);

//ignore case while matching
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result = fccRegex.test(myString);

//extract matches
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line

//find more than the first match
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // g extracts pattern more than one, i = ignore case
let result = twinkleStar.match(starRegex);

//match anything with wildcard period
// For example, if you wanted to match hug, huh, hut, and hum,
//you can use the regex /hu./ to match all four words.
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);

//match single character with multiple possibilities
let quoteSample =
    "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let result = quoteSample.match(vowelRegex);

//anotherone
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex); //returns big
bagStr.match(bgRegex); //returns bag
bugStr.match(bgRegex); //returns bug
bogStr.match(bgRegex); //returns null

//match letters of the alphabet
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex);
batStr.match(bgRegex);
matStr.match(bgRegex);
//in order, the three match calls would return the values
//["cat"], ["bat"], and null.

//anotherone
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line

//anotherone
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line

//match single charakters not specified
//For example, /[^aeiou]/gi matches all characters that are not a vowel.
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi;
let result = quoteSample.match(myRegex);

//match characters that occur on or more times
let difficultSpelling = "Mississippi";
let myRegex = /s+/gi; // Change this line
let result = difficultSpelling.match(myRegex);

//match characters that occur zero or more times
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);
// in order, the three match calls would return values
//In order, the three match calls would return the values ["goooooooo"],
//["g"], and null.

//anotherone
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/;
let result = chewieQuote.match(chewieRegex);
//result = "Aaaaaaaaaaaaaaaa"

//Lazy Matching
//lazy match finds the smallest possible part of the string that satisfies
//the regex pattern.
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/;
let result = text.match(myRegex);

//match begining string patterns
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);

//anotherone
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
// The first test call would return true, while the second would return false.
