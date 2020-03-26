// Задание 1

let min = -99;
let max = 99;
let arriva = new Array();
for (let i = 0; i < 3; i++) {
  arriva[i] = new Array();
  for (let j = 0; j < 6; j++){
    arriva[i][j]=Math.floor(Math.random() * (max - min + 1) + min);
  }
}
console.log(arriva);

let maxArr = 0;
for (let i = 0; i < arriva.length; i++) {
  for (let j = 0; j < arriva[i].length; j++) {
    if (maxArr < arriva[i][j])
    maxArr = arriva[i][j];
  }
}
console.log('Maximum = ' + maxArr);

// Задание 2

let str = prompt('Введите строку');
let podStr = prompt('Введите подстроку');

let pos = 0;
while (true) {
  let foundPos = str.indexOf(podStr, pos);
  if (foundPos == -1)
  break;

  alert( `Найдено тут: ${foundPos}` );
  pos = foundPos + 1;
}

// Задание 3

let string = prompt('Введите строку');
alert(string[0].toUpperCase() + string.slice(1) );
console.log(string[0].toUpperCase() + string.slice(1) );


// Задание 4

let animal = ['dog', 'cat', 'rabbit', 'mouse'];
animal.splice (1, 1);
console.log(animal);