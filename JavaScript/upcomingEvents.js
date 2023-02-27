/**Generador de tarjetas */

const hoy = new Date(data.currentDate)

const contenedorTarjetas = document.querySelector('#contenedorTarjetas')

let tarjetas = ''


for (const event of data.events) {
    let fecha = new Date(event.date)
    if(fecha > hoy){
     tarjetas += `<div class="card mt-5 me-3" style="width: 18rem;">
    <img src="${event.image}" class="card-img-top img-card" alt="evento">
    <div class="card-body">
      <h5 class="card-title">${event.name}</h5>
      <p class="card-text">${event.description}</p>
      <p class> Date: ${event.date}</p>
    </div>
    <div class="card-footer d-flex justify-content-between">
      <p class="mt-2">Price: ${event.price}</p>
      <a href="../details.html" class="btn btn-primary">See more</a>
    </div>
  </div>`
}
}

contenedorTarjetas.innerHTML = tarjetas