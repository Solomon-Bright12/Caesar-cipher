let encryptedInput = document.getElementById('encryptText'); 
let encryptedshiftedInput = document.getElementById('encryptionShift');
let encryptedcaeserbtn = document.getElementById('Encryptbtn');
let encryptedresultp = document.getElementById('encryptedResult');

let decryptedInput = document.getElementById('decryptText'); 
let decryptedshiftedInput = document.getElementById('decryptionShift');
let decryptedcaeserbtn = document.getElementById('Decryptbtn');
let decryptedresultp = document.getElementById('result');

function encryption(text, key) {
    return ceaserCipher(text, key);
}

function decryption(text, key) {
    return ceaserCipher(text, -key);
}

function ceaserCipher(text, key) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        let code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) {
            result += String.fromCharCode(((code - 65 + key) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
            result += String.fromCharCode(((code - 97 + key) % 26) + 97);
        } else {
            result += char;
        }
    }
    return result;
}

encryptedcaeserbtn.addEventListener('click', () => {
    const message = encryptedInput.value;
    const shift = parseInt(encryptedshiftedInput.value);
    const encryptedmessage = encryption(message, shift);
    encryptedresultp.textContent = encryptedmessage;
});

decryptedcaeserbtn.addEventListener('click', () => {
    const message1 = decryptedInput.value;
    const shift1 = parseInt(decryptedshiftedInput.value);
    const decryptedmessage = decryption(message1, shift1);
    decryptedresultp.textContent = decryptedmessage;
});
