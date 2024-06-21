
// Pedir una frase al usuario
let phrase = prompt("Por favor, introduce una frase:");

// Contar cuántas veces aparece la letra 'a'
let count = 0;
for (let i = 0; i < phrase.length; i++) {
    if (phrase[i].toLowerCase() === 'a') {
        count++;
    }
}

// Mostrar el resultado
alert("La letra 'a' aparece " + count + " veces en la frase.");