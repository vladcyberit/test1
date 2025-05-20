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

// function first (language, callback) {
//     setTimeout(function() {
//         console.log(`Я учу: ${language}`);
//         callback();
//     }, 500);
    
// }

// function second() {
//     console.log("Я выучил этот язык");
// }

// first("React", second);
// // АБО
// first("React", function() {
//     console.log("Я выучил этот язык");
// });


// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// learnJS("JavaScript", function() {
//     console.log("Я выучил этот язык");
// });

const options = {
    name: "test",
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        bg: "red",
        bg2: "red",
        bg3: "red",
        bg4: "red1",
    },
    makeTest: function() {
        console.log("Test");
    }
};

// console.log(options.colors.bg);
// delete options.colors.bg;
// console.log(options);

// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let keyIn in options[key]) {
//             console.log(`свойство ${keyIn} имеет значение ${options[key][keyIn]}`);
//             counter++;
//         } 
//     } else {
//         console.log(`свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);

// console.log(Object.keys(options).length);
// options.makeTest();

const {border, bg, bg2, bg4} = options.colors;
console.log(bg4);

const books = [1, 2, 5, 8, 12];
console.log(books.push(1, 2, "45"));
console.log(books[2]);

for (let i = 0; i < books.length; i++) {
    console.log(books[i]);
}

for (let value of books) {
    console.log(value);
}

books.forEach(function(item, jkj, bookjo) {
    console.log(`${item} месте ${jkj} в массиве ${bookjo}`);
});

const product = ["Яблоки", "Молоко", "Хлеб", "Сыр", "Помидоры", "Огурцы", "Картофель", "Морковь", "Курица", "Рис"];
const prodOrg = product.join("--");
console.log(prodOrg);

const prodOrg1 = prodOrg.split("--");
console.log(prodOrg1);

const abc = ["a", "k", "j", "b", "d", "c"];
const numberss = [1, 9, 0, 4, 3, 7, 8, 5];
const numbersss = [1, 9, 10, 20, 23, 111, 124, 10032, 17];

console.log(abc.sort());
console.log(numberss.sort(compareNum));
console.log(numbersss.sort(compareNum));

function compareNum(a, b) {
    return b - a;
}

let names = "Александр Иванов, Владислав Чосенко, Дмитрий Смирнов, Михаил Кузнецов, Сергей Попов, Андрей Васильев, Евгений Петров, Владимир Соколов, Игорь Михайлов, Алексей Фёдоров, Николай Морозов, Артём Новиков, Олег Павлов, Павел Соловьёв, Василий Васильев, Виктор Зайцев, Роман Павлов, Антон Семёнов, Григорий Голубев, Степан Воробьёв, Тимофей Козлов";
let namesDB = names.split(", ");
console.log(namesDB);
namesDB = namesDB.sort();
console.log(namesDB);

//Binary search v1.0.0

// function binary_search(DB, name) {
//     //Снизу переменные с числами, которые помогут обращаться к нужным индексам в массиве
//     let low = 0;
//     let high = DB.length - 1;

//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);
//         let guess = DB[mid];

//         if (guess == name) {
//             console.log("Вход выполнен успешно");
//             return mid;
//         } else if (guess < name) {
//             low = mid + 1;
//         } else {
//             high = mid - 1;
//         }
//     }
//     console.log("Неверные данные пользователя. Попробуйте позже.");
//     return -1;
// }

// binary_search(namesDB, "Джексон");

//Binary search v1.0.1

function binary_search(DB, name1, name2) {
    //Снизу переменные с числами, которые помогут обращаться к нужным индексам в массиве
    let fullName = `${name1} ${name2}`;
    let low = 0;
    let high = DB.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let guess = DB[mid];

        if (guess == fullName) {
            console.log("Вход выполнен успешно");
            alert("Вход выполнен успешно");
            //DEV отчёт по работе ф-и
            alert(`Поиск в массиве из ${DB.length} элементов занял ${Math.ceil(Math.log2(DB.length))} шагов`);
            return mid;
        } else if (guess < fullName) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    console.log("Неверные данные пользователя. Попробуйте позже.");
    alert("Неверные данные пользователя. Попробуйте позже.");
    return -1;
}

// // binary_search(namesDB, prompt("Введите ваше полное имя", ""), prompt("Введите вашу фамилию", ""));

// console.log(Math.ceil(Math.log2(4e9)));

const obj = {
    a: 5,
    b: 10,
    c: {
        j: 120,
        k: 130,
    },
};

// const copyObj = obj;

// copyObj.a = 100;

// console.log(obj);
// console.log(copyObj);

//Копирование через цыкл
function copy(mainObj) {
    let objCopy = {};
    let key;

    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}
const newObj = copy(obj);
obj.a = 1000;
newObj.c["k"] = 1e9;
console.log(newObj);
console.log(obj);

//Деструктуризация объекта - извлеч. значений из объекта и присвоение переменным (независимо)
let {a, c: {k}} = newObj;
a = 2.2;
k = 3e3;
console.log(a, k);
console.log(newObj);
console.log(obj);

const extra = {
    changes: false,
    isInteger: true,
    d: 290,
};

//Копирование через Object.assign();
const combine = Object.assign({}, newObj, extra);
console.log(combine);
combine.d = 1e7;
combine.c.k = 1;
console.log(combine);
console.log(obj);
console.log(newObj);
console.log(extra);

//Копирование массива через метод .slice();
const oldArray = ["cayene 45", "gts900", "bonko s2", "powerRocket1000"]
const newArray = oldArray.slice();

newArray[2] = "bonko s3 SKYLINE";
console.log(oldArray);
console.log(newArray);

//Копирование объектов и массивов с помощью Spread - оператора
const testMergeObjects = { ...newObj, ...extra, ...person };
console.log(testMergeObjects);
testMergeObjects.pet = true;
console.log(testMergeObjects);
console.log(person);

let video = ["youtube", "vimeo", "tiktok", "instagram"],
    blogs = ["wordpress", "livejournal", "blogger"],
    internet = [];
internet = [...video, ...blogs, "facebook"];
console.log(internet);

// //полезно для React'а
function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const dataServer = ["4543Gh", "hgj89jj", "44jkd00"];

log(...dataServer);

const copyObjCopy = {...newObj};
console.log(copyObjCopy);
copyObjCopy.c.k = 10090;
copyObjCopy.a = 99221;
console.log(copyObjCopy);
console.log(newObj);

//Тестовое задание по курсу по обьектам
const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        if (!plan?.age || !plan.skills?.languages) return "";
        let { age } = plan;
        let { skills: { languages } } = plan;
        let modLangs = (languages.join(" ")).toUpperCase();
        console.log(`Мне ${age} и я владею языками: ${modLangs}`);
        return `Мне ${age} и я владею языками: ${modLangs}`;
    },
};

function showExperience(plan) {
    if (!plan.skills?.exp) return "";
    let { skills: {exp} } = plan;
    // let modExp = exp.slice(0,1);
    // modExp += " месяц";
    console.log(exp);
    return exp;
}
showExperience(personalPlanPeter);

function showProgrammingLangs(plan) {
    if (!plan.skills?.programmingLangs) return "";
    let languages = "";
    let { skills: {programmingLangs}} = plan;

    for (let key in programmingLangs) {
        languages += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }
    languages = languages.trim();
    console.log(languages);
    return languages;
}
showProgrammingLangs(personalPlanPeter);

personalPlanPeter.showAgeAndLangs(personalPlanPeter);

//Тестовое задание по курсу по массивам
const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let strFam = arr.join(" ").trim();

    if (strFam) {
        console.log(`Семья состоит из: ${strFam}`);
        return `Семья состоит из: ${strFam}`;
    } else {
        console.log("Семья пуста");
        return "Семья пуста";
    }
}
showFamily(family);

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(function(item) {
        let modItem = item.toLowerCase();
        console.log(modItem);
    });
}
standardizeStrings(favoriteCities);

const someString = 'This is some strange string';

function reverse(str) {
    if (typeof str === "string") {
        let arr = str.split('');
        arr = (arr.reverse()).join("");
        console.log(arr);
        return arr;
    } else {
        console.log("Ошибка!");
        return "Ошибка!";
    }
    
}
reverse(someString);

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    if (arr.length === 0) return "Нет доступных валют";
    let currAvailable = arr.slice();
    let indxSearch = currAvailable.indexOf(missingCurr);

    if (indxSearch !== -1) {
        currAvailable.splice(indxSearch, 1);
    }
        
    currAvailable = currAvailable.join("\n");
    console.log(`Доступные валюты:\n${currAvailable}`);
    return `Доступные валюты:\n${currAvailable}`;
}
availableCurr([...baseCurrencies, ...additionalCurrencies], 'RUB');

//OOP Basics
const carSedan = {
    wheels: "26 inches",
    type: "sedan",
    options: "AI drive assistant",
    color: "white",
    onboardComputer: function(model) {
        if (parseInt(model.replace(/\D/g, "")) >= 458) {
            console.log(`Sedan ${model} has built-in on-board computer with AI assistant v4.0.1 Alpha and 4xWR Climate Control`);
        } else {
            console.log(`Sedan ${model} has built-in on-board computer with AI assistant v3.0.11.7`);
        }
    }
};

// const carLT457 = {
//     model: "LT457",
//     color: "deep ocean",
// };

// carSedan.onboardComputer(carLT457.model);

// //Old way of creating prototypes
// carLT457.__proto__ = carSedan;
// console.log(carLT457.wheels);

// for (let key in carLT457) {
//     console.log(`${key}: ${carLT457[key]}`);
// }

// //NEW way of creating prototypes
// Object.setPrototypeOf(carLT457, carSedan);
// for (let key in carLT457) {
//     console.log(`${key}: ${carLT457[key]}`);
// }

const carLT460 = Object.create(carSedan, {
    model: { value: "LT460", enumerable: true },
    color: { value: "deep blue", enumerable: true },
    price: { value: `${1e5}$`, enumerable: true },
});
carSedan.onboardComputer(carLT460.model);

for (let key in carLT460) {
    console.log(`${key}: ${carLT460[key]}`);
}

//Advanced practical tasks on working with arrays and objects
const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000,
}

function isBudgetEnough(data) {
    let totalArea = 0;

    data.shops.forEach((shop) => {
        totalArea += shop.length * shop.width;
    });
    let totalVolume = totalArea * data.height;
    let totalBudget = totalVolume * data.moneyPer1m3;
    if (totalBudget <= data.budget) {
        console.log("Бюджета достаточно");
        return "Бюджета достаточно";
    } else {
        console.log("Бюджета недостаточно");
        return "Бюджета недостаточно";
    }
}

isBudgetEnough(shoppingMallData);

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
const students1 = [
    "Alice Johnson", "Bob Smith", "Charlie Brown", "David White", "Eve Davis", "Frank Harris", 
    "Grace Lewis", "Hannah Clark", "Ivy Walker", "Jack King", "Karen Scott", "Leo Young", 
    "Mona Hill", "Nathan Green", "Olivia Adams", "Paul Nelson", "Quincy Baker", "Rachel Martinez", 
    "Steve Carter", "Tina Mitchell", "Uma Turner", "Vince Perez", "Walter Collins", "Xena Torres", 
    "Yasmine Evans", "Zachary Morgan", "Abigail Taylor", "Benjamin Lee", "Catherine Hall", 
    "Daniel Gonzalez", "Emily Rodriguez", "Freddy Gonzalez", "Georgia Lopez", "Henry Allen", 
    "Isabelle Carter", "James King", "Kelly Harris", "Liam Robinson", "Monica Campbell", "Nina Parker"
];

function sortStudentsByGroups(arr) {
    let sortedArr = [];
    let newArr = [];
    arr.sort();

    while (arr.length >= 3) {
        sortedArr = arr.splice(0, 3);
        newArr.push(sortedArr);
    }

    newArr.push(`Оставшиеся студенты: ${(arr.length > 0) ? arr.join(", ") : "-"}`);

    console.log(`У нас есть ${newArr.length - 1} команд:\n`, newArr);
    return newArr;
}

sortStudentsByGroups(students1);

//Dynamic typing in JS
// // to String
const num = 4;
console.log(typeof(String(num)));
console.log(typeof(num + ""));

// // to Number
const dogYears = "20";
console.log(typeof(Number(dogYears)));
console.log(typeof(+dogYears));
console.log(typeof(parseInt("26px", 10)));

// // to Boolean

// 0, "", null, undefined, NaN = false

let themeSwitcher = 1;

function Switcher(value) {
    if (value) {
        console.log("Light theme");
    } else {
        console.log("Dark theme");
    }
}
Switcher(themeSwitcher);
themeSwitcher = 0;
Switcher(themeSwitcher);

console.log(typeof(Boolean(themeSwitcher)));
console.log(typeof(!!themeSwitcher));

// Lexical environment

let numLex = 5; debugger;

function logNumber() {
    let numLex = 4; debugger;
    console.log(numLex);
}

numLex = 6;

logNumber(); debugger;

numLex = 10;

logNumber(); debugger;

function createCounter() {
    let counter = 0; debugger;

    const myFunction = function() {
        counter++;
        return counter; debugger;
    }

    return myFunction; debugger;
}

const increment = createCounter(); debugger;
const secondInc = createCounter();

// console.log(increment());
// console.log(increment());
// console.log(increment());
// console.log(increment());
// console.log(increment());

//OR
const c1 = increment(), 
    c2 = increment(),
    c3 = increment(),
    c4 = increment(),
    c5 = increment(),
    b6 = increment(); debugger;

console.log(c1, c2, c3, c4, c5, b6, secondInc(), increment(), secondInc()); debugger;

const teddy = ["Ted", "Teddik"];
const [, first] = teddy;
console.log(first);

// Tasks

let y = 1;
let x = y = 2;
console.log(x);
console.log( "1"[0] );
console.log( Boolean("") );
console.log(Boolean(true - null));
console.log(Boolean([ ] + false - null + true));

console.log([ ] + 1 + 2);
console.log( null || 2 && 3 || 4 );
console.log(typeof(+"dog"));

const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Открыто' : answer = 'Закрыто';

    return answer;
}

console.log(isOpen(restorantData.openNow))

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average.slice(0, -1)) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = Object.assign({}, data);
    copy.waitors = [...data.waitors];

    copy.waitors[0] = {name: 'Mike', age: 32};
    return copy;
}

transferWaitors(restorantData);

//Getting elements from HTML

const box = document.getElementById("box");
console.log(box);

const btns = document.getElementsByTagName("button");
console.log(btns[0]);

const circles = document.getElementsByClassName("circle");
console.log(circles);

const wrapper = document.querySelector(".wrapper");

const hearts = wrapper.querySelectorAll(".heart");
console.log(hearts);

hearts.forEach(item => {
    console.log(item);
});

const oneHeart = wrapper.querySelector(".heart");
console.log(oneHeart);

// Interacting with elements on page

box.style.backgroundColor = "blue";
box.style.width = "200px";

const boxHeight = 200 / 2;
box.style.cssText = `background-color: green; height: ${boxHeight}px;`;

console.dir(btns[0]);

btns[0].style.borderRadius = "50px";
btns[0].style.cssText += "background-color: lightgrey;"

// // Loops for interacting with the group of elements

// for (let i = 0; i < btns.length; i++) {
//     btns[i].style.cssText = "background-color: darkgrey; font-weight: 700; font-size: 16px; border-radius: 50px";
// }

hearts.forEach(item => {
    item.style.cssText = "background-color: grey;";
});

// // Methods to interact with elements on page
// // // new methods

const div = document.createElement("div");

// const text = document.createTextNode("Это тестовый текст!");

div.classList.add("black");

wrapper.append(div);
// OR
// document.querySelector(".wrapper").append(div);

// wrapper.prepend(circles[0]);
// hearts[2].before(div);
// hearts[2].after(div);
// btns[4].remove();
// btns[3].replaceWith(hearts[0]);

// // // old methods

// wrapper.appendChild(div);
// wrapper.insertBefore(div, hearts[2]);
// wrapper.removeChild(hearts[1]);
// document.body.replaceChild(div, btns[0]);

// // // modifying an HTML element

div.innerHTML = "<h2>Hello World!</h2>";
// div.innerHTML = "<div> <button>1</button> <button>2</button> <button>3</button> <button>4</button> <button>5</button> </div>";
// div.textContent = "Hello!";

hearts[2].insertAdjacentHTML("afterend", "<h1>А это H1 заголовок</h1>");

// Event handling

// btns[0].onclick = function() {
//     alert("Хочешь свежих начосов?");
// };

// btns[0].addEventListener('click', (event) => {
//     event.target.style.backgroundColor = "green";
// });

 
// btns[0].addEventListener('click', () => {
//     btns[0].insertAdjacentHTML('afterend', '<h1>mouse is here!</h1>');
// });

// // project of an interactive button that changes bg color

// let clickCounter = 5;
// const randomColorPicker = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// };

// const changeColorGreen = (event) => {
//     clickCounter--;
//     event.target.style.backgroundColor = `hsl(${randomColorPicker(1, 360)} ${randomColorPicker(1, 100)}% ${randomColorPicker(1, 100)}%)`;

//     (clickCounter == 0) && btns[0].removeEventListener('click', changeColorGreen);
// };

// btns[0].textContent = "Draw me!";
// btns[0].style.cssText += "font-size: 20px; font-weight: 500; width: 200px; height: 50px;";
// btns[0].addEventListener('click', changeColorGreen);

// btns[0].removeEventListener('click', changeColorGreen);

// // Event bubbling

// const overlay = document.querySelector(".overlay");

// const overlayFnc = (event) => {
//     console.log(event. currentTarget);
//     console.log(event.type);
// };
// btns[0].addEventListener('dblclick', overlayFnc);
// overlay.addEventListener('dblclick', overlayFnc);

// // Canceling default action in JS 

// wrapper.insertAdjacentHTML("afterend", "<a href ='https://code.mu/ru/javascript/manual/array/splice/'>https://code.mu/</a>");
// const link = document.querySelector("a");

// const linkMod = (event) => {
//     event.preventDefault();
//     console.log("Ты нажал!");
// };

// link.insertAdjacentHTML("afterend", `
//         <form id="myForm">
//             <input type="text" placeholder="Ваше имя"/>
//             <button type="submit">Отправить</button>
//         </form>
//     `);

// const form = document.querySelector("#myForm");
// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const input = form.querySelector("input");
//     console.log(input.value);
// });

// // options in addEventListener();
// link.addEventListener('click', linkMod, {once: true});