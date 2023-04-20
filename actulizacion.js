import { todo } from "./datos.js";

console.log("si esta funcionando el codifo")
function sizeOfObjectKey(obj, key) {
    return JSON.stringify(obj[key]).length;
}

let hasChanges = false;
function detectChanges(obj, initialSizes) {
    Object.keys(obj).forEach((key) => {
        let size = sizeOfObjectKey(obj, key);
        if (size !== initialSizes[key]) {
            hasChanges = true;
            console.log(todo[key])
            console.log(`Valor de key: ${key}`);
            Swal.fire({
                position: 'top-end',
                icon: 'info',
                title: `Actulizacion de la novela ${key}`,
                text:`${todo[key][todo[key].length - 1].volumen.toString()}`,
                showConfirmButton: false,
                timer: 3500,
                width: '20em'
            });
        }
    });
    return hasChanges;
}

function checkLocalStorage() {
    let initialSizes = {};
    let hasCopy = true;
    Object.keys(todo).forEach((key) => {
        if (!localStorage.getItem(`size-${key}`)) {
            hasCopy = false;
            return;
        }
        initialSizes[key] = parseInt(localStorage.getItem(`size-${key}`));
    });

    if (hasCopy) {
        let hasChanges = detectChanges(todo, initialSizes);
        if (hasChanges) {
            Object.keys(todo).forEach((key) => {
                let size = sizeOfObjectKey(todo, key);
                localStorage.setItem(`size-${key}`, size);
            });
        }
    } else {
        Object.keys(todo).forEach((key) => {
            let size = sizeOfObjectKey(todo, key);
            localStorage.setItem(`size-${key}`, size);
        });
    }
}

checkLocalStorage();
