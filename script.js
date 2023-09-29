// EX1
let theName = window.prompt("Enter you name", "");
let gender = window.prompt("your gender", "");

if (gender == "male"){
    window.alert(`Welcome Mr ${theName}`)
} else if (gender == "female"){
    window.alert(`Welcome Ms ${theName}`)
} else
    window.alert(`Welcome ${theName}`);

let hotCold = window.prompt("do you want it hot or cold", "");
let drink = window.prompt("what is your drink", "");
(hotCold != "" && drink != "") ? console.log("your drink is gitting prepared") : console.log("try again please");
console.log(`${theName} - ${drink}`);