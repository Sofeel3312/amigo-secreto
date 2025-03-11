// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigoTexto = document.getElementById("amigo").value;
let listaAmigos = document.getElementById("listaAmigos").getElementsByTagName("li");
let resultado = document.getElementById("resultado");
// Función para agregar un amigo a la lista
function agregarAmigo() {
  let amigoTexto = document.getElementById("amigo").value;

  if (amigoTexto === "") {
      alert('Por favor, ingrese un nombre.');
      return;
  }

//Verificar si el nombre contiene números
const regex = /\d/;
  if (regex.test(amigoTexto)) {
    alert('No se permite números');
    return;
  }

  // Crear un nuevo elemento de lista con el nombre del amigo
  let nuevoAmigo = document.createElement("li");
  nuevoAmigo.textContent = amigoTexto;

  // Agregar el nuevo amigo a la lista en el DOM
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.appendChild(nuevoAmigo);

  // Limpiar el campo de texto
  document.getElementById("amigo").value = "";
}

// Función para sortear un amigo de la lista
function sortearAmigo() {
  let listaAmigos = document.getElementById("listaAmigos").getElementsByTagName("li");

  if (listaAmigos.length === 0) {
      alert('No hay amigos en la lista.');
      return;
  }

  // Seleccionar un índice aleatorio de la lista de amigos
  let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
  let amigoSorteado = listaAmigos[indiceAleatorio].textContent;

  // Mostrar el resultado en la sección de resultado
  let resultado = document.getElementById("resultado");
  resultado.textContent = "El amigo sorteado es: " + amigoSorteado;
}
// Función para limpiar el juego
function limpiarJuego() {
  // Limpiar el campo de texto
  document.getElementById("amigo").value = "";

  // Limpiar la lista de amigos
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";  // Esto elimina todos los elementos <li> dentro de la lista

  // Limpiar el resultado del sorteo
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.textContent = "";  // Eliminar cualquier texto de la sección de resultado
}
