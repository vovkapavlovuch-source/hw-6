// 1.Вивести в консоль всі числа від 1 до 10 за допомогою циклу while.

// let number = 1;
// while (number <= 10) {
//     console.log(number);
//     number += 1;
// }

// 2.Вивести в консоль всі парні числа від 2 до 20 за допомогою циклу for. Якщо число парне, пропустити його за допомогою continue.

// for (let i = 2; i <= 20; i += 1) {
//     if (i % 3 === 0) {
//         continue;
//     }
//     console.log(i);
// }

// 3.Вивести в консоль таблицю множення числа 7 за допомогою циклу for.

// const numberSeven = 7;
// for (let i = 1; i <= 10; i += 1) {
//     console.log(i * numberSeven);

// }

// 4.Створити скрипт, який виводить в консоль всі числа , які менші за n. Якщо зустрічається число, що більше або дорівнює n, цикл повинен бути закінчений за допомогою break.

let n = 100;
let numberRandom = Number(prompt("Введіть рандомне число"));
for (let i = 0; i <= n; i += 1) {
    if (numberRandom >= n) {
        break
    }
    else {
        console.log(numberRandom);

    }
}

// 5.За допомогою циклу while вивести в консоль всі числа від 1 до 20, крім чисел, кратних 3. Якщо зустрінете число, кратне 3, цикл повинен продовжити виконання за допомогою оператора continue.

// let numberOne = 0;
// while (numberOne <= 20) {
//     numberOne += 1;
//     if (numberOne % 3 === 0) {
//         continue;
//     }
//     console.log(numberOne);
// }