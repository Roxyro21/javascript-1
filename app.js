let getStatusMessage = (status) => {
  switch (status) {
    case "error":
      return "Не известная ошибка";
    case "pending":
      return "Транзакция в ожидании";
    case "success":
      return "Транзакция прошла успешно";
    case "feild":
      return "Транзакция не прошла успешно";
    default:
      return "Неизвестный статус";
  }
};

console.log(getStatusMessage("error"));
console.log(getStatusMessage("pending"));
console.log(getStatusMessage("success"));
console.log(getStatusMessage("feild"));
console.log(getStatusMessage("other"));

// ### Задача: Добавление товара в магазин
let addProduct = (products, newProduct) => [...products, newProduct];

const products = [
  { name: "Laptop", price: 999.99, quantity: 5 },
  { name: "Phone", price: 499.99, quantity: 10 },
];
const newProduct = { name: "Tablet", price: 299.99, quantity: 7 };
console.log(addProduct(products, newProduct));

const newProduct2 = { name: "Iphone", price: 599.99, quantity: 12 };
console.log(addProduct(products, newProduct2));

// ### Задача: Функция вычисления площади круга
let calculateCircleArea = (r) => Math.PI * r ** 2;
console.log(calculateCircleArea(5));

// ### Задача: Функция расчёта скидки
let calculateDiscount = (price, discountPercentage) => {
  const discount = (price * discountPercentage) / 100;
  return price - discount;
};
console.log(calculateDiscount(1000, 15));

//# Задача: Арифметические операции с двумя числами

let calculate = (num1, num2, operator) => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num2 !== 0 ? num1 / num2 : "Ошибка: деление на ноль";
    default:
      return "Ошибка: некорректный оператор";
  }
};

console.log(calculate(10, 5, "+"));
console.log(calculate(10, 5, "-"));
console.log(calculate(10, 5, "*"));
console.log(calculate(10, 5, "/"));
console.log(calculate(10, 0, "/"));
console.log(calculate(10, 5, "%"));

// ### Задача: Функция преобразования времени из минут в часы и минуты
convertMinutes = (min) => `${Math.floor(min / 60)} часов ${min % 60} минут`;
console.log(convertMinutes(130));

// ### Задача: Функция вычисления максимального числа
findMax = (a, b, c) => Math.max(a, b, c);
console.log(findMax(10, 25, 7));
console.log(findMax(11, 75, 77));

// # Задача: Форматирование строки

formatString = (string) => string.trim().toUpperCase(string);

console.log(formatString("   hello world   "));
console.log(formatString("  JavaScript   "));
console.log(formatString("    openai  "));

// # Задача: Генерация идентификатора
generateId = () => {
  return `id-${Math.floor(Math.random() * 1000)}`;
};
console.log(generateId());
console.log(generateId());

// # Задача: Обработка HTTP статус-кодов
let getHttpStatusMessage = (statusCode) => {
  switch (statusCode) {
    case 200:
      return "OK: — Запрос выполнен успешно";
    case 201:
      return "Created — Ресурс был создан успешно";
    case 204:
      return "No Content — Запрос выполнен успешно, но нет содержимого";
    case 400:
      return "Bad Request — Неверный запрос";
    case 401:
      return "Unauthorized — Неавторизованный доступ";
    case 403:
      return "Forbidden — Доступ запрещен";
    case 404:
      return "Not Found: — Ресурс не найден";
    case 500:
      return "Internal Server Error — Внутренняя ошибка сервера";
    case 502:
      return "Bad Gateway — Неверный шлюз";
    case 503:
      return "Service Unavailable — Сервис недоступен";
    default:
      return "Unknown Status Code: Неизвестный статус-код";
  }
};
console.log(getHttpStatusMessage(200)); // Ожидаемый вывод: "OK: Запрос выполнен успешно"
console.log(getHttpStatusMessage(404));
console.log(getHttpStatusMessage(500));
console.log(getHttpStatusMessage(325));

// ### Задача: Функция проверки на четность
let isEven = (int) => int % 2 === 0;
console.log(isEven(10));
console.log(isEven(7));

const myCity = {
  city: "New York",
  info: {
    isPopular: true,
    country: "USA",
  },
};
console.log(myCity.info.isPopular);

delete myCity.info["country"];

console.log(myCity);

myCity.info.myVillage = "GHUSAR";

console.log(myCity);