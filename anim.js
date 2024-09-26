// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "🌻🌻🌻🌻🌻🌻🌻🌻🌻", time: 15 },
  { text: "Espero que tengas un lindo", time: 20 },
  { text: " Dia mi niña", time: 26 },
  { text: "Me fuera gustado", time: 32 },
  { text: "Darte flores", time: 33 },
  { text: "Pero un dia lo dare 🌺🌹", time: 41 },
  { text: "Bueno si aun se pregunta ", time: 47 },
  { text: "Porque te invite a salir ", time: 54 },
  { text: "Hay tres personas que lo saben ", time: 59 },
  { text: "ya te he de decir quienes son😋", time: 67 },
  { text: "Recuerda que eres una niña", time: 72 },
  { text: "Muy pero super hermosa 😍", time: 78 },
  { text: "Y digan lo que digan ", time: 83 },
  { text: "Para mi lo eres👉​👈​", time: 91 },
  { text: "Se me cuida mucho mi niña", time: 97 },
  { text: "No se que mas decir😋 ", time: 104 },
  { text: "En la vida hay muchas cosas por aprender, pero si algo tengo claro es que me enamoré de ti desde la primera mirada. Es un hecho tan sutil que ni yo mismo sé en qué momento sucedió.", time: 200 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 195 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
