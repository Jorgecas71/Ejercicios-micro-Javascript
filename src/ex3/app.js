
// Dado que el usuario se encuentra en la página con el formulario
// Cuando rellena el campo de formulario con su nombre y valida haciendo click en el botón validar
// Entonces se renderiza en pantalla el texto "hola <nombre usuario>" y
// Dado que el input está vacio
// Cuando el usuario hace click en validar
// Entonces se muestra el texto "Debe introducir su nombre"

// Criterio 1
// Click de botón = evento
// Recuperar el nombre de usuario
// Renderizar en un contenedor html el texto "hola Pepe"

// Criterio 2
// Comprobar si el input está vacio

const inputUsername = document.getElementById('username')
const btnValidate = document.getElementById('btn-validate')
const mainBlock = document.querySelector('main')

btnValidate.addEventListener('click', () => {
    const username = inputUsername.value
    render(username)
})
function render(username) {
    if(isEmpty(username)){
        mainBlock.innerHTML = /* html */ 
        ` <span>debe introducir su nombre</span> `  
    }
    mainBlock.innerHTML = /* html */ 
       ` <span>Hola${username}</span> `
}

function isEmpty() {
    const stringLength = username.length
    // if (stringLength === 0) ? return true
    // return false
    return (stringLength === 0) ? true : false
}