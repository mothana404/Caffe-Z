// EX1
let theName = window.prompt("Enter you name", "");
let gender;

while (gender != "male" || gender != "female"){
    gender = window.prompt("what is your gender", "");
    let check = gender.toLocaleLowerCase();
    if (check === "male"){
        window.alert(`Welcome Mr ${theName}`);
        break;
    } else if (check === "female") {
        window.alert(`Welcome Ms ${theName}`);
        break;
    }
}

let hotCold = window.prompt("do you want it hot or cold", "");
let drink = window.prompt("what is your drink", "");
(hotCold != "" && drink != "") ? window.alert("your drink is gitting prepared") : window.alert("try again please");
console.log(`${theName} - ${hotCold} - ${drink}`);

let userAr = [theName, gender, hotCold, drink];
for (let i = 0; i < userAr.length; i++){
    console.log(userAr[i]);
}