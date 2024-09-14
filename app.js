function setUserSettings(theme, language, maxNotifications) {
  // Используем var для объявления переменных, доступных внутри всей функции
  var userTheme = theme;
  var userLanguage = language;
  var userMaxNotifications = maxNotifications;

  // Функция для обновления темы оформления
  function updateTheme(newTheme) {
    // Переменная userTheme доступна внутри внутренней функции
    userTheme = newTheme;
    console.log("Текущая тема: " + userTheme);
  }

  // Функция для обновления языка интерфейса
  function updateLanguage(newLanguage) {
    // Переменная userLanguage доступна внутри внутренней функции
    userLanguage = newLanguage;
    console.log("Текущий язык: " + userLanguage);
  }

  // Функция для обновления максимального количества уведомлений
  function updateMaxNotifications(newMaxNotifications) {
    // Переменная userMaxNotifications доступна внутри внутренней функции
    userMaxNotifications = newMaxNotifications;
    console.log("Максимальное количество уведомлений: " + userMaxNotifications);
  }

  // Функция для отображения текущих настроек
  function displaySettings() {
    console.log("Текущие настройки:");
    console.log("Тема: " + userTheme);
    console.log("Язык: " + userLanguage);
    console.log("Максимальное количество уведомлений: " + userMaxNotifications);
  }

  // Выводим начальные настройки
  displaySettings();

  // Возвращаем функции для обновления настроек
  return {
    updateTheme,
    updateLanguage,
    updateMaxNotifications,
    displaySettings,
  };
}

// Создаем объект с настройками пользователя
let userSettings = setUserSettings("Светлая", "Русский", 5);

// Обновляем тему оформления
userSettings.updateTheme("Темная");

// Обновляем язык интерфейса
userSettings.updateLanguage("Английский");

// Обновляем максимальное количество уведомлений
userSettings.updateMaxNotifications(10);

// Выводим обновленные настройки
userSettings.displaySettings();
