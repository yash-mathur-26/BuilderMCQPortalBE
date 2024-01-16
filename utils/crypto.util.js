// Import the CryptoJS library
const CryptoJS = require('crypto-js');
require("dotenv").config();

const secretKey = process.env.JWT_KEY;

// Encryption function
exports.encryptText = (text) => {
    const encrypted = CryptoJS.AES.encrypt(text, secretKey);
    return encrypted.toString();
}

// Decryption function
exports.decryptText = (encryptedText) => {
    const decrypted = CryptoJS.AES.decrypt(encryptedText, secretKey);
    return decrypted.toString(CryptoJS.enc.Utf8);
}
