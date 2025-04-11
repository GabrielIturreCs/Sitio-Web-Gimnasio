// =======================
// FORMULARIO DE CONTACTO
// =======================

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById("contact-form");
  const submitButton = document.getElementById('submit-button');
  const buttonText = document.getElementById('button-text');
  const loadingIcon = document.getElementById('loading-icon');
  const notificationSending = document.getElementById('notification-sending');
  const notificationSuccess = document.getElementById('notification-success');

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita envío automático

    // Mostrar icono de carga y deshabilitar botón
    loadingIcon.classList.remove('hidden');
    buttonText.textContent = 'Enviando...';
    submitButton.disabled = true;
    notificationSending.classList.remove('hidden');

    // Simular envío
    setTimeout(function() {
      notificationSending.classList.add('hidden');
      notificationSuccess.classList.remove('hidden');
      buttonText.textContent = 'Enviado con éxito 🎉';

      // Envío real si fuera necesario
      form.submit();
    }, 2000);
  });

  // =======================
  // ESTRELLAS ANIMADAS
  // =======================
  const starsContainer = document.querySelector('.stars');
  if (starsContainer) {
    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.left = `${Math.random() * 100}vw`;
      star.style.animationDuration = `${Math.random() * 5 + 2}s`;
      star.style.animationDelay = `${Math.random() * 3}s`;
      starsContainer.appendChild(star);
    }
  }

  // =======================
  // AOS ANIMACIONES
  // =======================
  AOS.init({
    offset: 300,
    duration: 1400,
  });

  // =======================
  // MODO OSCURO / CLARO
  // =======================
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const rootElement = document.documentElement;

  // Aplicar tema guardado al cargar
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'light') {
 rootElement.classList.add('light-mode');
    themeIcon.classList.replace('bx-moon', 'bx-sun');
  } else {
    rootElement.classList.remove('light-mode');
    themeIcon.classList.replace('bx-sun', 'bx-moon');
  }

  // Cambiar tema al hacer clic
  themeToggle.addEventListener('click', () => {
    const isLightMode = rootElement.classList.toggle('light-mode');

    if (isLightMode) {
      themeIcon.classList.replace('bx-moon', 'bx-sun');
      localStorage.setItem('theme', 'light');
    } else {
      themeIcon.classList.replace('bx-sun', 'bx-moon');
      localStorage.setItem('theme', 'dark');
    }
  });
});