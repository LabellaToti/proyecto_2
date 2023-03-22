/**Generador de tarjetas */

const hoy = new Date(data.currentDate)

const contenedorTarjetas = document.querySelector('#contenedorTarjetas')

let tarjetas = ''


function crearTarjetas(eventos){
  contenedorTarjetas.innerHTML = ""
  if(eventos.length>0){
    eventos.forEach(event => {
      let tarjetas = document.createElement("div")
      tarjetas.innerHTML = `<div class="card mt-5 me-3" style="width: 18rem;">
        <img src="${event.image}" class="card-img-top img-card" alt="evento">
        <div class="card-body">
          <h5 class="card-title">${event.name}</h5>
          <p class="card-text">${event.description}</p>
          <p class> Date: ${event.date}</p>
        </div>
        <div class="card-footer d-flex justify-content-between">
          <p class="mt-2">Price: ${event.price}</p>
          <a href="../details.html?id=${event._id}" class="btn btn-primary">See more</a>
        </div>
      </div>`
      contenedorTarjetas.appendChild(tarjetas)
      
    })
  } else {
    contenedorTarjetas.innerHTML = `<h2> Not Found</h2>`
  } 
}



fetch('https://mindhub-xj03.onrender.com/api/amazing').then(response => response.json().then(datosApi=>
{    console.log(datosApi.events[4]);
    let hoy = new Date(datosApi.currentDate)
    console.log(hoy)
    let eventosFuturos = datosApi.events.filter((evento)=> new Date(evento.date) > hoy)
    console.log(eventosFuturos)
    crearTarjetas(eventosFuturos)

    
  // Filtro del buscador

let buscador = document.getElementById("buscador")


buscador.addEventListener("input",filtrarContenido)


//Crear checkboxes

const checkboxes = document.getElementById("checkboxes")

let categorias = new Set()
  
  datosApi.events.forEach( event => categorias.add(event.category) )
  
  categorias.forEach(event => {
    let boxes = document.createElement("div")
    boxes.innerHTML= `<div class="form-check  me-2 col-lg-1">
    <input class="form-check-input" type="checkbox" value="${event}" id="${event}">
    <label class="form-check-label" for="${event}">
      ${event}
    </label>
  </div>`
    checkboxes.appendChild(boxes)
  })



// Filtro de checkbox
const boxes = document.querySelectorAll(".form-check-input")

boxes.forEach(caja => caja.addEventListener("click",filtrarContenido))

//Funcino para filtar todo 

function filtrarContenido(){
  let palabraEscrita = buscador.value.toLowerCase()
  let chequeados = []
  
  boxes.forEach(caja =>{
    if (caja.checked == true){
      chequeados.push(caja.value)
    }
  } )
  
  let eventosFiltrados = eventosFuturos
  
  eventosFiltrados = eventosFiltrados.filter((evento) => evento.name.toLowerCase().includes(palabraEscrita))
  if (chequeados.length > 0){
    eventosFiltrados = eventosFiltrados.filter(evento => chequeados.includes(evento.category))
  }
  
  
  crearTarjetas(eventosFiltrados)
  
  }



}))