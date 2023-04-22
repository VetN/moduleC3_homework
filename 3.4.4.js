// создаем функцию- конструктор объектов
function SmartHome(name, guarantee, power, color, wifi) {
    this.name = name,
    this.series = 'Comfort',
    this.guarantee = guarantee,
    this.power = power,
    this.color = color,
    this.wifi = wifi
}
SmartHome.prototype.guarantee = function () {
    if (this.guarantee === 'standart') {
        console.log(`${this.guarantee} warranty 12 month`)
    } else if (this.guarantee === 'extended') {
        console.log(`${this.guarantee} warranty 24 month`)
    } else {
        console.log('Without warranty')
    }
}
SmartHome.prototype.wifi_on = function () {
   this.wifi == 'on' ?  console.log(`${this.name} connecting to wi-fi: on`) : console.log(`${this.name} connecting to wi-fi: off`);
}  

SmartHome.prototype.description = function () {
    console.log(`Product name: ${this.name}, series: ${this.series}, color ${this.color}`);
    if (this.power === 220) {
        console.log(`The ${this.name} is powered by 220v`);
    } else {
        console.log(` The ${this.name} can operate from the battery`)
    }

}

let webcam = new SmartHome('webcam', 'standart', 220, 'white', 'off');
webcam.description();
webcam.wifi_on();
