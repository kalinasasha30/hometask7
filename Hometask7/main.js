// 1) Создайте ассоциативный массив (объект) заработных плат obj. 
// Выведите на экран зарплату Пети и Коли.
// 2) Дан массив ['Привет, ', 'мир', '!']. Необходимо записать в 
// нулевой элемент этого массива слово 'Пока, ' (то есть вместо 
//     слова 'Привет, ' будет 'Пока, ').
// 3) Создайте массив arr с элементами 1, 2, 3, 4, 5 двумя 
// различными способами.
// 4) Дан многомерный массив arr: Выведите с его помощью слово 
// 'голубой'.
// 5)  Создайте массив arr = ['a', 'b', 'c', 'd'] и с его помощью 
// выведите на экран строку 'a+b, c+d'.
// 6) Дан объект {js:['jQuery', 'Angular'], php: 'hello', css: 
// 'world'}. Выведите с его помощью слово 'jQuery'.
// 7) Создайте объект с днями недели. Ключами в нем должны служить 
// номера дней от начала недели (понедельник - первый и т.д.). 
// Выведите на экран текущий день недели.

//1

// wage = {
//     Petya: 5000,
//     Kolya: 10000
// }
// console.log('Зароботная плата Пети - ' + wage['Petya'])
// console.log('Зароботная плата Коли - ' + wage['Kolya'])

//2

// let mas = ['Привет ', 'мир', '!']
// let mas2 = mas[0] = 'Пока '
// console.log(mas2 + mas[1] + mas[2])

//3

// Первый способ

// let arr = [1,2,3,4,5]

// Второй способ

// let arr = {
//     one: 1,
//     two: 2,
//     three: 3,
//     four: 4,
//     five: 5
// }

//4

// let mas = ['red',['cyan','green','blue'],'yellow']
// console.log(mas[1][0])

//5

// let arr = ['a', 'b', 'c', 'd'] 
// alert(arr[0] + '+' + arr[1] + ', ' + arr[2] + '+' + arr[3])

//6

// let obj = {
//     js:['jQuery', 'Angular'], 
//     php: 'hello', 
//     css: 'world'
// }
// console.log(obj['js'][0])

//7

// let a = prompt()
// let week = {
//     1: 'Monday',
//     2: 'Tuesday',
//     3: 'Wednesday',
//     4: 'Thursday',
//     5: 'Friday',
//     6: 'Saturday',
//     7: 'Sunday'
// }
// alert('Сегодняшний день недели - ' + week[a])
