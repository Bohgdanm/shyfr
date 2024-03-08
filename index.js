const CryptoJS = require("crypto-js");

// Текст, який потрібно зашифрувати
const message = "Це секретне повідомлення";
// Секретний ключ для шифрування
const secretKey = "мій_секретний_ключ";

// Шифрування повідомлення
const encryptedMessage = CryptoJS.AES.encrypt(message, secretKey).toString();

console.log("Зашифроване повідомлення:", encryptedMessage);
