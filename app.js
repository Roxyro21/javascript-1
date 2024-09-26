// ### Задача: Управление историей в Instagram со статическим свойством и методом
class InstagramStory {
  static totalStories = 0;
  #title;
  #views = 0;
  constructor(title) {
    this.#title = title;
    this.#views = 0;
  }

  addView() {
    this.#views += 1;
    console.log(
      `История ${this.#title} просмотрена! Общее количество просмотров: ${
        this.#views
      }`
    );
  }
  getInfo() {
    return `История: ${this.#title} \nПросмотров: ${this.#views}`;
  }
  static getTotalStories() {
    return `Общее количество созданных истории ${InstagramStory.totalStories}`;
  }
}
const story1 = new InstagramStory("Мой первый день на море");
const story2 = new InstagramStory("Закат на пляже");

story1.addView();
story2.addView();
console.log(story1.getInfo());
console.log(InstagramStory.getTotalStories());

// ### Задача: Банковский аудит с использованием приватных свойств
class BankAccount {
  #balance;
  #transactionHistory;
  constructor() {
    this.#balance = 0;
    this.#transactionHistory = [];
  }
  deposit(amount) {
    this.#balance += amount;
    this.#transactionHistory.push(`DEPOSIT: $${amount}`);
    console.log(
      `На счёт внесено: ${amount} Текущий баланс:${
        this.#balance + this.#transactionHistory
      } `
    );
  }
  withdraw(amount) {
    this.#balance -= amount;
    this.#transactionHistory.push(`WITHDRAW: $${amount}`);
    console.log(`Со счёта снято:${amount} Текущий баланс:${this.#balance}`);
  }
  getBalance() {
    return this.#balance;
  }
  audit() {
    console.log("История транзакций");
    this.#transactionHistory.forEach((value, index) => {
      console.log(`${index + 1}. ${value}`);
    });
  }
}
const myAccount = new BankAccount();
myAccount.deposit(1000);
console.log(myAccount.getBalance());
myAccount.withdraw(300);
console.log(myAccount.getBalance());
console.log(`Текущий баланс: $${myAccount.getBalance()}`);
myAccount.audit();

// ### Задача: Инкапсуляция для персонажей Барби и Кена

class Doll {
  #name;
  #age;
  #outfit;

  constructor(name, age, outfit) {
    this.#name = name;
    this.#age = age;
    this.#outfit = outfit;
  }
  getInfo() {
    return `Имя: ${this.#name}, Возраст: ${this.#age}, Наряд ${this.#outfit}`;
  }
  changeOutfit(newOutfit) {
    this.#outfit = newOutfit;
    console.log(`${this.#name} сменила наряд на: ${newOutfit}`);
  }
}
const barbie = new Doll("Барби", 25, "розовое платье");
const ken = new Doll("Кен", 26, "костюм");

console.log(barbie.getInfo());
console.log(ken.getInfo());

barbie.changeOutfit("синее платье");
console.log(barbie.getInfo());

// ### Задача: Класс для автомобиля BMW
class BMW {
  constructor(model, color, year) {
    this.model = model;
    this.color = color;
    this.year = year;
    this.mileage = 0;
  }

  paint(newColor) {
    this.color = newColor;
    console.log(`Цвет автомобиля изменен на: ${newColor}`);
  }
  drive(distance) {
    this.mileage += distance;
    console.log(
      `Автомобиль проехал ${distance} км. Общий пробег: ${this.mileage} км.`
    );
  }
  startEngine() {
    console.log(`Двигатель автомобиля ${this.model} запущен.`);
  }
  displayInfo() {
    console.log(`Модель: ${this.model}`);
    console.log(`Цвет: ${this.color}`);
    console.log(`Год выпуска: ${this.year}`);
    console.log(`Пробег: ${this.mileage} км`);
  }
}
const myBMW = new BMW("X5", "Черный", 2020);
myBMW.displayInfo();
myBMW.startEngine();
myBMW.paint("Синий");
myBMW.drive(120);
myBMW.displayInfo();

//### Задача: Класс для поста в социальной медиа

class Post {
  constructor(title, content, author) {
    this.title = title;
    this.content = content;
    this.author = author;
    this.likes = 0;
  }

  updateContent(newContent) {
    this.content = newContent;
    console.log(`Текст поста обновлен: ${newContent}`);
  }

  addLike() {
    this.likes++;
    console.log(`Посту добавлен лайк. Всего лайков: ${this.likes}`);
  }

  deletePost() {
    this.title = "";
    this.content = "";
    this.author = "";
    this.likes = 0;
    console.log("Пост был удален.");
  }

  displayPost() {
    if (this.title && this.content && this.author) {
      console.log(`Пост: ${this.title}`);
      console.log(`Автор: ${this.author}`);
      console.log(`Текст: ${this.content}`);
      console.log(`Лайков: ${this.likes}`);
    } else {
      console.log("Пост был удален.");
    }
  }
}
const post1 = new Post(
  "Мой первый пост",
  "Это мой первый пост в социальной сети!",
  "Roxy Shaddy"
);
post1.displayPost();
post1.addLike();
post1.updateContent("Обновленный текст моего первого поста.");
post1.displayPost();
post1.deletePost();
post1.displayPost();

//### Задача: Полиморфизм в игре Prince of Persia
class Character {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }

  attack() {
    console.log(`${this.name} атакует!`);
  }
}
class Prince extends Character {
  attack() {
    console.log(`${this.name} наносит удар мечом!`);
  }
}

class Enemy extends Character {
  attack() {
    console.log(`${this.name} наносит удар мечом`);
  }
}
function executeAttack(Character) {
  Character.attack();
}

const prince = new Prince("Принц", 100);
const enemy = new Enemy("Враг", 80);

executeAttack(prince);
executeAttack(enemy);

// ### Задача: Наследование классов для игроков команды Real Madrid
class Player {
  constructor(name, position, number) {
    this.name = name;
    this.position = position;
    this.number = number;
  }
  getInfo() {
    return `Игрок ${this.name}, \nПозиция: ${this.position}, \nНомер: ${this.number}`;
  }
}
class RealMadridPlayer extends Player {
  constructor(name, position, number, contractYears) {
    super(name, position, number);
    this.contractYears = contractYears;
  }
  getContractInfo() {
    return `Контракт на ${this.contractYears} лет с Real Madrid`;
  }
}

const player1 = new RealMadridPlayer("Карим Бензема", "Нападющий", 9, 3);
const player2 = new RealMadridPlayer("Лука Модрич", "Полузащитник", 10, 2);

console.log(player1.getInfo());
console.log(player1.getContractInfo());

console.log(player2.getInfo());
console.log(player2.getContractInfo());

// ### Задача: Управление рилсами в социальной медии

class Reel {
  constructor(title, duration) {
    this.title = title;
    this.duration = duration;
    this.likes = 0;
    this.views = 0;
  }

  like() {
    this.likes++;
    console.log(
      `Рилс "${this.title}" получил лайк! Общее количество лайков: ${this.likes}`
    );
  }

  addView() {
    this.views++;
    console.log(
      `Рилс "${this.title}" просмотрен! Общее количество просмотров: ${this.views}`
    );
  }

  getInfo() {
    return `Рилс: ${this.title}\nДлительность: ${this.duration} секунд\nЛайков: ${this.likes}\nПросмотров: ${this.views}`;
  }
}
const myReel = new Reel("Мой первыйпервый рилс", 30);
myReel.like();
myReel.addView();
console.log(myReel.getInfo());

// ### Задача: Полиморфизм в модели транспортных средств

class Transport {
  move() {
    console.log("Транспорт движется");
  }
}

class Car extends Transport {
  move() {
    console.log("Машина едет по дороге");
  }
}

class Bicycle extends Transport {
  move() {
    console.log("Велосипед едет по тротуару");
  }
}

function startTransport(transport) {
  transport.move();
}

const myCar = new Car();
const myBicycle = new Bicycle();

startTransport(myCar);
startTransport(myBicycle);

class YouTubeVideo {
  // Конструктор для инициализации заголовка и начальных значений
  constructor(title) {
    this.#title = title;
    this.#likes = 0;
    this.#dislikes = 0;
    this.#views = 0;
  }

  #title;
  #likes;
  #dislikes;
  #views;

  like() {
    this.#likes += 1;
    console.log(
      `Видео "${this.#title}" получило лайк! Общее количество лайков: ${
        this.#likes
      }`
    );
  }

  dislike() {
    this.#dislikes += 1;
    console.log(
      `Видео "${this.#title}" получило дизлайк! Общее количество дизлайков: ${
        this.#dislikes
      }`
    );
  }

  addView() {
    this.#views += 1;
    console.log(
      `Видео "${this.#title}" просмотрено! Общее количество просмотров: ${
        this.#views
      }`
    );
  }

  getInfo() {
    return `Видео: ${this.#title}\nЛайков: ${this.#likes}\nДизлайков: ${
      this.#dislikes
    }\nПросмотров: ${this.#views}`;
  }
}

const myVideo = new YouTubeVideo("Урок JavaScript");

myVideo.like();

myVideo.dislike();

myVideo.addView();

console.log(myVideo.getInfo());
