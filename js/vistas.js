  //Fetch de vista de seccion header
fetch('../header.html')
  .then(response => response.text())
  .then(data => {
    document.querySelector('#header').innerHTML = data;
  });

//Fetch de vista de seccion header
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


    // Fetch de API de BikeIndex para bicicletas.html
  fetch('https://bikeindex.org:443/api/v3/bikes_search?page=1&per_page=3')
  .then(response => response.json())
  .then(data => {
    const bikeList = document.getElementById("bici-list");
    data.bikes.forEach(bike => {
      //const bikeName = document.createElement('p');
      const bikeName = document.createElement('h1');
      bikeName.innerHTML = `<div class="row"><div class="col-md-6"><div class="box_main"><div class="image_2"><img src="images/img-2.png"></div></div></div><div class="col-md-6"><h1 class="cycles_text">${bike.title}</h1><p class="lorem_text">Rodadas para todo terreno, en montaña y ciudad</p><div class="btn_main"><h4 class="price_text">Precio <span style=" color: #f7c17b">$</span> <span style=" color: #325662">200</span></h4></div></div></div>`;
      bikeList.appendChild(bikeName);
    });
  })
  .catch(error => console.error(error));

  // //Fetch de array (arreglo) JS vainilla para index.html
const arrayHTML = ['<div class="cycle_section_2 layout_padding"><div class="row"><div class="col-md-6"><div class="box_main"><div class="image_2"><img src="images/img-2.png"></div></div></div><div class="col-md-6"><h1 class="cycles_text">Mejor</h1><p class="lorem_text">Rodadas para todo terreno, en montaña y ciudad</p><div class="btn_main"><h4 class="price_text">Precio <span style=" color: #f7c17b">$</span> <span style=" color: #325662">200</span></h4></div></div></div></div>', '<div class="cycle_section_3 layout_padding"> <div class="row"> <div class="col-md-6"> <h1 class="cycles_text">Nueva</h1> <p class="lorem_text">Un cambio de camino y ahora un cambio de cyclo, nueva para tus nuevas ciudades</p> <div class="btn_main"> <h4 class="price_text">Precio <span style=" color: #f7c17b">$</span> <span style=" color: #325662">200</span></h4> </div> </div> <div class="col-md-6"> <div class="box_main_3"> <h6 class="number_text_2">02</h6> <div class="image_2"><img src="images/img-3.png"></div> </div> </div> </div> </div>', ' <div class="cycle_section_2 layout_padding"> <div class="row"> <div class="col-md-6"> <div class="box_main_3"> <h6 class="number_text_2">03</h6> <div class="image_2"><img src="images/img-4.png"></div> </div> </div> <div class="col-md-6"> <h1 class="cycles_text">Clásico <br>Cyclo</h1> <p class="lorem_text">Donde siempre te mueves, se moverá cyclo</p> <div class="btn_main"> <h4 class="price_text">Precio <span style=" color: #f7c17b">$</span> <span style=" color: #325662">200</span></h4> </div> </div> </div> </div>'];

// Seleccionamos el contenedor donde queremos agregar los elementos
const contenedor = document.querySelector(".contenedorp");

// Iteramos sobre el array de cadenas HTML y creamos un nuevo div por cada una
arrayHTML.forEach(html => {
  const div = document.createElement("div"); // Creamos un nuevo elemento <div>
  div.innerHTML = html; // Añadimos el HTML al elemento <div>
  contenedor.appendChild(div); // Agregamos el elemento <div> al contenedor
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