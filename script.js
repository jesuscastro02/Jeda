
// Obtiene todos los elementos del slider
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Muestra el siguiente o el anterior slide según el botón presionado
function moveSlide(direction) {
  currentIndex += direction;

  // Si llegamos al final, vuelve al principio
  if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  // Si llegamos al principio, va al último slide
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  }

  // Mueve el slider para mostrar el slide correcto
  updateSliderPosition();
}

// Cambia la posición del slider
function updateSliderPosition() {
  const offset = -currentIndex * 100; // Calcula la posición de desplazamiento
  document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

// Muestra el siguiente slide cada 3 segundos
setInterval(() => moveSlide(1), 3000);


/*ocultar y mostrar contraseña*/ 
document.getElementById('togglePassword').addEventListener('click', function () {
  const passwordInput = document.getElementById('password');
  const icon = this;

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    icon.classList.remove('fa-eye');
    icon.classList.add('fa-eye-slash');
  } else {
    passwordInput.type = 'password';
    icon.classList.remove('fa-eye-slash');
    icon.classList.add('fa-eye');
  }
});

