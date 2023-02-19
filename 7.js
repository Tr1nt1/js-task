//Задание 1
//Примените каждый из этих методов округления к трем числам: 5.4, 5.5, 5.6:
//Math.round(x)
//Math.ceil(x)
//Math.floor(x)
//В комментариях к каждой строке напишите, как работают эти округления.

let mathNumder = (x) => {
    console.log(Math.round(x)); //Возвращает значение числа, округлённое до ближайшего целого.
    console.log(Math.ceil(x)); //Возвращает значение числа, округлённое к большему целому.
    console.log(Math.floor(x)); //Возвращает значение числа, округлённое к меньшему целому.
}

mathNumder(5.4);
mathNumder(5.5);
mathNumder(5.6);

//Задание 2
//Выведите в консоль фразы в 2 строки:
//Сегодня 27.10.2022 (здесь будет ваша дата)
//19 часов 20 минут (здесь будет ваше время)

const nowDate = new Date();
if (nowDate.getMonth() + 1 < 10) {
    monthNew = `0${nowDate.getMonth() + 1}`;
}
console.log(`Сегодня ${nowDate.getDate()}.${monthNew}.${nowDate.getFullYear()}`);
console.log(`${nowDate.getHours()} часов ${nowDate.getMinutes()} минут`);
