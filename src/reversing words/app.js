// Creamos una función
function reverseWords(s) {
    const words = s.split(/\s+/);
    const reversedWords = words.reverse();
    return reversedWords.join(" ");
}
//añadimos las variables solicitando el documento html
const inputString1 = "Hello World";
const outputString1 = reverseWords(inputString1);
document.getElementById('output1').textContent = outputString1;

const inputString2 = "Hi There";
const outputString2 = reverseWords(inputString2);
document.getElementById('output2').textContent = outputString2;


