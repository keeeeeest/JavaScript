
// Задание 4 (по элементу)

let animal = ['dog', 'cat', 'rabbit', 'mouse'];
console.log(animal);
let catIndex = animal.indexOf('cat');
if (catIndex > -1) {
    animal.splice(catIndex, 1);
}
console.log(animal);


// Дополнительные задачи №1

// Задание 1

let n = 0;
let min = 100;
let max = 999;

n = Math.floor(Math.random() * (max - min + 1) + min);

console.log('Число ' + n);

let sum = 0;

while (n > 0) {
    sum += n % 10;
    n = Math.floor(n/10);
}

console.log('Сумма чисел числа: ' + sum);

// Задание 2

a = 0;
min = 5;
max = 122;

a = Math.floor(Math.random() * (max - min + 1) + min);

if ( a > 25 && a < 100) {
    console.log('Число ' + a + ' попало в интервал (25; 100)');
} else {
    console.log('Число ' + a + ' НЕ попало в интервал (25; 100)');
}

// Задание 3

let arrLenght = prompt('Введите размер массива');
min = -1000;
max = 1000;
sum = 0;
let someArr = new Array();
for (let i = 0; i < arrLenght; i++) {
  someArr[i] = Math.floor(Math.random() * (max - min + 1) + min);
  sum += someArr[i];
}
console.log(someArr);

let maxArr = -1000;
for (let i = 0; i < arrLenght; i++) {
    if (maxArr < someArr[i]) {
    maxArr = someArr[i];
  }
}
console.log('Maximum = ' + maxArr);

let minArr = 1000;
for (let i = 0; i < arrLenght; i++) {
    if (minArr > someArr[i]) {
    minArr = someArr[i];
  }
}
console.log('Minimum = ' + minArr);

let medArr = 0;
medArr = sum / arrLenght;
console.log('Medium = ' + medArr);

// Задание 4

n = prompt('Введите число больше 3');
while (n < 3) {
    alert('Число меньше 3, введите число ещё раз');
    n = prompt('Введите число больше 3');
}

min = 0;
max = n;
let arr = new Array();
for (let i = 0; i < n; i++) {
  arr[i] = Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(arr);

let arr2 = new Array();
for (let i = 0; i < n; i++) {
    if (arr[i] % 2 === 0) {
        arr2.push(arr[i]);
    }
}
console.log(arr2);