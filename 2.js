//Задание 1
//Создать произвольную переменную, присвоить ей значение. C помощью if написать условие: если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

let user = 'hidden';
if (user = 'hidden') {
    user = 'visible';
} else {
    user = 'hidden';
}

//Задание 2
//Создать переменную и присвоить ей число.
//Записать условие:
//- если переменная равна нулю, присвоить ей 1;
//- если меньше нуля - строку “less then zero”;
//- если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

let user2 = 15;
if (user2 == 0) {
    user2 = 1;
} else if (user2 < 0) {
    user2 = 'less then zero';
} else if (user2 > 0) {
    console.log(user2 * 10);
}

//Задание 3
//Запросите у пользователя число и запишите его в переменную. 
//(Не забывайте, что от пользователя мы всегда получаем строку).
//Создайте переменную-результат и присвойте ей значение: если введенное пользователем число меньше 5, то результат будет '0', если больше -  '1'. Выведите результат в консоль.
//Выполните это задание, используя тернарный оператор (: ?)

let user3 = prompt('Введите число: ');
let usser = (user3 < 5) ? '0' : '1';
alert (usser);

//Задание 4
//Попросить пользователя ввести одно число, следом - второе число. Вывести в консоль максимальное из чисел (наибольшее) с текстом: Большее число: 7 (вместо 7 будет максимальное число из введенных пользователем).
//* предусмотреть вариант ввода одинаковых чисел

let user4 = prompt('Введите число: ');
let user5 = prompt('Введите число: ');
if (user4 > user5) {
    alert ('Наибольшее число: ' + user5);   
} else if (user5 > user4) {
    alert ('Наибольшее число: ' + user4);
} else if (user4 == user5) {
    alert ('Числа равны: ' + user4 + '=' + user5);
}

//Задание 5
//Определить, является ли введенное пользователем число num1 кратным введенному числу num2. Обе переменные запрашиваем у пользователя, ответ выводим в консоль.

let num1 = prompt('Введите число: ');
let num2 = prompt('Введите число: ');
if (num1 % num2 == 0) {
    alert ('Числа кратны');
    console.log(num1 % num2);
}


//Задание 6
//Запросить у пользователя средний балл, записать в переменную.
//Если средний балл 1-4 - вывести в консоль "Двоечник, иди учись!", если 5-8 - "Неплохо, но давай еще поднажмем!", если 9-10 - "Ого, да ты настоящий отличник!" (можно другие фразы - по желанию).

let srbal = prompt('Введите ваш средний бал(1-10): ');
if (srbal < 4) {
    alert ('Двоечник, иди учись!');
} else if (srbal > 9) {
    alert ('Ого, да ты настоящий отличник!');
} else if (srbal > 4) {
    alert ('Неплохо, но давай еще поднажмем!');
}
 
//Задание 7
//Запросить у пользователя ответы на 2 вопроса:
//- балл за экзамен (от 0 до 100)
//- количество выполненных проектов (от 0 и больше)
//Вывести в консоль общий выпускной балл в соответствии с этими значениями:
//- 100, если балл за экзамен более 90 или количество проектов более 10.
//- 90, если балл за экзамен более 75 и количество проектов не менее 5.
//- 75, если балл за экзамен более 50 и количество проектов не менее 2.
//- 0 во всех других случаях.

let ocenka = prompt('Введить ваш бал за экзамен(0-100): ');
let project = prompt('Введите количество ваших проектов: ');
if (ocenka >= 90 || project >= 10) {
    console.log(100);
} else if (ocenka >= 75 && project >=5) {
    console.log(90);
} else if (ocenka >= 50 && project <=2) {
    console.log(75);
} else {
    console.log(0);
}

//Задание 8
//День аренды автомобиля стоит $40. При аренде на 7 или больше дней вы получаете общую итоговую скидку $50. Если вы арендуете авто на 3 или более дней, ваша общая скидка составит $20.
//Количество дней, на которые нужно арендовать авто, запрашиваются с помощью prompt. Напишите программу, рассчитывающую общую стоимость аренды на запрашиваемое количество дней.

let cena = prompt('На какое количество дней вы хотите взять автомобиль в аренду: ');
let zaday = 40;
if (cena == 3) {
    alert (cena * 40 - 20 + '$');
} else if (cena == 7) {
    alert (cena * 40 - 50 + '$');
} else {
    alert (cena * 40 + '$');
}

//Задание 9
//Создать переменную и записать в нее число, например 10.
//10 раз увеличивать значение этой переменной на 1. Результат вывести в консоль.

for (let i = 0; i < 10; i++) {
    console.log(10 * 1);
}

//Задание 10
//Увеличивая счетчик цикла на 2, нужно 5 раз:
//- запрашивать у пользователя ввод числа
//- проверять, равно ли это число 10. Если равно, выводить "Равно 10". Иначе выводить "Не равно 10"

for (let i = 0; i < 10; i += 2){
    let n = Number(prompt('Введите число: '))
    if (n == 10) {
        console.log('Равно 10');
    } else {
        console.log('Не равно 10');
    }
}

//Задание 11
//Вывести в консоль квадраты чисел от 0 до 100 (не включая 100) - т.е. вывести числа 0, 1, 4, 9, 16...
//* Задавать количество чисел, которые нужно вывести, при помощи функции prompt.

let count = Number(prompt('Введите количество чисел:'));
for (i = 0; i  < count; i++) {
    console.log(i * i);
}

//Задание 12
//Напишите программу, которая выводит в консоль числа от 1 до 100.
//При этом вместо чисел, кратных трем, программа должна выводить слово «Fizz», а вместо чисел, кратных пяти, — слово «Buzz». Если число кратно и 3, и 5, то программа должна выводить слово «FizzBuzz»

for(i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
    } else if (i % 5 == 0) {
        console.log('Buzz');
    } else if (i % 3 == 0) {
        console.log('Fizz');
    } else {
        console.log(i);
    }
}