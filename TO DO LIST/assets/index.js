//
let tareas = [
{id: 1,descripcion: "comprar comida", completado: false},
{id: 2,descripcion: "hacer ejercicio", completado: false},
{id: 3,descripcion: "leer un libro", completado: false},
];


let contadorId = 4;

// elementos 

const input = document.getElementById("items");
const boton =  document.getElementById("Button");
const lista = document.querySelector("#lista-tareas");
const totalTareas = document.getElementById("total-tareas");
const tareasCompletadas = document.getElementById("tareas-completadas");

// renderizar tareas
function renderizar() {
    lista.innerHTML = "";

    tareas.forEach(tarea => {
        lista.innerHTML += `
  <tr>
    <td>${tarea.id}</td>
    
    <td class="${tarea.completado ? 'tarea-completada' : ''}">
      ${tarea.descripcion}
    </td>
    
    <td>
      <input type="checkbox" 
        ${tarea.completado ? "checked" : ""} 
        onchange="toggleTarea(${tarea.id})">
    </td>

    <td>
      <span class="eliminar" onclick="eliminarTarea(${tarea.id})">❌</span>
    </td>
  </tr>
`;

});

   actualizarResumen();

}

// agregar tarea

boton.addEventListener("click", () => {
    if (input.value.trim() === "") 
        return;


    tareas.push({
        id: contadorId++,
        descripcion: input.value,
        completado : false
    });

    input.value = "";
    renderizar();
});


// eliminar tarea
function eliminarTarea(id) {
  tareas = tareas.filter((tarea) => tarea.id !== id);
  renderizar();
}

// cambiar estado
function toggleTarea(id) {
  const tarea = tareas.find((tarea) => tarea.id === id);
  tarea.completado = !tarea.completado;
  renderizar();
}

// actualizar resumen
function actualizarResumen() {
  totalTareas.textContent = tareas.length;

 const completadas = tareas.filter((tarea) => tarea.completado === true).length;
  tareasCompletadas.textContent = completadas;
}
renderizar();
