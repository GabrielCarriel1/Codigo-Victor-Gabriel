
document.querySelector(".btn-secondary").addEventListener("click", function () {
    // Abrir el modal cuando se hace clic en el botón
    const modal = new bootstrap.Modal(document.getElementById("modalEquipos"));
    modal.show();
  
    const listaEquiposModal = document.getElementById("equipos-registrados-modal");
    listaEquiposModal.innerHTML = "";
  
    const equiposRegistrados = JSON.parse(localStorage.getItem("equipos")) || [];
    equiposRegistrados.forEach(function (equipo, index) {
      const nuevoEquipoItem = document.createElement("li");
      nuevoEquipoItem.className =
        "list-group-item d-flex justify-content-between align-items-center";
  
      const equipoInfo = document.createElement("span");
      equipoInfo.textContent = equipo.nombre;
  
      const imagenEquipo = document.createElement("img");
      imagenEquipo.src = equipo.imagen;
      imagenEquipo.alt = "Escudo del Equipo";
      imagenEquipo.style.maxHeight = "50px";
      imagenEquipo.style.borderRadius = "50%";
  
      // Agregar botones de editar y eliminar en el modal
      const botonesContainer = document.createElement("div");
      botonesContainer.className = "d-flex";
  
      const editarBoton = document.createElement("button");
      editarBoton.className = "btn btn-sm btn-warning mx-1 editar-equipo";
      editarBoton.textContent = "Editar";
      editarBoton.dataset.index = index;
  
      const eliminarBoton = document.createElement("button");
      eliminarBoton.className = "btn btn-sm btn-danger mx-1 eliminar-equipo";
      eliminarBoton.textContent = "Eliminar";
      eliminarBoton.dataset.index = index;
  
      botonesContainer.appendChild(editarBoton);
      botonesContainer.appendChild(eliminarBoton);
  
      nuevoEquipoItem.appendChild(equipoInfo);
      nuevoEquipoItem.appendChild(imagenEquipo);
      nuevoEquipoItem.appendChild(botonesContainer);
  
      listaEquiposModal.appendChild(nuevoEquipoItem);
    });
  
    function editarEquipo(index) {
      const equiposRegistrados =
        JSON.parse(localStorage.getItem("equipos")) || [];
      const equipo = equiposRegistrados[index];
  
      const nuevoNombre = prompt(
        "Ingrese el nuevo nombre del equipo:",
        equipo.nombre
      );
      if (nuevoNombre !== null) {
        equipo.nombre = nuevoNombre;
  
        equiposRegistrados[index] = equipo;
        localStorage.setItem("equipos", JSON.stringify(equiposRegistrados));
  
        actualizarListaEquipos();
      }
    }
  
    function eliminarEquipo(index) {
      const equiposRegistrados =
      JSON.parse(localStorage.getItem("equipos")) || [];
    const equipo = equiposRegistrados[index];
    const confirmacion = confirm(
      `¿Estás seguro de que deseas eliminar el equipo "${equipo.nombre}"?`
    );
  
    if (confirmacion) {
      equiposRegistrados.splice(index, 1);
      localStorage.setItem("equipos", JSON.stringify(equiposRegistrados));
      actualizarListaEquipos();
      alert(`Equipo "${equipo.nombre}" eliminado correctamente.`);
    }
  
      const equipoItemModal = listaEquiposModal.querySelector(
        `[data-index="${index}"]`
      );
      if (equipoItemModal) {
        equipoItemModal.parentNode.removeChild(equipoItemModal);
      }
      actualizarListaEquipos();
    }
  
    // ... Manejadores de eventos para los botones de editar y eliminar ...
      // Agregar manejadores de eventos para los botones de editar y eliminar en el modal
      document.querySelectorAll(".editar-equipo").forEach(function (editarBoton) {
        editarBoton.addEventListener("click", function () {
          const index = parseInt(editarBoton.dataset.index);
          editarEquipo(index);
        });
      });
      document.querySelectorAll(".eliminar-equipo").forEach(function (eliminarBoton) {
        eliminarBoton.addEventListener("click", function () {
          const index = parseInt(eliminarBoton.dataset.index);
          eliminarEquipo(index);
      
          const equipoItemModal = listaEquiposModal.querySelector(
            `[data-index="${index}"]`
          );
          if (equipoItemModal) {
            equipoItemModal.parentNode.removeChild(equipoItemModal); // Corrección aquí
          }
          actualizarListaEquipos();
          // ...
        });
      })
  
    })