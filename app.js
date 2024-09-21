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