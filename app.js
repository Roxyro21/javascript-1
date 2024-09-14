// Глобальные переменные
var theme = "light"; // глобальная переменная с использованием var
let language = "English"; // глобальная переменная с использованием let
const maxNotifications = 10; // глобальная константа с использованием const

// Функция для обновления настроек
function updateSettings(newTheme, newLanguage, newMaxNotifications) {
  if (newTheme) {
    theme = newTheme; // можно изменить значение переменной, объявленной через var
  }

  if (newLanguage) {
    language = newLanguage; // можно изменить значение переменной, объявленной через let
  }

  // const нельзя переопределить, поэтому значение maxNotifications нельзя изменить
  if (newMaxNotifications) {
    // maxNotifications = newMaxNotifications; // Это вызовет ошибку
  }

  console.log(
    `Settings updated: theme = ${theme}, language = ${language}, max notifications = ${maxNotifications}`
  );
}

// Функция для отображения текущих настроек
const displaySettings = function () {
  // функция-выражение
  console.log(
    `Current settings: theme = ${theme}, language = ${language}, max notifications = ${maxNotifications}`
  );
};
