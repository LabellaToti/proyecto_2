const queryString = location.search

const params = new URLSearchParams(queryString)

const id = params.get("id")

const eventoDetallado = data.events.find(event=> event._id == id)




const detailCard = document.querySelector('#detailCard')

detailCard.innerHTML = ` <div class="card mt-5 me-3" style="width: 18rem;">
<img src="${eventoDetallado.image}" class="card-img-top img-card" alt="evento">
<div class="card-body">
  <h5 class="card-title">${eventoDetallado.name}</h5>
  <p class="card-text">${eventoDetallado.description}</p>
  <p class> Date: ${eventoDetallado.date}</p>
</div>
<div class="card-footer d-flex justify-content-between">
  <p class="mt-2">Price: ${eventoDetallado.price}</p>
</div>
</div>
`
