// Obtener los elementos del DOM
const steps = Array.from(document.querySelectorAll('.step'));
const prevBtns = Array.from(document.querySelectorAll('.prev-button'));
const nextBtns = Array.from(document.querySelectorAll('.next-button'));
const submitBtn = document.querySelector('.submit-button');
const form = document.querySelector('form');
const nombres = document.querySelector('#show-nombres');
const apellidos = document.querySelector('#show-apellidos');
const email = document.querySelector('#show-email');
const telefono = document.querySelector('#show-telefono');
const odontologo = document.querySelector('#show-odontologo');

// Ocultar todos los steps excepto el primero
steps.forEach((step, index) => {
  if (index !== 0) {
    step.style.display = 'none';
  }
});

// Función para mostrar el siguiente step
function showNextStep(currentStep) {
  const nextStep = currentStep.nextElementSibling;
  currentStep.style.visibility = 'hidden';
  nextStep.style.visibility = 'visible';
  nextStep.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Función para mostrar el step anterior
function showPrevStep(currentStep) {
  const prevStep = currentStep.previousElementSibling;
  currentStep.style.display = 'none';
  prevStep.style.display = 'block';
  prevStep.scrollIntoView({ behavior: 'smooth', block: 'start' });
}



// Agregar controladores de eventos a los botones prev y next
prevBtns.forEach(prevBtn => {
  prevBtn.addEventListener('click', event => {
    const currentStep = event.target.parentElement;
    showPrevStep(currentStep);
  });
});

nextBtns.forEach(nextBtn => {
  nextBtn.addEventListener('click', event => {
    const currentStep = event.target.parentElement;
    showNextStep(currentStep);
  });
});
const nombresInput = document.getElementById('nombres');
const apellidosInput = document.getElementById('apellidos');
const emailInput = document.getElementById('email');
const telefonoInput = document.getElementById('telefono');
const odontologoInput = document.getElementById('odontologo');

// Agregar un controlador de eventos al formulario para guardar los valores de los campos
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

  // Obtener los valores de los campos del formulario
  const nombresValue = nombresInput.value;
  const apellidosValue = apellidosInput.value;
  const emailValue = emailInput.value;
  const telefonoValue = telefonoInput.value;
  const odontologoValue = odontologoInput.value;

  // Actualizar los valores en la confirmación
  document.querySelector('#show-nombres').textContent = nombresValue;
  document.querySelector('#show-apellidos').textContent = apellidosValue;
  document.querySelector('#show-email').textContent = emailValue;
  document.querySelector('#show-telefono').textContent = telefonoValue;
  document.querySelector('#show-odontologo').textContent = odontologoValue;
});

// Agregar controlador de eventos al formulario para generar el PDF al enviar
form.addEventListener('submit', function (event) {
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
  doc.save('confirmacion.pdf');
});
