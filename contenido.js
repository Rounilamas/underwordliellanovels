import { todo } from "./datos.js"

let volumen = document.querySelector(".volumenes")
let title = document.querySelector("title")
let titles = title.textContent.toLowerCase();
export let compa = titles;
console.log("titulo", titles)
let vistas; // variable para almacenar las visitas

if (Object.keys(todo).find(key => titles.toLowerCase().startsWith(key.toLowerCase()))) {
    let tituloKey = Object.keys(todo).find(key => titles.toLowerCase().startsWith(key.toLowerCase()));
    let titulo = todo[tituloKey];
    volumen.innerHTML = "";
    vistas = tituloKey; // asignar valor a la variable visitas
    crear(titulo);
}

export { vistas }; // exportar la variable visitas

function crear(card) {
    while (volumen.firstChild) {
        volumen.removeChild(volumen.firstChild);
    }
    card.reverse().forEach(i => {
        let div = `
        <figure class="figure">
           <img src="${i.imagen}" alt="">
           <h4>${i.volumen}</h4>
           <a href="${i.drive}" class="link">Descargar  Drive</a>
           <a href="${i.mega}" class="link">Descargar Mega </a>
        </figure>
        `
        volumen.insertAdjacentHTML("afterbegin", div)
        console.log(volumen)
    });
    let linea = document.createElement("div")
    linea.classList.add("line1")
    volumen.appendChild(linea)

}
let link = document.querySelectorAll("a")
console.log(link)
link.forEach(lin => {
    if (lin.href === "#" || lin.href.endsWith("#")) {
        lin.addEventListener("click", evt => {
            evt.preventDefault()
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Novela o link no disponible',
                showConfirmButton: false,
                timer: 3500,
                width: '20em'
            });
        })
    } else {
        lin.setAttribute("target", "_blank")
    }
})
