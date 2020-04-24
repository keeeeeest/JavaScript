// Домашнее задание к занятию 6 и 7

// Задача 1

// Удалось создать только поле. Не смог в рандомные поля вложить значения массива

let object = {
    cat: "Кот",
    book: "Книга",
    car: "Машина"
}

console.log(object);

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateField(n = 3) {
    if (n < 3) {
        return console.log('Поле должно быть от 3-х ячеек');
    }

    let prise = Object.keys(object);
    console.log(prise);

    for (let i = 0; i < n; i++) {
        let div = document.createElement("div");
        document.body.prepend(div);
    }
}
generateField(4);


// Задача 2

// Создал таблицу но с сортировкой не справился

let articles = [
    {
        id: 1,
        title: "JS",
        text: "Статья про JS",
        author: "Александр"
    },
    {
        id: 2,
        title: "PHP",
        text: "Статья про PHP",
        author: "Виталий"
    },
    {
        id: 3,
        title: "Базы Данных",
        text: "Статья про Базы Данных",
        author: "Евгения"
    },
    {
        id: 4,
        title: "HTML",
        text: "Статья про HTML",
        author: "Виталий"
    }
];

console.log(articles);

let goods = [
    {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    {
        title: "Флейта",
        price: 900,
        count: 50
    },
    {
        title: "Арфа",
        price: 3400,
        count: 5
    }
];

console.log(goods);


function generateTable(someData) {
    let someArr = [];
    for (let i = 0; i < someData.length; i++) {
       someArr.push(Object.entries(someData[i]));
    }
    console.log(someArr);

    let tableArea = document.getElementById("users-block");
    let table = document.createElement("table");
    table.setAttribute("border", 1);
    
    for (let i = 0; i < someArr.length; i++) {
        let row = table.insertRow(i);
        for (let j = 0; j < someArr[i].length; j++) {
            let cell = row.insertCell(j);
            for (let k = 0; k < someArr[i][j].length; k++) {
                cell.innerText = someArr[i][j][k];
            }
        }
    }

    for (let i = 0; i < 1; i++) {
        let row0 = table.insertRow(i);
        for (let j = 0; j < someArr[i].length; j++) {
            let cell0 = row0.insertCell(j);
            for (let k = 0; k < someArr[i][j].length; k++) {
                cell0.innerText = someArr[i][j][0];
            }
        }
    }
    tableArea.append(table);

}

generateTable(goods); 
generateTable(articles); 

