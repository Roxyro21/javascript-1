// 1. Переменная с использованием var:
var currentStock = 100; // Текущий запас товара (может изменяться)

// 2. Переменная с использованием let:
let dailyStock = 0; // Количество поступивших товаров за день (может изменяться)

// 3. Константа с использованием const:
const maxStock = 500; // Максимальная емкость склада (не может изменяться)

// Пример работы с переменными:
console.log("Текущий запас:", currentStock);
console.log("Поступившие товары за день:", dailyStock);
console.log("Максимальная емкость:", maxStock);

// Поступление новых товаров:
dailyStock += 50; // Добавьте 50 товаров
console.log("Поступившие товары за день:", dailyStock);

// Продажа товара:
currentStock -= 20; // Продали 20 товаров
console.log("Текущий запас:", currentStock);

// Попытка превысить максимальную емкость склада:
try {
  currentStock += 600; // Добавить 600 товаров
  console.log("Текущий запас:", currentStock); // Эта строка не выполнится
} catch (error) {
  console.error("Ошибка: Превышена максимальная емкость склада!");
}