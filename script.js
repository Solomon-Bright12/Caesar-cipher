let encryptedInput = document.getElementById('text');
let encryptedshiftedInput = document.getElementById('encryption');
let encryptedcaeserbtn = document.getElementById('Encryptbtn');
let encryptedresultp = document.getElementById('encryptedResult');


let decryptedInput = document.getElementById('text2');
let decryptedshiftedInput = document.getElementById('decryption');
let decryptedcaeserbtn = document.getElementById('Decryptbtn');
let decryptedresultp = document.getElementById('result');

function encryption(text, key){
    return ceaserCipher(text, key);
}
function decryption(text, key){
    return ceaserCipher(text, -key);
}
function ceaserCipher(text, key) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
        let string = str[i];
        let code = string.charCodeAt(0);
        if (/[A-Za-z]/.test(code)) {
            code - ((/[a-z]/.test(char) ? 97 : 65) + key + 26)
        }
        else {
            result += string;
        }
    }
    return result;
}
encryptedcaeserbtn.addEventListener('click', ()=>{
    const message = encryptedInput.value;
    const shift = parseInt(encryptedInput.value)
    const encryptedmessage = ceaserCipher(text, key);
    encryptedresultp.textContent = "Encryption: " + encryptedmessage;
    
});

decryptedcaeserbtn.addEventListener('click', ()=>{
    const message2 = decryptedInput.value;
    const decryptedshift = parseInt(encryptedInput.value)
    const decryptedmessage = ceaserCipher(text, -key);
    decryptedresultp.textContent = "Encryption: " + decryptedmessage;
    
});