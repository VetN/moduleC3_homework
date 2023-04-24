// создаем родительский  класс
class SmartHome {
    constructor(name, power, color, wifi) {
        this.name = name;
        this.country = "--";
        this.series = 'Comfort';
        this.ip = 'IP 44';
        this.guarantee = 12;
        this.power = power;
        this.color = color;
        this.wifi = wifi;
        this.power_connected = true;
    }
    warranty() {
        if (this.guarantee === 12) {
            console.log(`Warranty: standart -  ${this.guarantee} month`)
        } else if (this.guarantee === 24) {
            console.log(`Warranty: extended - ${this.guarantee} month`)
        } else {
            console.log('Without warranty')
        }
    }
    wifi_on() {
        this.wifi == 'on' ? console.log(`${this.name} connecting to wi-fi: on`) : console.log(`${this.name} connecting to wi-fi: off`);
    }
    description() {
        console.log(`Product name: ${this.name}, country of origin ${this.country},series: ${this.series}, IP: ${this.ip}, color: ${this.color}`);
        this.warranty();
        if (this.power === 220) {
            console.log(`The ${this.name} is powered by 220v`);
        } else {
            console.log(` The ${this.name} can operate from the battery`);
        }
        this.wifi_on();
    }
    power_connectedOn() {
        this.power_connected = true;
        console.log(`The ${this.name} is power connected`);
    }
    power_connectedOff() {
        this.power_connected = false;
        console.log(`The ${this.name} is not power connected`);
    }
}


// Создаем объект с помощью класса
let webcam = new SmartHome('webcam', 12, 'white', 'off');
webcam.description();

// функция включения прибора
webcam.power_connectedOn();

// проверка св-ва
console.log(webcam.series);

// добавление собственного св-ва
webcam.timebattery = 12;

// функция для проверки  наличия собственных св-в объекта:

function checkProperty(obj) {
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop));
        console.log(`key: ${prop}, value: ${obj[prop]};`);
    }
}

// Создаем Класс Лампы
class Lamp extends SmartHome {
    constructor(name, power, powerConsum, lightColor, wifi) {
        super(name, power, wifi);
        this.powerConsumption = powerConsum;
        this.lightColor = lightColor;
        this.color = 'standart';
        this.power_connected = true;
    }
}
// создаем объект с помощью класса
const osramLamp = new Lamp("Osram", 12, "5W", "Cool White", 'on')
// добавлено свое св-во:
osramLamp.guarantee = 24;
osramLamp.description();

// создаем класс Розетки
class Socket extends SmartHome {
    constructor(name, color, wifi) {
        super(name, color, wifi);
        this.power = 220;
        this.num_socket = 1;
        this.power_connected = true;
    }
}

// создаем объкты класса
const legrandSocket = new Socket('Legrand', 'black', 'on');
const abbSocket = new Socket('ABB', 'yellow', 'on');

// добавляем свои св-ва
abbSocket.country = 'Germany';
abbSocket.num_socket = 2;

// вызываем функцию родительского класса
legrandSocket.description();
abbSocket.description();

// проверяем наличие собственных св-в
checkProperty(legrandSocket);
checkProperty(abbSocket);

