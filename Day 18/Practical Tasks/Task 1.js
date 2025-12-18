let age = 25

function checkAge() {


    if (age <= 12) {
        console.log("Child");
    } else if (age <= 30) {
        console.log("Teen");
    } else if (age <= 55) {
        console.log("Adult");
    }
    else {
        console.log("Senior");
    }
}

checkAge();