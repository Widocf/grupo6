//seleccionar elementos y almacenarlos en variables

const formWizard = document.querySelector('#form-wizard');
const nextButtons = document.querySelectorAll('.next-button');
const prevButtons = document.querySelectorAll('.prev-button');

let pasoActual = 0;

//mostrar y ocultar los pasos

function showStep(stepIndex) {
const fieldsets = document.querySelectorAll('fieldset');
fieldsets.forEach((fieldset, index) => {
if (index === stepIndex) {
fieldset.style.display = 'block';
} else {
fieldset.style.display = 'none';
}
});
}

// ojala muestre el resumen
function actualizarConfirmacion() {
document.querySelector('#show-nombres').textContent = document.querySelector('#nombres').value;
document.querySelector('#show-apellidos').textContent = document.querySelector('#apellidos').value;
document.querySelector('#show-email').textContent = document.querySelector('#email').value;
document.querySelector('#show-telefono').textContent = document.querySelector('#telefono').value;
document.querySelector('#show-odontologo').textContent = document.querySelector('#odontologo').value;
document.querySelector('#show-date').textContent = document.querySelector('#date').value;
}

nextButtons.forEach((button) => {
    button.addEventListener('click', () => {
      pasoActual++;
      // Añade la clase "slide" al fieldset actual
      formWizard.querySelectorAll('fieldset')[pasoActual].classList.add('slide');
      showStep(pasoActual);
      if (pasoActual === 3) {
        actualizarConfirmacion();
      }
    });
  });
  
  prevButtons.forEach((button) => {
    button.addEventListener('click', () => {
      // Añade la clase "slide reverse" al fieldset actual
      formWizard.querySelectorAll('fieldset')[pasoActual].classList.add('slide', 'reverse');
      pasoActual--;
      showStep(pasoActual);
    });
  });

showStep(pasoActual);
// Obtener el formulario y los campos de entrada
const form = document.getElementById("form-wizard");
const nombres = document.getElementById("show-nombres");
const apellidos = document.getElementById("show-apellidos");
const email = document.getElementById("show-email");
const telefono = document.getElementById("show-telefono");
const odontologo = document.getElementById("show-odontologo");

// Agregar un controlador de eventos al formulario para generar el PDF al enviar
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

  // Obtener los valores del formulario
  const firstName = nombres.innerText;
  const lastName = apellidos.innerText;
  const emailAddress = email.innerText;
  const phone = telefono.innerText;
  const dentist = odontologo.innerText;

  // Crear un nuevo objeto jsPDF
  const doc = new jsPDF();

  // Agregar contenido al PDF
  doc.text(`Nombre: ${firstName}`, 10, 10);
  doc.text(`Apellido: ${lastName}`, 10, 20);
  doc.text(`Email: ${emailAddress}`, 10, 30);
  doc.text(`Telefono: ${phone}`, 10, 40);
  doc.text(`Odontologo: ${dentist}`, 10, 50);

  // Descargar el archivo PDF
  doc.save("confirmacion.pdf");
});