// Домашнее задание к занятию 6

// Не придумал как для 3х ячеек поля (для выбора конкретной ячейки использовать random) добавить атрибут prise


let object = {
    cat: "Кот",
    book: "Книга",
    car: "Машина"
}

console.log(object);

function generateField(n = 3) {
    if (n < 3) {
        return console.log('Поле должно быть от 3-х ячеек');
    }
    let prise = Object.keys(object);
    console.log(prise);
    let table = document.createElement("table");
    table.setAttribute("border", 1);
    for (let i = 0; i < n; i++) {
        let row = table.insertRow(i)
        for (let j = 0; j < n; j++) {
            let cell = row.insertCell(j);
        }
    }
    document.body.append(table);
}
generateField(3);

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
