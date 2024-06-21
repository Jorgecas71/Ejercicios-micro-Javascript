// Pedir frase al usuario
let phrase = prompt("Por favor, introduce una frase:");

// Definir vocales
const vowels = ['a', 'e', 'i', 'o', 'u'];

// Crear un objeto con las vocales encontradas
let foundVowels = {};

for (let i = 0; i < phrase.length; i++) {
    let char = phrase[i].toLowerCase();
    if (vowels.includes(char)) {
        if (foundVowels[char]) {
            foundVowels[char]++;
        } else {
            foundVowels[char] = 1;
        }
    }
}

// Crear un mensaje para mostrar las vocales encontradas
let message = "Vocales encontradas:\n";
for (let vowel in foundVowels) {
    message += `${vowel}: ${foundVowels[vowel]} veces\n`;
}

// resultado
alert(message);