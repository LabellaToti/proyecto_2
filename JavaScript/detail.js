
const detailCard = document.querySelector('#detailCard')
const queryString = location.search

    const params = new URLSearchParams(queryString)
    
    const id = params.get("id")
    

fetch('https://mindhub-xj03.onrender.com/api/amazing').then(response => response.json().then(datosApi=>
{
    console.log(datosApi.events[4]);
    
    const eventoDetallado = datosApi.events.find(event=> event._id == id)

   
    
    detailCard.innerHTML = ` <div class="card mt-5 me-3" style="width: 38rem;">
    <img src="${eventoDetallado.image}" class="card-img-top img-card" alt="evento">
    <div class="card-body">
      <h5 class="card-title">${eventoDetallado.name}</h5>
      <p class="card-text">${eventoDetallado.description}</p>
      <p class="card-text">Place: ${eventoDetallado.place}</p>
      <p class> Date: ${eventoDetallado.date}</p>
    </div>
    <div class="card-footer d-flex justify-content-between">
      <p class="mt-2">Price: ${eventoDetallado.price}</p>
    </div>
    </div>
    `

}))