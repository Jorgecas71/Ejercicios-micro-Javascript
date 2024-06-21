
// El condicional if, else comprara 
const showLargerNumber = document.getElementById('showNumber');

// Defino la función

function showNumber(a, b, c) {

    if (a > b && a > c) {
        return (`El número mayor es A: ${a}`);
    } else if (b > a && b > c) {
        return (`El número mayor es B: ${b}`);
    } else if (c > a && c > b) {
        return (`El número mayor es C: ${c}`);
    } else {
        return (`Los numeros son iguales:`);
    }
}

//Llamo al DOM

showLargerNumber.innerHTML = `${showNumber(5, 10, 7)}`;