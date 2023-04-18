import { compa, vistas } from "./contenido.js";
import { todo } from "./datos.js";

let data = document.querySelector(".visitados-card")
export let ele = data
console.log("data", data)

console.log("coma", compa)
let local;
if (compa.toLowerCase() == "underWord liella novels".toLowerCase()) {
  console.log("estamos en el index")

  let storedTodo = JSON.parse(localStorage.getItem("todo")) || {};
  local = storedTodo;
  // Guardar los datos actualizados en localStorage

} else {
  let tituloKey = Object.keys(todo).find(key => vistas.toLowerCase().startsWith(key.toLowerCase()));
  document.addEventListener("DOMContentLoaded", () => {
    // Obtener los datos del objeto almacenado en localStorage
    let storedTodo = JSON.parse(localStorage.getItem("todo")) || {};
    // Actualizar los datos de todo en base a los datos almacenados en localStorage
    Object.entries(storedTodo).forEach(([key, storedItems]) => {
      let items = todo[key];
      if (items) {
        for (let i = 0; i < items.length; i++) {
          let item = items[i];
          let storedItem = storedItems.find(s => s.id === item.id);
          if (storedItem) {
            item.visitas = storedItem.visitas;
          }
        }
      }
    });
    // Incrementar visitas en los elementos correspondientes
    if (tituloKey) {
      let items = todo[tituloKey];
      for (let i = 0; i < items.length; i++) {
        items[i].visitas += 1;
      }
    }
    // Guardar los datos actualizados en localStorage
    localStorage.setItem("todo", JSON.stringify(todo));
    local = localStorage.setItem("todo", JSON.stringify(todo));
  });
}

export { local }

console.log("todo", todo);

