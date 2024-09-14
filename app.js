var currentStock = 100;

let dailyStock = 0
const maxStock = 500; 

console.log("Текущий запас:", currentStock);
console.log("Поступившие товары за день:", dailyStock);
console.log("Максимальная емкость:", maxStock);


dailyStock += 50; 
console.log("Поступившие товары за день:", dailyStock);


currentStock -= 20; 
console.log("Текущий запас:", currentStock);

try {
  currentStock += 600; 
  console.log("Текущий запас:", currentStock);
} catch (error) {
  console.error("Ошибка: Превышена максимальная емкость склада!");
}