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
  void contenedor.offsetWidth;
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

function generarPreguntas() {
  const asignatura = document.getElementById("asignatura").value;
  const nivel = document.getElementById("nivel").value;
  const resultado = document.getElementById("resultado");

  const basePreguntas = {
  matematicas: {
    basica: [
      "Si tienes 3 cajas con 4 lápices cada una, ¿cuántos lápices tienes en total?",
      "Dibuja un triángulo y nombra sus partes.",
      "Si Juan se comió 1/4 de una torta, ¿cuánto quedó?"
    ],
    media: [
      "Resuelve el siguiente problema: Un auto recorre 90 km en 1 hora y media. ¿Cuál es su velocidad promedio?",
      "Un rectángulo tiene 5 cm de largo y el doble de ancho. ¿Cuál es su perímetro?",
      "Un alumno obtuvo 5 notas: 6.0, 5.5, 6.2, 5.0 y 6.4. ¿Cuál es su promedio?"
    ],
    superior: [
      "Demuestra que el límite de (1 + 1/n)^n cuando n tiende a infinito es e.",
      "Diseña una función matemática que modele el crecimiento de una población que se duplica cada 3 años.",
      "Resuelve una integral definida con aplicación a un problema de física o economía."
    ]
  },
  historia: {
    basica: [
      "¿Cómo vivían los pueblos originarios de tu región antes de la llegada de los españoles?",
      "Dibuja o describe cómo era una ciudad en la Edad Media.",
      "Cuenta una anécdota o historia sobre algún personaje histórico chileno."
    ],
    media: [
      "Compara los ideales de la Revolución Francesa con los de la independencia de América Latina.",
      "¿Qué consecuencias tuvo la colonización europea en los pueblos indígenas americanos?",
      "Explica cómo influyeron los avances tecnológicos en la Primera Guerra Mundial."
    ],
    superior: [
      "Analiza las similitudes entre los regímenes totalitarios del siglo XX: nazismo, fascismo y estalinismo.",
      "¿Cómo ha evolucionado el concepto de ciudadanía desde la Revolución Francesa hasta hoy?",
      "Discute el papel de las mujeres en los grandes procesos históricos de los siglos XIX y XX."
    ]
  },
  ciencias: {
    basica: [
      "¿Por qué es importante reciclar? Relaciónalo con el cuidado del planeta.",
      "Describe lo que ocurre cuando plantas una semilla y cómo crece.",
      "¿Qué pasaría si no tuviéramos sol durante una semana?"
    ],
    media: [
      "Explica el ciclo del agua con un ejemplo que puedas observar en tu entorno.",
      "¿Cómo podrías comprobar que el aire ocupa espacio aunque no lo veamos?",
      "Diseña un pequeño experimento para demostrar que las plantas hacen fotosíntesis."
    ],
    superior: [
      "Analiza cómo la ingeniería genética ha cambiado el tratamiento de enfermedades hereditarias.",
      "Explica con tus palabras la paradoja del gato de Schrödinger y su impacto en la física moderna.",
      "Investiga un avance científico reciente y explica sus beneficios y riesgos para la sociedad."
    ]
  },
  lenguaje: {
    basica: [
      "Escribe una historia corta que comience con: 'Era un día muy extraño...'",
      "Subraya el verbo en la frase: 'Mi perro duerme en su cama todos los días.'",
      "¿Qué emociones transmite esta poesía? ¿Por qué?"
    ],
    media: [
      "Redacta una carta de reclamo simulando que eres un cliente insatisfecho.",
      "Analiza el personaje principal de una novela que hayas leído. ¿Cómo evoluciona?",
      "Escribe un diálogo donde dos personas tengan opiniones opuestas sobre el uso del celular en clases."
    ],
    superior: [
      "Compara el uso del simbolismo en dos poemas de diferentes épocas.",
      "Analiza cómo el contexto histórico influye en el lenguaje de una obra literaria.",
      "Elabora una crítica argumentada sobre un ensayo literario o filosófico que hayas leído."
    ]
  }
};

  if (basePreguntas[asignatura] && basePreguntas[asignatura][nivel]) {
    const preguntas = basePreguntas[asignatura][nivel];
    const listaEditable = preguntas.map(p => `
      <li contenteditable="true" class="editable" spellcheck="true">${p}</li>
    `).join("");

    resultado.innerHTML = `
      <h3>Preguntas para ${asignatura} - ${nivel}</h3>
      <p>Puedes editar las preguntas antes de usarlas:</p>
      <ul>${listaEditable}</ul>
    `;
  } else {
    resultado.innerHTML = `<p>Por favor, selecciona una asignatura y nivel válidos.</p>`;
  }

  resultado.style.display = "block";
  resultado.classList.remove("futurista");
  void resultado.offsetWidth;
  resultado.classList.add("futurista");
  resultado.focus();
}
