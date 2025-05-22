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
  contenedor.innerHTML = info[area];
  contenedor.style.display = "block";
  contenedor.classList.remove("futurista");
  void contenedor.offsetWidth; // Reinicia animación
  contenedor.classList.add("futurista");
}
