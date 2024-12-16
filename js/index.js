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


if (3) {
        console.log("OK!");
    } else {
        console.log("wrong");
    }


// const diskSpace = +prompt("Кількість вільного місця на вашому девайсі", "");
// if (diskSpace > 128) {
//     console.log("Ваш пристрій має багато вільного місця");
// } else if (diskSpace > 32) {
//     console.log("Ваш пристрій має достатньо вільного місця")
// } else if (diskSpace > 16) {
//     console.log("У вашому сховищі закінчується вільне місце. Попіклуйтесь заздалегідь");
// } else {
//     console.log("Придбайте iCloud, щоб розширити сховище!");
// }

// (diskSpace > 128) ? console.log("Ваш пристрій має багато вільного місця") :
// (diskSpace > 32) ? console.log("Ваш пристрій має достатньо вільного місця") :
// (diskSpace > 16) ? console.log("У вашому сховищі закінчується вільне місце. Попіклуйтесь заздалегідь") :
// console.log("Придбайте iCloud, щоб розширити сховище!");

// switch (diskSpace) {
//     case 128:
//         alert("Ваш пристрій має багато вільного місця");
//         break;
//     case 32:
//         alert("Ваш пристрій має достатньо вільного місця");
//         break;
//     case 16:
//         alert("У вашому сховищі закінчується вільне місце. Попіклуйтесь заздалегідь");
//         break;
//     default:
//         alert("Придбайте iCloud, щоб розширити сховище!");
//         break;
// }

// const hamburger = 10;
// const fries = 3;
// const cola = 0;

// if (hamburger && fries && cola) {
//     console.log("Я наївся");
// }

// console.log((hamburger && fries && cola));

// const hamburger = 3;
// const potato = 20;
// const cola = 10;
// const meet = true;
// const chicken = 1;


// console.log(hamburger >= 3 && cola && potato);

// (hamburger >= 3 && cola >= 1 && potato >= 1) ? console.log("остаемся здесь!") : console.log("Уходим!");

// (hamburger || potato || cola && meet) ? console.log("Встреча состоялась") : console.log("Ушли домой");
// // console.log(hamburger || potato || cola);

// (hamburger >= 3 && cola >= 2 || potato && chicken >= 1) ? console.log("Готовь кошелек") : console.log("Сегодня кушаем дома!");
// console.log(hamburger >= 3 && cola >= 2 || potato && chicken);
// console.log( 5 === 5 && 3 > 1 || 5);

let hamburger = 3;
let guest;

// while (hamburger >= 1) {
//     guest = prompt("Ваше имя, Сер?", "");
//     hamburger--;
//     alert(`Ваш заказ готов, ${guest}. Приятного аппетита!`);
//     alert(`Подходите к касе, осталось ${hamburger} бургеров`);
// }

// if (hamburger == 0) {
//     alert("Бургеров нет в наличии! Подождите")
// }

// do {
//     guest = prompt("Ваше имя, Сер?", "");
//     hamburger--;
//     alert(`Ваш заказ готов, ${guest}. Приятного аппетита!`);
//     alert(`Подходите к касе, осталось ${hamburger} бургеров`);
// }
// while (hamburger >= 1);

// for (let h = 3; h >= 1; h--) {
//     guest = prompt("Ваше имя, Сер?", "");
//     alert(`Номер вашего заказа: ${hamburger*13}. Ожидайте!`);
//     alert(`Ваш заказ готов, ${guest}. Приятного аппетита!`);
//     hamburger--;
//     if (hamburger === 0) {
//             alert("Бургеров нет в наличии! Подождите");
//             break;
//     }
//     alert(`Подходите к касе, осталось ${hamburger} бургеров`);
// }

