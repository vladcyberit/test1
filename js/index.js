"use strict";

const name = `Jake`;
console.log(name);

{
    const obj = 45;
    console.log(obj);
}
//  console.log(obj);
let age;
console.log(age);
console.log(`string` * 0);

const person = {
    name: "Vlad",
    age: 23,
    isWorking: true
};

// динамические данные внутри обьекта
const pet = "dog";
person[pet] = "1234"

person.couple = "Yana";
person["pet"] = "false";
console.log(person.name);

const cat = ["Jessya", 8, true, {person}];
console.log(cat[3]);

const answers = [];
// answers[0] = +prompt("Indicate the weight of the package in kg", "10kg");
// answers[1] = prompt("City to deliver", "New-York");
// answers[2] = prompt("Your name", "Ben");

// document.write(`<font size="8px;"><b>Delivery info:</b></font> <br> <br> <b>Weight:</b> ${answers[0]}; <br> <b>City:</b> ${answers[1]}; <br> <b>Name:</b> ${answers[2]};`);
// document.write(`<br> <b>Price:</b> ${answers[0] * 10}$`);

const categ = "cars";

console.log(`https://bochka.com/${categ}/5/1`);

// alert(`Привет, ${answers[2]}`);

let incr = 10,
    decr = 10;

console.log(5 % 2 === "1");

const user1 = 3,
    user2 = 3;

    console.log(user1 !== user2);

