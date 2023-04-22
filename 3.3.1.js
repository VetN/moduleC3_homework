// ЗАДАНИЕ 1
//написатьь функцию, которая принимает в кач-ве аргумента объект
// и выводит в консоль все ключи и значения только собственных св-в
// данная функция не должна возвр значение

let product = {
    payment: "instalments",
    guarantee: 24,
    delivery: 'courier',
};
function furniture(product) {
    for (let prop in product) {
        if (product.hasOwnProperty(prop)) {
            console.log(`key: ${prop}, value: ${product[prop]};`);
        }
    }
        
}
furniture(product);
