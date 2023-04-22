// создаем функцию- конструктор объектов
function SmartHome(name, guarantee, power, color) {
    this.name = name,
    this.series = 'Comfort',
    this.guarantee = guarantee,
    this.power = power,
    this.color = color,
    this.wifi = true
}

SmartHome.prototype.wifi_on = function () {
    this.wifi = true;
    console.log(`${this.name} connecting to wi-fi: on`)
}  

SmartHome.prototype.wifi_off = function () {
    this.wifi = false;
    console.log(`${this.name} connecting to wi-fi: off`)
}
SmartHome.prototype.description = function () {
    console.log(`Product name: ${this.name}, series: ${this.series}`);
    console.log(`Product warranty: ${this.guarantee}, color ${this.color}`);
    if (this.power === '220') {
        console.log(`The ${this.name} is powered by 220v`);
    } else {
        console.log(` The ${this.name} can operate from the battery`)
    }
}

let webcam = new SmartHome('webcam', 24, 12, 'white');
webcam.description();
webcam.wifi_on();
