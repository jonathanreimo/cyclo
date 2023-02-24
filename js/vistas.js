fetch('../header.html')
  .then(response => response.text())
  .then(data => {
    document.querySelector('#header').innerHTML = data;
  });

  fetch('../footer.html')
  .then(response => response.text())
  .then(data => {
    document.querySelector('#footer').innerHTML = data;
  });

  //Efecto de transicion
	document.addEventListener('DOMContentLoaded', function() {
		document.body.style.opacity = 1;
    /* Copy año */
    document.getElementById("year").innerHTML = new Date().getFullYear();
	  });

// Seleccionar el formulario y agrega un evento de "submit" a él
const formulario = document.querySelector('#mi-formulario');
formulario.addEventListener('submit', (evento) => {
  // Detener el comportamiento predeterminado de envío del formulario
  evento.preventDefault();
  // Validar los campos del formulario
  if (formulario.checkValidity() === false) {
    evento.stopPropagation();
    formulario.classList.add('was-validated');
  } else {
    // Enviar el formulario

    const form = document.getElementById("mi-formulario");
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Detener el envío del formulario
      const formData = new FormData(form);
      const xhr = new XMLHttpRequest();
      xhr.open("POST", form.action);
      xhr.send(formData);
      sendConfirmation(formData.get("email")); // Enviar la confirmación por correo electrónico
      form.reset();
    });

    function sendConfirmation(email) {
      const confirmationMessage = "Hola,\n\nGracias por contactarnos. Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto.\n\nSaludos cordiales,\nEl equipo de Cyclo";
      const confirmationSubject = "Confirmación de recepción de mensaje";
      const mailtoLink = "mailto:" + email + "?subject=" + confirmationSubject + "&body=" + encodeURIComponent(confirmationMessage);
      window.location.href = mailtoLink;
    }

    const alerta = document.createElement('div');
    alerta.classList.add('alert', 'alert-success', 'fade', 'show');
    alerta.innerHTML = '¡Tu mensaje ha sido enviado con éxito!';
    formulario.parentNode.insertBefore(alerta, formulario.nextSibling);
    setTimeout(() => {
      alerta.remove();
    }, 3000);
  }
});

 //Nav funciones
	function openNav() {
		document.getElementById("mySidenav").style.width = "250px";
		document.getElementById("main").style.marginLeft = "250px";
	};

	function closeNav() {
		document.getElementById("mySidenav").style.width = "0";
		document.getElementById("main").style.marginLeft = "0";

	};

	$("#main").click(function () {
		$("#navbarSupportedContent").toggleClass("nav-normal")
	});