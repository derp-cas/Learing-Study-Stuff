// case values are tested with strict equality (===).
// The break tells JavaScript to stop executing statements.
// If the break is omitted, the next statement will be executed.

function caseInSwitch(val) {
    var answer = "";
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;

        default:
            answer = "not defined";
    }

    return answer;
}

console.log(caseInSwitch(24));
