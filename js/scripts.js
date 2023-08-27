var nClientes=0
var clientes=[]
function guardarDatos(){
    let persona={
        nombre: document.getElementById("nombres").value,
        apellido: document.getElementById("apellidos").value,
        cedula: document.getElementById("cedula").value,
        fecha: document.getElementById("fecha").value,
        correo: document.getElementById("correo").value
    }
    clientes.push(persona)
    nClientes++
    guardarStorage()
 };

function guardarStorage(){
    for (var i = 0; i < nClientes-1; i++) {
        localStorage.setItem("cliente"+i, JSON.stringify(clientes[i]))
    }   
}
 function mostrarTabla(){
    // Obtener la referencia del elemento body
    var body = document.getElementsByTagName("body")[0];
  
    // Crea un elemento <table> y un elemento <tbody>
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");
  
    // Crea las celdas
    for (var i = 0; i < nClientes; i++) {
      // Crea las hileras de la tabla
      var hilera = document.createElement("tr");
  
      
        // Crea un elemento <td> y un nodo de texto, haz que el nodo de
        // texto sea el contenido de <td>, ubica el elemento <td> al final
        // de la hilera de la tabla
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(
          clientes[i].nombre + "|" + clientes[i].apellido + "|" + clientes[i].cedula + "|" + clientes[i].fecha + "|" + clientes[i].correo,
        );
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
      
  
      // agrega la hilera al final de la tabla (al final del elemento tblbody)
      tblBody.appendChild(hilera);
    }
  
    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";
    tabla.setAttribute("border", "2");
  }

  