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