function ejecutarOpcion() {
  // Obtener valor del select
  let opcion = document.getElementById("opciones").value;
  let mensaje = document.getElementById("mensaje");

  // Limpiar clases previas
  mensaje.className = "";

  // Evaluar con switch
  switch (opcion) {
    case "insertar":
      mensaje.textContent = "✅ Seleccionó INSERTAR";
      mensaje.classList.add("insertar");
      break;
    case "eliminar":
      mensaje.textContent = "🗑️ Seleccionó ELIMINAR";
      mensaje.classList.add("eliminar");
      break;
    case "actualizar":
      mensaje.textContent = "✏️ Seleccionó ACTUALIZAR";
      mensaje.classList.add("actualizar");
      break;
    case "listar":
      mensaje.textContent = "📋 Seleccionó LISTAR";
      mensaje.classList.add("listar");
      break;
    default:
      mensaje.textContent = "⚠️ No ha seleccionado ninguna opción";
      mensaje.classList.add("vacio");
      break;
  }
}
