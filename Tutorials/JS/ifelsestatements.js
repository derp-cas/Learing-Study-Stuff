var names = [
    "Hole-in-one!",
    "Eagle",
    "Birdie",
    "Par",
    "Bogey",
    "Double Bogey",
    "Go Home!",
];
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes == par - 1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    } else if (strokes == par + 1) {
        return names[4];
    } else if (strokes == par + 2) {
        return names[5];
    } else {
        return "Go Home";
    }
}

console.log(golfScore(4, 4));

// function golfScore(par, strokes) {
//     return strokes == 1
//       ? names[0]
//       : strokes <= par - 2
//       ? names[1]
//       : strokes == par - 1
//       ? names[2]
//       : strokes == par
//       ? names[3]
//       : strokes == par + 1
//       ? names[4]
//       : strokes == par + 2
//       ? names[5]
//       : strokes >= par + 3
//       ? names[6]
//       : "Change Me";
//   }
