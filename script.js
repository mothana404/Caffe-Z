// function askGender (gender){
//     while (gender != "male" || gender != "female"){
//         var gender = window.prompt("what is your gender", "");
//         if (gender.toLocaleLowerCase() === "male"){
//             window.alert(`Welcome Mr ${theName}`);
//             break;
//         } else if (gender.toLocaleLowerCase() === "female") {
//             window.alert(`Welcome Ms ${theName}`);
//             break;
//         }
//     }
//     return gender;
// }

// // EX1
// let theName = window.prompt("Enter you name", "");
// let gender = askGender();

// let hotCold = window.prompt("do you want it hot or cold", "");
// let drink = window.prompt("what is your drink", "");
// (hotCold != "" && drink != "") ? window.alert("your drink is gitting prepared") : window.alert("try again please");
// console.log(`${theName} - ${hotCold} - ${drink}`);

// let userAr = [theName, gender, hotCold, drink];
// for (let i = 0; i < userAr.length; i++){
//     console.log(userAr[i]);
// }

// let age = window.prompt("what is your age","");

let dev = document.getElementById("speDiv");
let par = document.createElement("p");
let ul = document.createElement("ul");
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");

let theName = document.querySelector("input[name = name]");
let age = document.querySelector("input[name = age]");
let drink = document.querySelector("input[name = drink]");

let button = document.querySelector("#send");
button.addEventListener("click", function (e){
    e.preventDefault();
    par.innerHTML = theName.value;
    li1.innerHTML = age.value;
    if (document.querySelector("input[name = hot]").checked){
        li2.innerHTML = "hot";
    } else if (document.querySelector("input[name = cold]").checked){
        li2.innerHTML = "cold";
    }
    li3.innerHTML = drink.value;
});

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

dev.appendChild(par);
dev.appendChild(ul);
document.body.appendChild(dev);