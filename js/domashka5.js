// Домашнее задание к занятиям 4 / 5

// Задача 1

function getSum(num) { 
    if (arguments[1] === undefined) { 
        arguments[1] = 0;
    } 
    if(num % 10 === 0) { 
        if (num === 0) { 
            console.log(`Сумма чисел = ${arguments[1]}`); 
            return arguments[1]; 
        } 
        num /= 10; 
        }
    arguments[1] += num % 10; 
    num -= num % 10; 
    getSum(num, arguments[1]); 
}
getSum(205);


// Задача 2 (пока не получилось её решить)


/*

let spamWords = ["lorem", "ipsum", "nunc"];
let someText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu elit elementum, condimentum lectus eget, bibendum justo. Quisque vel nisl in eros sagittis tempus vel vel orci. Aliquam viverra, urna in tincidunt tincidunt, felis mauris tempor quam, ut faucibus ipsum ante id sapien. Duis feugiat nulla quam, eu bibendum ligula ultrices vel. In nec purus in nisl finibus ornare. Duis ultricies enim non porttitor porttitor. Pellentesque metus felis, pellentesque ut nisl eu, finibus scelerisque nunc. Donec id nibh euismod, fermentum ipsum at, suscipit quam. Vivamus fermentum elit vitae enim porta, ultricies tempor arcu mollis. Nam vitae enim eu lectus imperdiet malesuada. Aenean risus massa, laoreet ut lorem non, rutrum malesuada ipsum. Etiam ut feugiat erat, et scelerisque augue. Sed est lorem, semper consequat velit eget, facilisis ornare massa. Vestibulum sed porttitor nisi.";
// console.log(someText);

function findSpam(text, spam) {
    let lowerText = text.toLowerCase();
    // for (let i = 0; i < spam.length; i++) {
    //     if (lowerText.includes(spam[i])) {
    //        console.log(spam[i]);
    //     }
    // }
    let pos = 0;
    console.log(spam);
    for (let i = 0; i < spam.length; i++) {
        let target = spam[i];
        console.log(target);
        while (true) {
            let foundPos = lowerText.indexOf(target, pos);
            if (foundPos == -1) break;
            console.log( `Найдено тут: ${foundPos}` );
             pos = foundPos + 1;
        }
    }
}

findSpam(someText, spamWords);

*/

// Задача 3

function words(count){
    let str = `${count}`;
    let lastNumber = +str[str.length - 1];
    if (count >= 5 && count <= 20){
        return (` ${count} товаров`);
    }
    if (lastNumber == 1) {
        return (` ${count} товар`);
    }
    if (lastNumber >= 2 && lastNumber <= 4) {
        return (` ${count} товара`);
    }
    if ((lastNumber >= 5 && lastNumber <= 9 ) || lastNumber == 0) {
        return (` ${count} товаров`);
    }
    
}

console.log(words(15));
console.log(words(1));
console.log(words(3));

// Задача 4

let users = [
    {
        login: "qwe",
        age: 34,
        city: "Москва",
        favouriteLangs: ["php", "js"]
    },
    {
        login: "asd",
        age: 23,
        city: "Москва",
        favouriteLangs: ["python", "javascript"]
    },
    {
        login: "rty56",
        age: 58,
        city: "Тверь",
        favouriteLangs: ["java", "c"]
    },
    {
        login: "rty56",
        age: 58,
        city: "Тверь",
        favouriteLangs: ["java", "scala"]
    },
    {
        login: "ght",
        age: 45,
        city: "Владивосток",
        favouriteLangs: ["php", "ruby"]
    },
];

function sortAge(usersArr, from, to = Infinity) {
    for (let i = 0; i < usersArr.length; i++) {
        if (from < usersArr[i].age && to > usersArr[i].age) {
            console.log(usersArr[i].login);
        }
    }
}

sortAge(users, 40);

// Задача 5

function getData(usersArr, favouriteLang) {
    for (let i = 0; i < usersArr.length; i++) {
        for (let j = 0; j < usersArr[i].favouriteLangs.length; j++) {
            if (favouriteLang === usersArr[i].favouriteLangs[j]) {
                console.log("Этим языком владеет: " + usersArr[i].login);
            }
        }
    }
}

getData(users, "php");

// Задача 6

 
function compareCity(a,b) {
   if (a.city < b.city) {
    return -1;
   }
   if (a.city > b.city) {
    return 1;
   }
   return 0;
}
 
console.log(users.sort(compareCity));