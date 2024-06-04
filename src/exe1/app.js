// Texto
// Renderiza un h1 en navegador

// Dado que se encuentra en la página html
// Cuando se renderiza
// Entonces veo el título Hello Javascript

const hello = 'Hello Javascript'
const divApp = document.querySelector('#app')

function renderTitle(title) {
    divApp.innerHTML = /* html */ `
     <h1>${title}</h1>`
}

renderTitle(hello)