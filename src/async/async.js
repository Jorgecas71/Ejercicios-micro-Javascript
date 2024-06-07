
// recuperar los datos
// imprimir en consola los títulos

const path = '/src/async/data.json'
 

 async function getData() {
   const response = await fetch(path)
   const data = await response.json()
   console.log(data);
 }
  
 getData()

 async function renderDataInConsole(data) {
 for (let index = 0; index < data.results; index++) {
  console.log((data.results[index].title))
}
}

<<<<<<< HEAD
getData()
=======
getData()
>>>>>>> develop
