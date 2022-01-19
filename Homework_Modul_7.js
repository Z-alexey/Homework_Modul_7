//--------Задание №1_________//
//Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. 
//Данная функция не должна возвращать значение.
const listPerson = {
    person1: 'lady',
    person2: 'man'
  }
  
  function getOnlyName (listPerson) {
    for (let key in listPerson) {
      console.log(key);
    }
  }
  getOnlyName(listPerson)
  
  //-----------Задание №2____________//
// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false. 
  const listPerson = {
    person1: 'lady',
    person2: 'man'
  }
  function getOnlyName (listPerson) {
     console.log('person3' in listPerson);
  }
  getOnlyName(listPerson)

  //-----------Задание №3____________//
// Написать функцию, которая создает пустой объект, но без прототипа.
  const withoutProto = Object.create (null)

  //-----------Задание №4_____________//
  //Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах. Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 
//Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

function ElectricalDevices () {
  this.workingMode = 'От сети',
  this.voltage = '220 В',
  this.funcOn = false
};

ElectricalDevices.prototype.commandOn = function () {
  this.funcOn === true;
  console.log('Прибор включен в сеть!');
};

ElectricalDevices.prototype.commandOff = function () {
  this.funcOn === false;
  console.log('Прибор отключен от сети!');
};

Washing.prototype = new ElectricalDevices()

function Washing (model, name, watt, type, powerInput) {
  this.name  = name,
  this.model = model, 
  this.type = type,
  this.power = (`${watt} ватт`),
  this.funcOn = false,
  this.powerInput = powerInput
};

Washing.prototype.modeInput = function (powerInput) {
  let sumPow = this.powerInput * 1.5 / this.powerInput;
  return  console.log (`Потребляемое количество электроэнергии составляет: ${sumPow} кВ/ч`)
};

Mix.prototype = new ElectricalDevices()

function Mix (model, name, watt, type, powerInput) {
  this.name  = name,
  this.model = model, 
  this.type = type,
  this.power = (`${watt} ватт`),
  this.funcOn = false,
  this.stationary = true 
};

Mix.prototype.handOrStation = function (model) {
  if (this.stationary === true) {
    console.log (`Полное описание модели ${this.model} смотрите на сайте. `)
  }
};

  const washingMachine = new Washing ("MX-444", "indesit", "1000", "крупная техника", 1000, false);
  const mixer = new Mix ("LT-235", "braun", "500" ,"мелкая техника", true);

washingMachine.commandOn (false)
washingMachine.commandOff ()
washingMachine.modeInput ()
mixer.handOrStation ()


console.log (washingMachine)
console.log (mixer)
