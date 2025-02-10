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

//COUS - Complete order ussuing system

// for (let h = 3; h >= 1; h--) {
//     guest = prompt("Ваше имя, Сер?", "");
//     if (!guest) {
//         h++;
//         alert("Введите, пожалуйста, ваше имя");
//         continue;
//     }
//     alert(`Номер вашего заказа: ${hamburger*13}. Ожидайте!`);
//     alert(`Ваш заказ готов, ${guest}. Приятного аппетита!`);
//     hamburger--;
//     if (hamburger === 0) {
//             alert("Бургеров нет в наличии! Подождите");
//             break;
//     }
//     alert(`Подходите к касе, осталось ${hamburger} бургеров`);
// }

// for (let i = 3; i < 10; i++) {
//     console.log(i);
//     for (let j = 5; j < 15; j++) {
//         console.log(j);
//     }
// }

// let result = "";
// const length = 7;

// for (let i = 1; i < length; i++) {

//     for (let j = 0; j < i; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result);


// let result = "";
// const length = 2;
// const upperLength = 7;
// const lowerLength = 0;

// for (let i = 1; i < length; i++) {
//     for (let j = 1; j < upperLength; j++) {
//         for (let k = 0; k < j; k++) {
//             result += "*";
//         }
//             result += "\n";
//     }

//     for (let l = 6; l > lowerLength; l--) {
//         for (let m = 0; m < l; m++) {
//             result += "*";
//         }
//         result += "\n";
//     }
//     console.log(result);
// }

// first: for (let i = 0; i <= 2; i++) {
//     console.log(`First level ${i}`);
//     for (let j = 0; j <= 2; j++) {
//         console.log(`Second level ${j}`);
//         for (let k = 0; k <= 2; k++) {
//             if (k === 1) continue first;
//             console.log(`Third level ${k}`);
//         }
//     }
// }

// const arrayOfNumbers = [];
// for (let i = 5; i <= 10; i++) {
//     if (i === 5) {
//         arrayOfNumbers[0] = i;
//     } else if (i === 6) {
//         arrayOfNumbers[1] = i;
//     } else if (i === 7) {
//         arrayOfNumbers[2] = i;
//     } else if (i === 8) {
//         arrayOfNumbers[3] = i;
//     } else if (i === 9) {
//         arrayOfNumbers[4] = i;
//     } else {
//         arrayOfNumbers[5] = i;
//     }
// }
// console.log(arrayOfNumbers);

// for (let i = 5; i <= 10; i++) {
//     arrayOfNumbers[i - 5] = i;
// }
// console.log(arrayOfNumbers);

// const arr1 = [3, 5, 8, 16, 20, 23, 50];
// const result = [];
// const arrLength = 7;

// for (let i = 0; i < arrLength; i++) {
//     result[i] = arr1[i];
// }
// console.log(result);



// for (let i = 0; i < 5; i++) {
//     // typeof data[i];
//     if (typeof data[i] === "number") {
//         data[i] = data[i] * 2;
//     } else {
//         data[i] += " - done";
//     }
// }
// console.log(data);
// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result1 = [];
// console.log(data.length);

// for (let i = 5; i > 0; i--) {
//     result1[data.length - i] = data[i - 1];
// }
// console.log(result1);

// let result = "";
// const lines = 6;

// for (let i = 1; i <= lines; i ++) {

//     for (let l = 0; l < lines - i; l++) {
//         result += " ";
//     }

//     for (let k = 0; k < 2 * i - 1; k++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result);
// let num = 0;

// function showFirstBonus(name) {
//     console.log("Congratulations " + name + "! You receive 10% on all items in our shop");
//     console.log(num);
// }

// showFirstBonus("Kod");
// console.log(num);

function calc(a, b) {
    return (a + b);
}

const calcResult = calc(4, 3);
console.log(calcResult);
//    АБО!
console.log(calc(4, 3));

let money = 20;

function ret() {
    let money = 50;
    return money;
}

const moreMoney = ret();
console.log(moreMoney);

const logger = function() {
    console.log("Hello");
};

logger();

const calc1 = (a, b) => a + b;
console.log(calc1(9, 12));