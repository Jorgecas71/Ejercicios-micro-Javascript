//Defino las variables

let a = 8
let b = 2

// El condicional if,else para comparar los números 
const showNumber = document.getElementById('showNumber')

function mostrarMayor() {
    if (a > b) {
        return `El número mayor es a: ${a}`;

    } else if (a < b) {
        return `El número mayor es b: ${b}`;

    } else {
        return 'Ambos números son iguales.';
    }
}

// imprimir en DOM

showNumber.innerHTML = `EL numero mayor es ${mostrarMayor()}`;