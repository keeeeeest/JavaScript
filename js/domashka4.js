// Дополнительные задачи №2

// Задание 1

let str1 = "КОЛЕСО";
let str2 = "СОБОЛЬ";
console.log("Первое слово = " + str1);
console.log("Второе слово = " + str2);

let str3 = (str1.substr(0, str1.length/2)) + (str2.substr(str2.length/2, str2.length));

console.log(str3);

// Задание 2

let str = "Culpa ex consectetur reprehenderit Lorem labore quis ad proident commodo tempor nisi";
console.log(str);
str = "Culpa ex consectetur reprehenderit Lorem labore quis ad proident commodo tempor nisi".split(' ');
let longWord = 0;
let longestWord = 0;
for (let i = 0; i < str.length; i++) {
    if(str[i].length > longWord) {
        longWord = str[i].length;
        longestWord = str[i];
    }
}

console.log("Самое длинное слово = " + longestWord + ", " + longWord + " букв");

// Задание 3

let str4 = "улица Ломоносова дом 9 корпус 1 офис 1120";
let strM = new Array();
strM = str4.split(" ");
console.log(strM);
let nums = new Array();
for (let i = 0; i < strM.length; i++) {
    strM[i] = parseInt(strM[i], 10);
    if(strM[i] > 0) {
        // console.log(strM[i]);
        nums.push(strM[i]);
    }
}
console.log(nums);

// Задание 4

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

let p1 = 1;
let iMax = 0;
let pMax = 0;
for (let i=0; i < arriva.length; i++) {
    for(let j=0; j < arriva[i].length; j++) {
        p1 = p1*Math.abs(arriva[i][j]);
    }
    if (Math.abs(p1)>Math.abs(pMax)) {
        iMax = i;
        pMax = p1;
    }
    console.log(i+" "+p1);
    p1 = 1;
}
console.log("Строка с наибольшим по модулю произведением элементов: " + iMax);


// Задание 5

min = -1;
max = 1;
let arr = new Array();
for (let i = 0; i < 11; i++) {
  arr[i] = Math.floor(Math.random() * (max - min + 1) + min);
  }
console.log(arr);

let num = arr[0];
let maxFrq = 1;

for (i = 0; i < arr.length - 1; i++) {
    let frq = 1;
    for (k = i + 1 ; k < arr.length; k++) {
        if (arr[i] == arr[k]) {
            frq += 1;
        } 
        if (frq > maxFrq) {
        maxFrq = frq;
        num = arr[i];
        }
    }
}

console.log(maxFrq + ' раз(а) встречается число ' + num);