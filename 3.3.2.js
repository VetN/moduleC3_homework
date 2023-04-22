//ЗАДАНИЕ 1
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

// ЗАДАНИЕ 2
//написать функцию, которая принимает строку и объект,
// а затем проверяет есть ли у переданного объекта св-во
// с данным именем. Функция возращ true или false
function check(str, object) {
    console.log(object)
    return (str in object); {
   }
}
console.log(check('payment', product));
console.log(check('courier', product));
console.log(check('delivery', product));