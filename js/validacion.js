const name = document.getElementById('iname')
const email = document.getElementById('iemail')
const request = document.getElementById('irequest')
const form = document.getElementById('form')

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

function enviarFormulario() {
  console.log("Enviando formulario...");
  return false;
} 