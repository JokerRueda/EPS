var l = localStorage;
first_name.addEventListener("focusout", function() {
    l.setItem("fn", first_name.value);
  })

  last_name.addEventListener("focusout", function() {
    l.setItem("ln", last_name.value);
  })
  cedula.addEventListener("focusout", function() {
    l.setItem("ce", cedula.value);
  })

  fechaNac.addEventListener("focusout", function() {
    l.setItem("fe", fecha.value);
  })

  email.addEventListener("focusout", function() {
    l.setItem("em", email.value);
  })

  function guardar_localstorage(){

    
  }

  function recuperoValores() {
    first_name.value = l.getItem("fn");
    last_name.value = l.getItem("ln");
    cedula.value = l.getItem("ce");
    fechaNac.value = l.getItem("fe");
    email.value = l.getItem("em");
    
  }
  document.addEventListener("DOMContentLoaded", recuperoValores);