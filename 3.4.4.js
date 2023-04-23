// создаем функцию- конструктор объектов
function SmartHome(name, power, color, wifi) {
    this.name = name,
    this.country = "--",
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
    console.log(`Product name: ${this.name}, country of origin ${this.country},series: ${this.series}, IP: ${this.ip}, color: ${this.color}`);
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
let webcam = new SmartHome('webcam', 12, 'white', 'off');
webcam.description();
webcam.power_connectedOn();

// проверка св-ва
console.log(webcam.series);

// добавление собственного св-ва
webcam.timebattery = 12;

// функция для проверки  наличия собственных св-в объекта:
function checkProperty(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key));
        console.log(key);
    }
}


// Создаем Группу Лампы
function Lamp(name, power, powerConsum, lightColor, wifi) {
    this.name = name,
    this.power = power,
    this.powerConsumption = powerConsum,
    this.lightColor = lightColor,    
    this.color = 'standart',
    this.wifi = wifi,
    this.power_connected = true
}

Lamp.prototype = new SmartHome();

const osramLamp = new Lamp("Osram", 12, "5W", "Cool White", 'on')
// добавлено свое св-во:
osramLamp.guarantee = 24;

osramLamp.description();

// создаем группу Розетки
function Socket(name, color, wifi) {
    this.name = name,
    this.power = 220,   
    this.color = color,
    this.num_socket = 1,
    this.wifi = wifi,
    this.power_connected = true
}
Socket.prototype = new SmartHome();

const legrandSocket = new Socket('Legrand', 'black', 'on');
const abbSocket = new Socket('ABB', 'yellow', 'on');
abbSocket.country = 'Germany';
abbSocket.num_socket = 2;
legrandSocket.description();
abbSocket.description();
checkProperty(legrandSocket);
checkProperty(abbSocket);

