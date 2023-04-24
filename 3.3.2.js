// ЗАДАНИЕ 2
//написать функцию, которая принимает строку и объект,
// а затем проверяет есть ли у переданного объекта св-во
// с данным именем. Функция возращ true или false

function check(str, object) {
    console.log(object)
    return (str in object); {
   }
}

let product = {
    payment: "instalments",
    guarantee: 24,
    delivery: 'courier',
};

console.log(check('payment', product));
console.log(check('courier', product));
console.log(check('delivery', product));