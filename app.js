// ### Задача: Проверка, содержит ли строка цифры в диапазоне от 0 до 9

const containsDigit = (str) => /\d/.test(str);

const strings = [
  "Hello World!",
  "Today is 2024.",
  "My lucky number is 7.",
  "No digits here!",
  "Price: $50.",
  "",
];

strings.forEach((s) => {
  console.log(`Строка: "${s}", Содержит цифры: ${containsDigit(s)}`);
});

// ### Задача: Проверка, содержит ли строка одно из нескольких значений
const containsWord = (str) => /cat|dog|bird/.test(str);

const stringss = [
  "I have a cat.",
  "The dog is barking.",
  "A bird is flying.",
  "There is a fish.",
  "The catalog is huge.",
  "",
];

stringss.forEach((s) => {
  console.log(`Строка: "${s}", Содержит одно из слов: ${containsWord(s)}`);
});

// ### Задача: Опережающие проверки

const checkHelloWorld = (str) => /Hello(?=\s*World!)/.test(str);

const stringgs = [
  "Hello World!",
  "Hello, World!",
  "Hello there, World!",
  "Hi there, World!",
  "Hello to the World.",
  "World says Hello.",
];

stringgs.forEach((s) => {
  console.log(`Строка: "${s}", Соответствует условиям: ${checkHelloWorld(s)}`);
});

// ### Задача: Проверка, содержит ли строка только буквы и цифры
const containsOnlyLettersAndDigits = (str) => /\d\w/i.test(str);

const strinngs = ["Hello123", "Hello 123", "Hello!", "12345", "abcABC", ""];

strinngs.forEach((s) => {
  console.log(
    `Строка: "${s}", Содержит только буквы и цифры: ${containsOnlyLettersAndDigits(
      s
    )}`
  );
});

// ### Задача: Проверка, содержит ли строка только цифры
const containsOnlyDigits = (str) => /^\d+$/.test(str);

const striings = ["123456", "123abc", "12.34", "000123", ""];
striings.forEach((s) => {
  console.log(
    `Строка: "${s}", Содержит только цифры: ${containsOnlyDigits(s)}`
  );
});

// ### Задача: Проверка строк на начало и конец в многострочном тексте
const isValidMultilineText = (text) => /^#.*\.$/m.test(text);

const text1 = `
# Заголовок 1.
# Заголовок 2.
# Заголовок 3.
`;

const text2 = `
# Заголовок 1
# Заголовок 2.
Заголовок 3.
`;

console.log(isValidMultilineText(text1));
console.log(isValidMultilineText(text2));

// ### Задача: Проверка на строгое соответствие формату почтового индекса
const isValidPostalCode = (postalCode) => /^\d{5}$/g.test(postalCode);

const postalCodes = [
  "12345",
  "12345-6789",
  "1234",
  "123456",
  "12345-678",
  "ABCDE",
];
postalCodes.forEach((code) => {
  console.log(
    `Почтовый индекс: "${code}", Соответствует формату: ${isValidPostalCode(
      code
    )}`
  );
});

// ### Задача: Проверка таджикского телефонного номера

const isValidTajikPhoneNumber = (str) => /^\+992\d{9}$/.test(str);
const phoneNumbers = [
  "+992123456789",
  "+992987654321",
  "992123456789",
  "+99212345",
  "+9921234567890",
  "+993123456789",
  "+99212345678abc",
];

phoneNumbers.forEach((num) => {
  console.log(
    `Номер: "${num}", Валидный таджикский номер: ${isValidTajikPhoneNumber(
      num
    )}`
  );
});
// ### Задача: Проверка, начинается ли строка с заглавной буквы
const startsWithCapitalLetter = (str) => /^[A-Z]/.test(str);

const strrings = [
  "Hello world",
  "hello world",
  "JavaScript is fun",
  "123abc",
  "Good Morning!",
  "",
];

strrings.forEach((s) => {
  console.log(
    `Строка: "${s}", Начинается с заглавной буквы: ${startsWithCapitalLetter(
      s
    )}`
  );
});
