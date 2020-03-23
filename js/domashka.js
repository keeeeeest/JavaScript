// 1. Задача на if else

let sum = 3200;
if (sum < 1000) {
    console.log(sum);
} else if(sum >= 1000 && sum < 2000) {
    console.log(sum - sum*0.05);
} else if(sum >= 2000 && sum < 3000) {
    console.log(sum - sum*0.1)
} else if(sum >=3000) {
    console.log(sum - sum*0.1 + ' + подарок')
}

// 2. Задача на switch

let month = 'август';
switch (month) {
    case 'декабрь':
    case 'январь':
    case 'февраль':
        console.log("зима");
        break;
    case 'март':
    case 'апрель':
    case 'май':
        console.log("весна");
        break;
    case 'июнь':
    case 'июль':
    case 'август':
        console.log("лето");
        break;
    case 'сентябрь':
    case 'октябрь':
    case 'ноябрь':
        console.log("осень");
        break;
}

// 3. Задача на циклы

let min = 1;
let max = 7;
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let answer = getRandomIntInclusive(min, max);

for (let i = 0; i < 100; i++) {
    let user_data = prompt("Введите число");
    if (parseInt(user_data) === answer) {
        alert("Вы угадали");
        break;
    } else if (parseInt(user_data) === 0) {
        alert("Выход");
        break;
    } else if (parseInt(user_data) > answer) {
        alert("Загаданное число меньше");
        continue;
    } else if (parseInt(user_data) < answer) {
        alert("Загаданное число больше");
        continue;
    }
}

// 4. Задача на массивы

let intArr = [-8, 1, 2, 5, 6, 10];
let second = 0;

for (let i = 0; i < intArr.length; i++) {
    second = 7 - intArr[i]; 
    second = intArr.indexOf(second, i);
    if (second > -1) {
        console.log('Индексы ', i, second);
        console.log('Элементы ', intArr[i], intArr[second]);
        break;
    }
}
