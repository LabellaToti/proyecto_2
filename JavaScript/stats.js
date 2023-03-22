const Todo = document.getElementById("todo")
let hoy = new Date(data.currentDate)


// Calculo de porcentajes de asistencia

const attendancePorcentage = []
const capacity = []
// eventosPasados.forEach(eventoPasado => {
//     porcentage = eventoPasado.assistance / eventoPasado.capacity * 100
//     attendancePorcentage.push (porcentage)
//     eventoPasado.porcentage = porcentage     
//    capacity.push(eventoPasado.capacity)
// });







//funciones para ordenar los array de numeros
function getMaxOfArray(numArray) {
   return Math.max.apply(null, numArray);
 }

 function getMinOfArray(numArray) {
    return Math.min.apply(null, numArray);
  }





//Hago el llamado de los elementos HTML de la tabla donde quiero tener los datos y los hago tamplate string
const eventoMasAsistido = document.getElementById("eventoPopular")
const eventoMenosAsistido = document.getElementById("eventoMenosPopular")
const eventoMasCapacidad = document.getElementById("eventoMayorCapacidad")

//filtro eventos por categoria

let categorias = new Set()


// Funcion para calcular las estadisticas

function calcularEstadisticas(array){
  let revenue = 0
  let porcentajeDeAsistencia = 0
  let ganancias = []
  let asistencia = []
   porcentajes = []
  array.forEach(objeto => {
    if(objeto.date>hoy){
     revenue = objeto.estimate * objeto.price
      porcentajeDeAsistencia = objeto.estimate / objeto.capacity * 100 
     }
     else{
      revenue = objeto.assistance * objeto.price
      porcentajeDeAsistencia = objeto.assistance / objeto.capacity * 100  
     } 


      ganancias.push(revenue)
     asistencia.push(porcentajeDeAsistencia)
     porcentajes.push(objeto.porcentage)
  })
    gananciaTotal = ganancias.reduce((a,b) => a+b,0)
    asistenciaTotal = porcentajes.reduce((a,b) => a+b,0)
    asistenciaTotal = asistenciaTotal/ porcentajes.length
    
    let resumen = {
      categoria : array[0].category,
      revenueTotal : gananciaTotal,
      PorcentajeAsistencia: asistenciaTotal
        }
        return resumen

}




let datos = []
let resumenResultados = []

function simplificadorEventos(arrayEventos) {
    datos = []
    resumenResultados = []
    categorias.forEach(element => {
        arraySimplificado = arrayEventos.filter((evento) => evento.category == element)  
        datos.push(arraySimplificado)
      });
      
      
      datos.forEach(element => {
        let calculoPrueba = calcularEstadisticas(element)
         resumenResultados.push(calculoPrueba) 
    });
    return resumenResultados
    
}




// creo la funcion crear filas 

const pastStats = document.getElementById("pastStats")

function crearFilas(eventos){
      eventos.forEach(event => {
         filas = document.createElement("tr")
        filas.innerHTML = `<tr>
        <td class="text-white">${event.categoria}</td>
        <td class="text-white">${event.revenueTotal}</td>
        <td class="text-white">${event.PorcentajeAsistencia.toFixed(2)} %</td>
    </tr>`
        pastStats.appendChild(filas)
        
      }) 
  };

 

// Trabajo para UpcomingEvents

function calcularEstadisticasFuturas(array){
  let revenueF = 0
  let porcentajeDeAsistenciaF = 0
  let gananciasF = []
  let asistenciaF = []
  let porcentajesF = []


  array.forEach(objeto => {
     revenueF = objeto.estimate * objeto.price
      porcentajeDeAsistenciaF = objeto.estimate / objeto.capacity * 100 
      console.log(porcentajeDeAsistenciaF)
    gananciasF.push(revenueF)
     asistenciaF.push(porcentajeDeAsistenciaF)
    })
    
    gananciaTotalF = gananciasF.reduce((a,b) => a+b,0)
    asistenciaTotalF = asistenciaF.reduce((a,b) => a+b,0)
    asistenciaTotalF = asistenciaTotalF/ asistenciaF.length
    let resumenFuturo = {
      categoria : array[0].category,
      revenueTotalF : gananciaTotalF,
      PorcentajeAsistenciaF: asistenciaTotalF
        }
        return resumenFuturo
      
}

function simplificadorEventosFuturos(arrayEventos) {
  datos = []
  resumenResultadosFuturos = []
  

  categorias.forEach(element => {
      arraySimplificado = arrayEventos.filter((evento) => evento.category == element)  
      if(arraySimplificado.length != 0){
        datos.push(arraySimplificado)
      }
    });
   console.log(datos)
    
    datos.forEach(element => {
      let calculoPrueba = calcularEstadisticasFuturas(element)
       resumenResultadosFuturos.push(calculoPrueba) 
  });
  
  return resumenResultadosFuturos
  
}


const upcomingtStats = document.getElementById("upcomingStats")

function crearFilasFuturas(eventos){
      eventos.forEach(event => {
         filas = document.createElement("tr")
        filas.innerHTML = `<tr>
        <td class= " text-white">${event.categoria}</td>
        <td class= " text-white">${event.revenueTotalF}</td>
        <td class= " text-white">${event.PorcentajeAsistenciaF.toFixed(2)} %</td>
    </tr>`
        upcomingStats.appendChild(filas)
        
      }) 
  };


  // Hago el Fetch

fetch('https://mindhub-xj03.onrender.com/api/amazing').then(response => response.json().then(datosApi=>
{console.log(datosApi);
    console.log(datosApi.events[4]);
    let hoy = new Date(datosApi.currentDate)
    console.log(hoy)
    let eventosPasados = datosApi.events.filter((evento)=> new Date(evento.date) < hoy)
    let eventosFuturos = datosApi.events.filter((evento)=> new Date(evento.date) > hoy)
    console.log(eventosFuturos)
  


    // Calculo de porcentajes de asistencia

const attendancePorcentage = []
const capacity = []
eventosPasados.forEach(eventoPasado => {
    porcentage = eventoPasado.assistance / eventoPasado.capacity * 100
    attendancePorcentage.push (porcentage)
    eventoPasado.porcentage = porcentage     
   capacity.push(eventoPasado.capacity)
});
// Ordeno de mayor a menos los porcentajes y la capacidad
const maxPorcentage = getMaxOfArray(attendancePorcentage)
const minPorcentage = getMinOfArray(attendancePorcentage)
const maxCapacity = getMaxOfArray(capacity)


//encuentro el evento con mayor y menor porcentaje de asistencia

const eventoMayorCapacidad = eventosPasados.find((evento)=> evento.capacity == maxCapacity )  
const eventoPopular = eventosPasados.find((evento)=> evento.porcentage == maxPorcentage)
const eventoMenosPopular = eventosPasados.find ((evento)=> evento.porcentage == minPorcentage )

// imprimo la primera fila de la tabla

eventoMasAsistido.innerHTML = `<td> ${eventoPopular.name} (${eventoPopular.porcentage}) </td>`
eventoMenosAsistido.innerHTML = `<td> ${eventoMenosPopular.name} (${eventoMenosPopular.porcentage}) </td>`
eventoMasCapacidad.innerHTML = `<td> ${eventoMayorCapacidad.name} (${eventoMayorCapacidad.capacity}) </td>`


//Defino el array de categorias
    datosApi.events.forEach( event => categorias.add(event.category) )
    console.log(categorias)


simplificadorEventos(eventosPasados)
crearFilas(resumenResultados)
console.log(calcularEstadisticas(eventosPasados))

simplificadorEventosFuturos(eventosFuturos)
crearFilasFuturas(resumenResultadosFuturos)
console.log(calcularEstadisticasFuturas(eventosFuturos))

}))