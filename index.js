const CryptoJS = require("crypto-js");

// Функція для шифрування тексту з використанням AES
function encryptText(message, secretKey) {
    // Шифрування повідомлення
    const encryptedMessage = CryptoJS.AES.encrypt(message, secretKey).toString();
    return encryptedMessage;
}

// Експорт функції encryptText
module.exports = {
    encryptText
};
