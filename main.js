import { ele, local } from "./visitas.js";

console.log("datoss,ele", ele);
console.log("local", local)

let elementos = Object.values(local).map(item => item[0]); // obtiene todos los elementos
let elementosConVisitas = elementos.map(item => { return { elemento: item, visitas: item.visitas } }); // crea un nuevo arreglo que contiene cada elemento y su cantidad de visitas
let mejores = elementosConVisitas.sort((a, b) => b.visitas - a.visitas).slice(0, 6); // ordena los elementos por cantidad de visitas y obtiene los primeros 4
let element = mejores.map(item => item.elemento);
let imagenes = element.map(item => item.imagen);
console.log("imagen", imagenes)

visitados(element)
console.log("mejores", mejores);

function visitados(visit) {
  ele.innerHTML = ""
  visit.forEach(it => {
    let div = `
      <img src="${it.imagen}" class="visit">      
      `
    ele.insertAdjacentHTML("afterbegin", div)
    console.log("data f", ele)
  })
}


