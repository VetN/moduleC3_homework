// создаем функцию- конструктор объектов
function SmartHome(name, power, color, wifi) {
    this.name = name,
    this.series = 'Comfort',
    this.ip = 'IP 44'
    this.guarantee = 12,
    this.power = power,
    this.color = color,
    this.wifi = wifi,
    this.power_connected = true
}

// добавление методов в функцию-конструктор

SmartHome.prototype.warranty = function () {
    if (this.guarantee === 12 ) {
        console.log(`Warranty: standart -  ${this.guarantee} month`)
    } else if (this.guarantee === 24 ) {
        console.log(`Warranty: extended - ${this.guarantee} month`)
    } else {
        console.log('Without warranty')
    }
}

SmartHome.prototype.wifi_on = function () {
   this.wifi == 'on' ?  console.log(`${this.name} connecting to wi-fi: on`) : console.log(`${this.name} connecting to wi-fi: off`);
}  

SmartHome.prototype.description = function () {
    console.log(`Product name: ${this.name}, series: ${this.series}, IP: ${this.ip}, color: ${this.color}`);
    this.warranty();
    if (this.power === 220) {
        console.log(`The ${this.name} is powered by 220v`);
    } else {
        console.log(` The ${this.name} can operate from the battery`)
    }
    this.wifi_on();
}

SmartHome.prototype.power_connectedOn = function () {
    this.power_connected = true;
    console.log(`The ${this.name} is power connected`)
}

SmartHome.prototype.power_connectedOff = function () {
    this.power_connected = false;
    console.log(`The ${this.name} is not power connected`)
}


// Создаем объект с помощью функции-конструктора
let webcam = new SmartHome('webcam', 220, 'white', 'off');
webcam.description();
webcam.power_connectedOn();
console.log(webcam.color);


