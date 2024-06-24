function mostrarDivisores(numero) {
    if (numero <= 0) {
        console.log("Por favor, ingresa un número positivo y distinto de cero.");
        return;
    }

    console.log(`Los divisores de ${numero} son:`);
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            console.log(i);
        }
    }
}

let numero = parseInt(prompt("Por favor, ingresa un número para encontrar sus divisores:"));

mostrarDivisores(numero);