
//La función verifica si los argumentos num1 y num2 son números. 
//Si alguno de ellos no lo es, devuelve valor desconocido.

function calculator(num1, num2, operator) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'valor desconocido';
    }

//La función utiliza switch para ver qué operación realizar.

    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : 'valor desconocido';
        default:
            return 'valor desconocido';
    }
}


console.log(calculator(1, 2, '+'));
 // 3
console.log(calculator(1, 2, '&'));
 // valor desconocido
console.log(calculator(1, 'k', '*'));
 // valor desconocido
console.log(calculator(4, 2, '/'));
 // 2
