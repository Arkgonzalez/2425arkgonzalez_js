// Función para cambiar el color de fondo de la página (se usa en la pagina gastronomia)
function cambiarColorFondo(color) {
    document.body.style.backgroundColor = color;
}

// Función para mostrar un mensaje de alerta en la página de contacto 
function mostrarMensajeContacto() {
    alert("Gracias por ponerte en contacto con nosotros. Te responderemos pronto.");
}

// Función para validar el formulario de contacto (se usa en la pagina contactos)
function validarFormulario() {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    if (nombre === "" || email === "") {
        alert("Por favor, completa todos los campos.");
        return false;
    }
    alert("Formulario enviado correctamente.");
    return true;
}

// Función para mostrar u ocultar un contenido en la página de eventos (se usa en la pagina eventos)
function mostrarEventos() {
    const eventos = document.getElementById("eventosLista");
    if (eventos.style.display === "none") {
        eventos.style.display = "block";
    } else {
        eventos.style.display = "none";
    }
}



	