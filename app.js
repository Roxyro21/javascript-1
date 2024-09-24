// ### Задача: Управление аккаунтом с использованием
const account = {
  owner: "Rakhshona",
  balance: 100,
  deposit: function (amount) {
    this.balance += amount;
  },
  withdraw: function (amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
    } else {
      console.log("Недостаточно средств");
    }
  },
  getBalance: function () {
    return this.balance;
  },
  getOwner: function () {
    return this.owner;
  },
};
console.log(`Владелец аккаунта: ${account.getOwner()}`);
account.deposit(50);
console.log(account.getBalance());
account.withdraw(100);
console.log(account.getBalance());
account.withdraw(100);
console.log(account.getBalance());

// ### Задача: Слияние объектов
const user = {
  username: "Rakhshon",
  email: "rakhshon.shodizoda@mail.ru",
  age: 21,
};

const address = {
  city: "Panjakent",
  state: "New York",
  postalCode: 7349000,
};

const userProfile1 = {
  ...user,
  ...address,
};
const userProfile2 = Object.assign(address, user);
console.log(userProfile1, userProfile2);

// ### Задача: Создание объекта с помощью литерала объекта
const myBook = {
  title: "После тебя",
  author: "Джоджо Мойес",
  year: "2021",
  isAvailable: false,
};
console.log(myBook);

// ### Задача: Функция Конструктор
function Book(title, author, year, genre) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.genre = genre;
}
const book1 = new Book("До встречи с тобой", "Джоджо Мойес", 2020, "Roman");

console.log(book1);

// ### Задача: Объекты и методы в контексте `this`
const calculator = {
  num1: 0,
  num2: 0,

  setNumbers(a, b) {
    this.num1 = a;
    this.num2 = b;
  },

  add: () => calculator.num1 + calculator.num2,
  subtract: () => calculator.num1 - calculator.num2,
  multiply: () => calculator.num1 * calculator.num2,
  divide: () =>
    calculator.num2 === 0
      ? "Ошибка: Деление на ноль!"
      : calculator.num1 / calculator.num2,
};

calculator.setNumbers(10, 5);
console.log(calculator.add());
console.log(calculator.subtract());
console.log(calculator.multiply());
console.log(calculator.divide());

// ### Задача: Создание объекта с помощью Object()
const car = Object();

car.brand = "BMW";
car.model = "M5 f90";
car.year = 2024;
car.isElectric = true;

console.log(car);

// ### Задача: Управление транзакцией карты

const cardTransaction = {
  amount: 0,
  transactionType: "",
  transactionStatus: "",

  updateTransaction(amount, type, status) {
    (this.amount = amount),
      (this.transactionType = type),
      (this.transactionStatus = status);
  },
  resetTransaction() {
    this.amount = 0;
    this.transactionType = "";
    this.transactionStatus = "";
  },
  getTotal(balance) {
    if (
      this.transactionType === "purchase" &&
      this.transactionStatus === "completed"
    ) {
      return balance - this.amount;
    } else if (
      this.transactionType === "refund" &&
      this.transactionStatus === "completed"
    ) {
      return balance + this.amount;
    } else {
      console.log("Транзакция не завершена или не влияет на баланс.");
      return balance;
    }
  },
  displayTransaction() {
    if (this.transactionType && this.transactionStatus) {
      console.log(
        `Транзакция: ${this.transactionType} на сумму ${this.amount}, статус: ${this.transactionStatus}`
      );
    } else {
      console.log("Транзакция не была выполнена.");
    }
  },
};
let currentBalance = 500;
cardTransaction.updateTransaction(100, "purchase", "completed");
cardTransaction.displayTransaction();
currentBalance = cardTransaction.getTotal(currentBalance);
console.log(`Новый баланс: $${currentBalance}`);
cardTransaction.resetTransaction();
cardTransaction.displayTransaction();

// ### Задача: Копирование объекта
const copyObject = (obj) => {
  return { ...obj };
};
const original = { name: "Alice", age: 30 };
const copy = copyObject(original);
console.log(copy);
console.log(original === copy);

// ### Задача: Подсчёт количества свойств в объекте

const countProperties = (obj) => {
  return Object.keys(obj).length;
};
const userr = { name: "Alice", age: 30, city: "New York" };
console.log(countProperties(userr));

// ### Задача: Создание объекта пользователя
const createUser = (name, age) => {
  return { name, age };
};

console.log(createUser("Alice", 30));

// ### Задача: Управление кредитным счетом
const creditAccount = {
  owner: "Roxy",
  balance: 200,
  creditLimit: 9000,
  apr: 0.18,

  deposit(amount) {
    console.log(
      `Пополнение на: ${amount}. Текущий баланс: ${(this.balance += amount)}`
    );
  },
  withdraw(amount) {
    if (this.balance - amount >= -this.creditLimit) {
      console.log(
        `Снято: ${amount}. Текущий баланс: ${(this.balance -= amount)}`
      );
    } else console.log("Кредитный лимит превышен.Недостаточно средств. ");
  },
  applyInterest() {
    if (this.balance < 0) {
      const interest = (this.balance * this.apr) / 12;

      this.balance += interest;
      console.log(
        `Начислены проценты: ${interest.toFixed(2)}. Текущий баланс: ${
          this.balance
        }`
      );
    }
  },
  getBalance() {
    return this.balance;
  },
  getDebt() {
    if (this.balance < 0) {
      return Math.abs(this.balance);
    } else {
      return 0;
    }
  },
};
creditAccount.deposit(1000);
creditAccount.withdraw(2000);
creditAccount.applyInterest();
console.log(creditAccount.getDebt());

// ### Задача: Удаление свойства из объекта

const deleteProperty = (obj, propertyName) => {
  delete obj[propertyName];
  return obj;
};
const person = { name: "Bob", age: 40, city: "San Francisco" };
console.log(deleteProperty(person, "city"));

// ### Задача: Манипуляция со свойствами объекта
const employee = {
  name: "Rakhshona",
  position: "Project Manager",
  salary: 3000,
  isFullTime: true,
};

employee.position = "Front-end Developer";
employee.hireDate = "20.02.2020";
delete employee.salary;

console.log(employee);

// ### Задача: Создание объекта с информацией о фильме

const myFilms = {
  title: "Клинок рассекающий демонов",
  director: "Харуо Сотодзаки",
  year: 2022,
  genres: ["аниме", "боевика", "фэнтези"],
  isWatched: true,
};
console.log(myFilms);

// ### Задача: Проверка существования свойства в объекте
const hasProperty = (obj, propertyName) => propertyName in obj;

const cars = { brand: "Toyota", model: "Camry", year: 2021 };
console.log(hasProperty(cars, "model"));
console.log(hasProperty(cars, "color"));

// ### Задача: Итерация по объектам с помощью for...in
const laptop = {
  brand: "IOS",
  model: "MacBook",
  year: 2023,
  price: 20000,
};
for (const key in laptop) {
  console.log(`${key}: ${laptop[key]}`);
}

// ### Задача: Работа с дескрипторами свойств

const personn = {
  name: "Roxy",
  age: 21,
};
Object.defineProperty(personn, "age", {
  writable: false,
  enumerable: false,
  configurable: false,
});

personn.age = 22;
console.log(personn.age);

const infoPerson = Object.getOwnPropertyDescriptor(personn, "age");

console.log(infoPerson);
// ### Задача: Манипуляция со свойствами объекта
const product = {
  name: "Rafaello",
  price: 50,
  category: "chocolate",
  inStock: false,
};

console.log(product);

product.price = 55;
product.inStock = true;
product.rating = 5;
delete product.category;
console.log(product);

// ### Задача: Защита объектов от изменения
const myProject = {
  name: "Managers 3.0",
  team: ["Rakhshon", "Shahzod", "Ismoil"],
  status: "Сurrent",
};

Object.preventExtensions(myProject);

myProject.deadline = "10.02.25";
console.log(myProject);

Object.seal(myProject);
myProject.status = "not relevant";

delete myProject.team;
console.log(myProject); //статус изменился

Object.freeze(myProject);

myProject.name = "SMS Gate";
console.log(myProject); //не изменился

// ### Задача: Прототипы в JavaScript

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const person1 = new Person("Rakhshon", "Shadizade");

const employyee = Object.create(person1);

employyee.position2 = "Manager";
employyee.position3 = "Full steck - Developer";

console.log(person1.getFullName());
console.log(employyee.getFullName());
console.log(employyee.position3);

// ### Задача: Управление корзиной одного товара
const shoppingCart = {
  itemName: "",
  itemPrice: 0,
  itemQuantity: 0,

  updateItem(name, price, quantity) {
    this.itemName = name;
    this.itemPrice = price;
    this.itemQuantity = quantity;

    console.log(
      `Товар обновлен: ${this.itemName}, количество: ${this.itemQuantity}, цена: ${this.itemPrice}`
    );
  },
  resetItem() {
    this.itemName = "";
    this.itemPrice = 0;
    this.itemQuantity = 0;
  },
  getTotal() {
    return this.itemPrice * this.itemQuantity;
  },
  displayCart() {
    console.log(
      this.itemName == ""
        ? "Корзина пуста."
        : `Товар: ${this.itemName}, количество: ${this.itemQuantity}, цена: ${this.itemPrice}`
    );
  },
};
shoppingCart.updateItem("Ноутбук", 999.99, 1);
shoppingCart.displayCart();
shoppingCart.resetItem();
shoppingCart.displayCart(); // Ожидаемый вывод: Корзина пуста.

// ### Задача: Итерация по объектам с помощью Object.keys()

const student = {
  name: "Roxy",
  age: 21,
  major: "Biology",
  gpa: 96,
};

const keys = Object.keys(student);
console.log(keys.length);

keys.forEach((key) => {
  console.log(`${key}: ${student[key]}`);
});

// ### Задача: Обновление свойства объекта
function updateProductQuantity(product, newQuantity) {
  product.quantity = newQuantity;
  return product;
}
const products = { name: "Laptop", price: 999.99, quantity: 5 };

console.log("задача1", updateProductQuantity(products, 10));

// ### Задача: Деструктурирование объектов
const usser = {
  username: "Jonona",
  email: "j.jonona@team.alif.tj",
  age: 2001,
  country: "",
};

const { username, email, age, countryy = "Tajikistan" } = usser;

console.log(username);
console.log(email);
console.log(age);
console.log(countryy);

// ### Задача: Паттерн Фабрика (Factory Pattern)

function getVehicleFactory(type) {
  switch (type) {
    case "Car":
      return {
        type: "Car",
        wheels: 4,
        engine: "v4",
      };
    case "Bike":
      return {
        type: "Bike",
        wheels: 2,
      };
    case "Truck":
      return {
        type: "Truck",
        wheels: 6,
        loadCapaciti: 10,
      };
    default:
      console.log("IDK your type");
  }
}

console.log(getVehicleFactory("Car"));
console.log(getVehicleFactory("Bike"));
console.log(getVehicleFactory("Truck"));
console.log(getVehicleFactory("BMW"));
