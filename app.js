// Задача: Явное преобразование значений в тип boolean

function makeBool(params) {
  return !!params;
}

console.log(makeBool(0));

// # Задача: Явное преобразование значений в тип number

function conversionToNumber(params) {
  return Number(params);
}
console.log(Number(""));
console.log(Number(true));
console.log(Number(false));
console.log(Number("15"));
console.log(Number("12million"));

// # Задача 4: Управление числами с помощью объекта Math
let findeMax = (arr) => {
  return Math.max(...arr);
};

const numbers = [3, 5, 7, 2, 9];
console.log(findeMax(numbers));

//Math.min
let findeMin = (arr) => {
  return Math.min(...arr);
};

const minNumbers = [3, 5, 7, 2, 9];
console.log(findeMin(minNumbers));

//# Задача: Управление числами с помощью унарных операторов


let roundNum = () => {
  return Math.round();
};
console.log(Math.round(15.62), Math.round(-85.89), Math.round(2.89));


//# Задача: Управление числами с помощью унарных операторов
function unaryPlus(value) {
  return +value;
}
console.log(unaryPlus(77));


function unaryMinus(value) {
  return -value;
}
console.log(unaryMinus(77));

function applyIncrement(value) {
  return ++value;  
}
console.log(applyIncrement(77));

function applyDecrement(value) {
  return --value; 
}
console.log(applyDecrement(77));


// # Задача: Работа с методами строк
//верхний регистр
function upCase(str) {
  return str.toUpperCase();
}

let text = "Don't give up";
console.log(upCase(text));

//Нижний регистр
function lowCase(str) {
  return str.toLowerCase()
  
}
let text2 = "DON'T GIVE UP";
console.log(lowCase(text));

//замена подстрок

function replaceString(str) {
  return str.replace("Don't give up",'' );
}

console.log(replaceString("Dont give up on your dreams!"));


//разбиение строк
function splitString(str) {
  return str.split()
}
console.log(splitString("Dont give up on your dreams!"));

//удаление пробелов

  function trimDel (str) {
    return str.trim();
  }
console.log(trimDel("        Don't give up         "));


//# Задача: Обработка строк с использованием методов строки

function findSubstring(str, substring) {
    return str.indexOf(substring);
}
console.log(findSubstring("Don't give up", "g"));


function subString(str, substring) {
    return str.includes(substring);
}
console.log(subString("Don't give up", 'up'));
console.log(subString("Don't give up", "Rakhshona"));
