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

// for (; hamburger > 0; hamburger--) {
//     guest = prompt("Ваше имя, Сер?", "");
//     if (!guest) {
//         alert("Введите, пожалуйста, ваше имя");
//         continue;
//     }
//     alert(`Номер вашего заказа: ${hamburger*13}. Ожидайте!`);
//     alert(`Ваш заказ готов, ${guest}. Приятного аппетита!`);
//     // hamburger--;
//     if (hamburger === 1) {
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

// function calc(a, b) {
//     return (a + b);
// }

// const calcResult = calc(4, 3);
// console.log(calcResult);
// //    АБО!
// console.log(calc(4, 3));

// let money = 20;

// function ret() {
//     let money = 50;
//     return money;
// }

// const moreMoney = ret();
// console.log(moreMoney);

// const logger = function() {
//     console.log("Hello");
// };

// logger();

// const calc1 = (a, b) => a + b;
// console.log(calc1(9, 12));

// const usdToUah = 43.3;
// const eurToUah = 33.5;
// const poundToUah = 50.5;

// const currUah = "UAH";
// const currEuro = "EURO";
// const currPound = "POUND";
// const currUsd = "USD";

// const discount = 1.1;

// function convert(amount, currTypeIn, curr, currTypeOut) {
//     const result = (curr * amount).toFixed(2);
//     console.log(`${Number(amount).toFixed(2)} ${currTypeIn}: ${Number(result).toLocaleString("ru-RU", { minimumFractionDigits: 2 })} ${currTypeOut}`);
//     return [Number(result), currTypeOut];
// }

// function promo([result, currency]) {
//     const promoResult = (result * discount).toFixed(2);
//     console.log(`Отримайте вигідний курс за підписку на наш Telegram/Instagram: ${Number(promoResult).toLocaleString("ru-RU", { minimumFractionDigits: 2 })} ${currency} 💰`);
// }

// promo(convert(23, currUsd, usdToUah, currUah));
// convert(23, currUsd, usdToUah, currUah);
// convert(45, currEuro, eurToUah, currUah);
// convert(190, currPound, poundToUah, currUah);

const usdToUah = 43.3;
const eurToUah = 33.5;
const poundToUah = 50.5;

const currUah = "UAH";
const currEuro = "EURO";
const currPound = "POUND";
const currUsd = "USD";

const discount = 1.05;

function convert(amount, currTypeIn, curr, currTypeOut) {
    const result = Number((curr * amount).toFixed(2));
    console.log(`${amount.toLocaleString("ru-RU", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${currTypeIn}: ${result.toLocaleString("ru-RU", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${currTypeOut}`);
    return [result, currTypeOut];
}

function promo([result, currency]) {
    const promoResult = Number((result * discount).toFixed(2));
    console.log(`Отримайте вигідний курс за підписку на наш Telegram/Instagram: ${promoResult.toLocaleString("ru-RU", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${currency} 💰`);
}

promo(convert(1000.55, currUsd, usdToUah, currUah));
// АБО!
const res = convert(1000.55, currUsd, usdToUah, currUah);
promo(res);

// function test() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//         if (i === 4) return;
//     }
//     console.log("Done");
// }
// test();

// function doNothing() {}
// console.log(doNothing() === undefined);

// function returnNeighboringNumbers(b) {
//     return [b - 1, b, b + 1];
// }
// console.log(returnNeighboringNumbers(5));

// function getMathResult(a, b) {
//     if (typeof b !== "number" || b <= 0) {
//         return a;
//     }
//     let result = "";
//     for (let i = 1; i <= b; i++) {
//         result += a * i;
//         if (i < b) result += "---";
//     }
//     console.log(result);
// }
// console.log(getMathResult(3, 5));

const str = "Jesus Christ is the Lord";
console.log(str.slice(-18, -12));
const arr = [1, 2, 3, 4, 5];
console.log(arr.slice(1, 4));
console.log(str.substr(6, 6));

const number = 100.5;
console.log(Math.round(12.3));

const size = "12.6px";
console.log(parseFloat(size));
console.log(1.e6);
console.log("Completed: " + 1e-3 + "s.");

// function calculateVolumeAndArea(edgeLength) {
//     const powerVolume = Math.pow(edgeLength, 3);
//     const powerArea = Math.pow(edgeLength, 2);
//     console.log(`Объем куба: ${powerVolume}, площадь всей поверхности: ${6 * powerArea}`);
//     return (`Объем куба: ${powerVolume}, площадь всей поверхности: ${6 * powerArea}`);
// }
// calculateVolumeAndArea(4);

function calculateVolumeAndArea(edgeLength) {
    const powerVolume = Math.pow(edgeLength, 3);
    const powerArea = Math.pow(edgeLength, 2);
    if (edgeLength && !isNaN(edgeLength) && edgeLength > 0 && Number.isInteger(edgeLength)) {
        console.log(`Объем куба: ${powerVolume}, площадь всей поверхности: ${6 * powerArea}`);
        return (`Объем куба: ${powerVolume}, площадь всей поверхности: ${6 * powerArea}`);
    } else {
        console.log('При вычислении произошла ошибка');
        return ('При вычислении произошла ошибка');
    }
    
}
calculateVolumeAndArea(7);

function getCoupeNumber(placeNum) {
    if (isNaN(placeNum) || placeNum < 0 || !Number.isInteger(placeNum)) {
        console.log("Ошибка. Проверьте правильность введенного номера места");
        return ("Ошибка. Проверьте правильность введенного номера места");
    } else if (placeNum === 0 || placeNum > 36) {
        console.log("Таких мест в вагоне не существует");
        return("Таких мест в вагоне не существует");
    } else {
        let coupeNum = Math.ceil(placeNum / 4);
        console.log(`------------------\nВаше мeсто: ${placeNum}\nНомер вашего купе: ${coupeNum}\n------------------`);
        return(coupeNum);
    }
}
getCoupeNumber(30);

function getTimeFromMinutes(input) {
    if (isNaN(input) || input < 0 || !Number.isInteger(input) || input > 600) {
        console.log("Ошибка, проверьте данные");
        return "Ошибка, проверьте данные";
    }
    let nameHour = "час";
    let nameMinutes = "минут";
    let hours = Math.floor(input / 60);
    let minutes = input % 60;
    if (hours === 0 || hours >= 5) {
        nameHour = "часов";
    } else if (hours >= 2 && hours <= 4) {
        nameHour = "часа";
    } else {
        nameHour = "час";
    }
    console.log(`Это ${hours} ${nameHour} и ${minutes} ${nameMinutes}`);
    return `Это ${hours} ${nameHour} и ${minutes} ${nameMinutes}`;
}
getTimeFromMinutes(50);

function findMaxNumber(a, b, c, d) {
    if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number" || typeof d !== "number" || arguments.length < 4) {
        console.log(0);
        return 0;
    }
    let maxNum = Math.max(a, b, c, d);
    console.log(maxNum);
    return maxNum;
}

findMaxNumber();