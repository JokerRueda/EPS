//LocalStorage Persona


const crearPersona = () => {
  const nombre = document.getElementById('nombres').value;
  const apellido = document.getElementById('apellidos').value;
  const cedula = document.getElementById('cedula').value;
  const fecha = document.getElementById('fecha').value;
  const correo = document.getElementById('correo').value;

  const persona = {
      nombre,
      apellido,
      cedula,
      fecha,
      correo,
  };

  const listaPersona = JSON.parse(
      localStorage.getItem('listaPersona')
  );

  listaPersona.push(persona);

  localStorage.setItem(
      'listaPersona',
      JSON.stringify(listaPersona)
  );
};


const crearTablaPersona = () => {
  listaPersonaUI.innerHTML = '';
  if (listaPersona.length === 0) {
      listaPersonaUI.innerHTML = `
      <tr>
        <td colspan="4" style="text-align: center;">No hay personas registradas</td>
      </tr>
    `;
    return;
  }
  listaPersona.forEach((persona) => {
      listaPersonaUI.innerHTML += `
      <tr>
        <th scope="row"></th>
        <td>${persona.nombre}</td>
        <td>${persona.apellido}</td>
        <td>${persona.cedula}</td>
        <td>${persona.fecha}</td>
        <td>${persona.correo}</td>
      </tr>
    `;
  });
};

//LocalStorage Cita

const crearCita = () => {
  const fecha = document.getElementById('fecha').value;
  const medico = document.getElementById('medico').value;
  const consultorio = document.getElementById('consultorio').value;
  const cede = document.getElementById('cede').value;
  const paciente = document.getElementById('paciente').value;
  const tipoEsp = document.getElementById('tipoEsp').value;


  const cita = {
    fecha,
    medico,
    consultorio,
    cede,
    paciente,
    tipoEsp,
  };

  const listaCita = JSON.parse(localStorage.getItem('listaCita'));
  listaCita.push(cita);
  localStorage.setItem('listaCita', JSON.stringify(listaCita));
  window.location.replace('FormCitas.html');
};


const crearTablaCita = () => {
  listaCitaUI.innerHTML = '';
  if (listaCita.length === 0) {
    listaCitaUI.innerHTML = `
      <tr>
        <td colspan="4" style="text-align: center;">No hay citas registradas</td>
      </tr>
    `;
    return;
  }
  listaCita.forEach((cita) => {
    listaCitaUI.innerHTML += `
      <tr>
        <th scope="row"></th>
        <td>${cita.fecha}</td>
        <td>${cita.medico}</td>
        <td>${cita.consultorio}</td>
        <td>${cita.cede}</td>
        <td>${cita.paciente}</td>
        <td>${cita.tipoEsp}</td>
      </tr>
    `;
  });
};


