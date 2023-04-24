
// ЗАДАНИЕ 3
// Написать функцию, которая создает пустой объект, без прототипа
function createObject() {
    return Object.create(null)
}
// проверка функция
console.log(createObject);
// проверка функция создает пустой объект без прототипа
console.log(createObject());
