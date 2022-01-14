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