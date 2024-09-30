// ### Задача: Управление заказами такси 1111

class TaxiOperator {
  constructor() {
    this.orders = [];
  }
  addOrder(order) {
    this.orders.push(order);
    console.log(`Добавлен заказ: "${order}"`);
  }
  removeOrder(index) {
    const removedOrder = this.orders.splice(index, 1);
    console.log(`Удален заказ: "${removedOrder[0]}"`);
  }
  getLastOrders(count) {
    const lastOrders = this.orders.slice(-count);
    console.log(`Последние ${count} заказов:`, lastOrders);
    return lastOrders;
  }

  getOrders() {
    console.log("Текущий список заказов:", this.orders);
    return this.orders;
  }
}
const taxiOperator = new TaxiOperator();
taxiOperator.addOrder("Заказ от Анвар, маршрут: А -> В");
taxiOperator.addOrder("Заказ от Насиба, маршрут: С -> D");
taxiOperator.addOrder("Заказ от Шахром, маршрут: Е -> F");
taxiOperator.removeOrder(1);
taxiOperator.getLastOrders(2);
taxiOperator.getOrders();

// ### Задача: Операции в кассе магазина
class CashRegister {
  constructor() {
    this.items = [];
  }

  addItem(name, price, quantity) {
    this.items.push({ name, price, quantity });
  }

  removeItem(name) {
    this.items = this.items.filter((item) => item.name !== name);
  }

  calculateTotal() {
    return this.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  getReceipt() {
    const itemsList = this.items
      .map((item) => `${item.name}: ${item.quantity} x $${item.price}`)
      .join("\n");
    return `${itemsList}\nИтого: $${this.calculateTotal().toFixed(2)}`;
  }
}

const cashRegister = new CashRegister();
cashRegister.addItem("Яблоки", 1.5, 3);
cashRegister.addItem("Бананы", 1.2, 5);
cashRegister.addItem("Апельсины", 2.0, 2);
cashRegister.removeItem("Бананы");
console.log(cashRegister.getReceipt());

// ### Задача: Управление рейсами в аэропорту
class Airport {
  constructor() {
    this.flights = [];
  }

  addFlight(flightNumber, destination, status) {
    this.flights.push({ flightNumber, destination, status });
  }

  findFlight(flightNumber) {
    return this.flights.find((flight) => flight.flightNumber === flightNumber);
  }

  filterDelayedFlights() {
    return this.flights.filter((flight) => flight.status === "delayed");
  }

  getFlightInfo() {
    return this.flights.map(
      (flight) =>
        `Рейс ${flight.flightNumber} летит в ${flight.destination} - статус: ${flight.status}`
    );
  }
}

const airport = new Airport();
airport.addFlight("SU123", "Москва", "on time");
airport.addFlight("AF456", "Париж", "delayed");
airport.addFlight("LH789", "Берлин", "on time");
airport.addFlight("BA101", "Лондон", "delayed");

console.log(airport.findFlight("AF456"));
console.log(airport.filterDelayedFlights());
console.log(airport.getFlightInfo());

// ### Задача: Система авторизации пользователей с использованием Map
class AuthSystem {
  constructor() {
    this.users = new Map();
  }
  register(username, password, name, email) {
    if (this.users.has(username)) {
      console.log(`Пользователь "${username}" уже существует.`);
    } else {
      this.users.set(username, { password, name, email });
      console.log(`Пользователь "${username}" зарегистрирован.`);
    }
  }
  login(username, password) {
    const user = this.users.get(username);
    if (user && user.password === password) {
      console.log(`Добро пожаловать, ${user.name}.`);
    } else {
      console.log(`Неверные данные для "${username}".`);
    }
  }
  getUserInfo(username) {
    const user = this.users.get(username);
    return user
      ? `Пользователь: ${user.name}, Email: ${user.email}`
      : `Пользователь не найден.`;
  }
}
const authSystem = new AuthSystem();
authSystem.register(`rakhshon.shpdizoda@mail.ru`, "Roxyr2115", "Roxy");
authSystem.register("user2", "mypassword", "Bob");

// ### Задача: Очередь в банке для консультации

class BankQueue {
  constructor() {
    this.queue = [];
  }

  addClient(name) {
    this.queue.push(name);
    console.log(`Клиент ${name} добавлен в очередь.`);
  }

  serveClient() {
    const servedClient = this.queue.shift();
    return servedClient ? `Клиент ${servedClient} обслужен.` : "Очередь пуста.";
  }

  getQueue() {
    return this.queue.length
      ? `Текущая очередь: ${this.queue.join(", ")}`
      : "Очередь пуста.";
  }
}

const bankQueue = new BankQueue();

bankQueue.addClient("Иван");
bankQueue.addClient("Анна");
bankQueue.addClient("Сергей");
console.log(bankQueue.serveClient());
console.log(bankQueue.getQueue());

bankQueue.addClient("Мария");
console.log(bankQueue.serveClient());
console.log(bankQueue.getQueue());

// ### Задача: Обнаружение мошенничества для мобильных кошельков
class FraudDetector {
  constructor() {
    this.transactions = [];
  }

  addTransaction(amount, type) {
    this.transactions.push({ amount, type, isFlagged: false });
  }

  flagLargeTransactions(limit) {
    this.transactions.forEach((transaction) => {
      if (transaction.amount > limit) {
        transaction.isFlagged = true;
      }
    });
  }

  getFlaggedTransactions() {
    return this.transactions.filter((transaction) => transaction.isFlagged);
  }
}

const fraudDetector = new FraudDetector();

fraudDetector.addTransaction(500, "debit");
fraudDetector.addTransaction(1500, "credit");
fraudDetector.addTransaction(2500, "debit");

fraudDetector.flagLargeTransactions(1000);

const flagged = fraudDetector.getFlaggedTransactions();
console.log(flagged);

// ### Задача: Управление курсами по JavaScript для студентов
class JavaScriptCourse {
  constructor() {
    this.students = [];
  }

  addStudent(name, grades) {
    this.students.push({ name, grades });
  }

  getAverageGrades() {
    return this.students.map((student) => {
      const average =
        student.grades.reduce((sum, grade) => sum + grade, 0) /
        student.grades.length;
      return { name: student.name, average: average.toFixed(2) };
    });
  }

  getStudentsAboveAverage(threshold) {
    return this.getAverageGrades().filter(
      (student) => student.average > threshold
    );
  }

  allStudentsPassed(passingGrade) {
    return this.students.every((student) =>
      student.grades.every((grade) => grade >= passingGrade)
    );
  }
}

const jsCourse = new JavaScriptCourse();

jsCourse.addStudent("Alice", [85, 90, 78]);
jsCourse.addStudent("Bob", [60, 75, 70]);
jsCourse.addStudent("Charlie", [95, 92, 88]);

console.log("Средние оценки студентов:", jsCourse.getAverageGrades());
console.log(
  "Студенты с оценками выше 80:",
  jsCourse.getStudentsAboveAverage(80)
);
console.log("Все студенты прошли курс:", jsCourse.allStudentsPassed(75));

// ### Задача: Управление балансом клиентов мобильного оператора
class MobileOperator {
  constructor() {
    this.clients = [];
  }

  addClient(name, balance) {
    this.clients.push({ name, balance });
  }

  sortClientsByBalance() {
    this.clients.sort((a, b) => a.balance - b.balance);
  }

  reverseClientList() {
    this.clients.reverse();
  }

  getClientList() {
    return this.clients.map((client) => `${client.name}: ${client.balance}`);
  }
}

const mobileOperator = new MobileOperator();

mobileOperator.addClient("Иван", 100);
mobileOperator.addClient("Анна", 200);
mobileOperator.addClient("Сергей", 50);
mobileOperator.addClient("Мария", 150);

mobileOperator.sortClientsByBalance();
mobileOperator.reverseClientList();

console.log(mobileOperator.getClientList());

// ### Задача: Управление списком дел в полицейском участке

class PoliceStation {
  constructor() {
    this.cases = [];
  }

  addCase(caseNumber, suspectName, status) {
    this.cases.push({ caseNumber, suspectName, status });
  }

  findCaseByNumber(caseNumber) {
    return (
      this.cases.find((c) => c.caseNumber === caseNumber) || "Дело не найдено"
    );
  }

  findCaseBySuspectName(suspectName) {
    return (
      this.cases.find((c) => c.suspectName === suspectName) || "Дело не найдено"
    );
  }

  getAllCases() {
    return this.cases.map(
      (c) => `Дело №${c.caseNumber}: ${c.suspectName}, статус: ${c.status}`
    );
  }
}

const policeStation = new PoliceStation();

policeStation.addCase(101, "Анвар Холиков", "расследуется");
policeStation.addCase(102, "Рухшона Давлатова", "открыто");
policeStation.addCase(103, "Сомон Усмонов", "закрыто");

console.log(policeStation.findCaseByNumber(102));
console.log(policeStation.findCaseBySuspectName("Иван Иванов"));
console.log(policeStation.getAllCases());

// ### Задача: Управление товарами в интернет-магазине

class Product {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }

  getDetails() {
    return `${this.name} (${this.category}) - $${this.price}`;
  }
}

class Electronics extends Product {
  constructor(name, price, warranty) {
    super(name, price, 'Electronics');
    this.warranty = warranty;
  }

  getDetails() {
    return `${super.getDetails()}, гарантия: ${this.warranty} года`;
  }
}

class Clothing extends Product {
  constructor(name, price, size) {
    super(name, price, 'Clothing');
    this.size = size;
  }

  getDetails() {
    return `${super.getDetails()}, размер: ${this.size}`;
  }
}

class Book extends Product {
  constructor(name, price, author) {
    super(name, price, 'Book');
    this.author = author;
  }

  getDetails() {
    return `${super.getDetails()}, автор: ${this.author}`;
  }
}

class Store {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  listProducts() {
    this.products.forEach(product => {
      console.log(product.getDetails());
    });
  }

  filterByCategory(category) {
    return this.products.filter(product => product.category === category);
  }

  mapProducts() {
    return this.products.map(product => ({
      name: product.name,
      price: product.price
    }));
  }
}

const store = new Store();

store.addProduct(new Electronics('Ноутбук', 1500, 2));
store.addProduct(new Clothing('Футболка', 20, 'M'));
store.addProduct(new Book('JavaScript для начинающих', 30, 'Джон Доу'));

console.log('Все товары:');
store.listProducts();

console.log('\nТовары категории Electronics:');
console.log(store.filterByCategory('Electronics'));

console.log('\nТовары (названия и цены):');
console.log(store.mapProducts());

// ### Задача: Управление отчетами о продаже квартир с использованием Set

class SalesReport {
  constructor() {
    this.sales = new Set();
  }

  addSale(propertyId, saleDate) {
    const sale = `${propertyId}-${saleDate}`;
    if (this.sales.has(sale)) {
      console.log("Запись о продаже уже существует.");
    } else {
      this.sales.add(sale);
      console.log("Запись добавлена.");
    }
  }

  removeSale(propertyId, saleDate) {
    const sale = `${propertyId}-${saleDate}`;
    if (this.sales.has(sale)) {
      this.sales.delete(sale);
      console.log("Запись удалена.");
    } else {
      console.log("Запись не найдена.");
    }
  }

  getAllSales() {
    return Array.from(this.sales);
  }

  getSalesCount() {
    return this.sales.size;
  }
}

const salesReport = new SalesReport();

salesReport.addSale("Apartment1", "2024-09-01");
salesReport.addSale("Apartment2", "2024-09-05");
salesReport.addSale("Apartment1", "2024-09-01"); // Дубликат
salesReport.addSale("Apartment3", "2024-09-10");

salesReport.removeSale("Apartment2", "2024-09-05");

console.log("Все уникальные записи о продаже:", salesReport.getAllSales());
console.log("Количество уникальных записей:", salesReport.getSalesCount());
