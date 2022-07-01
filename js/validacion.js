let boton = document.getElementById("btnEnviar");
let botonLimpiar = document.getElementById("btnLimpiar");
let inputNombre = document.getElementById("nombre");
let inputMail = document.getElementById("e-mail");
let inputTelefono = document.getElementById("telefono");
let inputMensaje = document.getElementById("mensaje");

function validar(nombre, direccion, telefono) {
  let ocurrioError = false;
  if (nombre.length < 3) {
    alert("Ingresar un nombre con minimo 3 caracteres");
    ocurrioError = true;
  }
  if (direccion.length < 3) {
    alert("Ingrese nuevamente direccion de mail");
    ocurrioError = true;
  }
  console.log("cantidad" + telefono.toString.length);
  if (telefono < 999999999) {
    alert("Ingrese numero telefonico con minimo 10 caracteres");
    ocurrioError = true;
  } else {
    alert("El mensaje se envio con exito");
  }
  return ocurrioError;
}

boton.addEventListener("click", () => {
  let valorNombre = inputNombre.value;
  let valorMail = inputMail.value;
  let valorTelefono = Number(inputTelefono.value);

  let resultado = validar(valorNombre, valorMail, valorTelefono);
});


botonLimpiar.addEventListener("click", () => {
    document.getElementById("nombre").value = " ";
    document.getElementById("e-mail").value = " ";
    document.getElementById("telefono").value = " ";
    document.getElementById("mensaje").value = " ";
  });
