document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById('menu-button');
  const menu = document.getElementById('menu');

  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true' || false;
    menuButton.setAttribute('aria-expanded', !expanded);
    menu.hidden = expanded;
  });

  document.dispatchEvent(new Event("scroll"));
});


function mostrarInfo(area) {
  const info = {
    educacion: `
      <h3>Educación</h3>
      <p>El software permite clases en línea, plataformas interactivas y aprendizaje personalizado como Moodle o Google Classroom.</p>
    `,
    medicina: `
      <h3>Medicina</h3>
      <p>En hospitales se usan softwares para diagnósticos, gestión de pacientes y cirugía asistida por computadora.</p>
    `,
    ingenieria: `
      <h3>Ingeniería</h3>
      <p>Programas como AutoCAD, SolidWorks y MATLAB se usan para diseñar, simular y resolver problemas complejos.</p>
    `,
    entretenimiento: `
      <h3>Entretenimiento</h3>
      <p>El software hace posible los videojuegos, animación 3D, películas digitales y plataformas como Netflix o Spotify.</p>
    `
  };

  const contenedor = document.getElementById("info-area");
  contenedor.innerHTML = info[area] || `<p>Seleccione un área válida.</p>`;
  contenedor.style.display = "block";
  contenedor.classList.remove("futurista");
  void contenedor.offsetWidth; // reinicia animación
  contenedor.classList.add("futurista");
  contenedor.focus();
}

document.addEventListener("scroll", () => {
  document.querySelectorAll(".scroll-anim").forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});

menu.hidden = false;
menu.classList.add("visible");
