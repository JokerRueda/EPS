
function guardarDatos(){
    let persona={
        nombre: document.getElementById("nombres").value,
    apellido: document.getElementById("apellidos").value,
    cedula: document.getElementById("cedula").value,
    telefono: document.getElementById("telefono").value
    }
    
    localStorage.setItem("cliente", JSON.stringify(persona))
 };