document.addEventListener("DOMContentLoaded", function () {
  
  const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,}$/;
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const regexTelefono = /^[0-9]{10}$/;
  const regexDireccion = /^.{10,}$/;
  const regexPostal = /^[0-9]{5}$/;

  let valido = true;

  function validarCampo(campo, condicion, mensaje) {
    const feedback = campo.parentElement.querySelector(".invalid-feedback");
    if (condicion) {
      campo.classList.remove("is-invalid");
      campo.classList.add("is-valid");
      if (feedback) feedback.textContent = "";
    } else {
      campo.classList.add("is-invalid");
      campo.classList.remove("is-valid");
      if (feedback) feedback.textContent = mensaje;
      valido = false;
    }
  }

  
  const nombre = document.getElementById("nombre");
  const apellido = document.getElementById("apellido");
  const email = document.getElementById("email");
  const telefono = document.getElementById("telefono");
  const nacimiento = document.getElementById("nacimiento");
  const sexo = document.getElementById("sexo");
  const peso = document.getElementById("peso");
  const estatura = document.getElementById("estatura");
  const plan = document.getElementById("plan");
  const nivel = document.getElementById("nivel");
  const direccion = document.getElementById("direccion");
  const postal = document.getElementById("postal");
  const emergencia = document.getElementById("emergencia");
  const telEmergencia = document.getElementById("telEmergencia");
  const terminos = document.getElementById("terminos");
  const form = document.querySelector("form");

 
  function validarNombre() {
    validarCampo(nombre, regexNombre.test(nombre.value.trim()), "El nombre no es válido");
  }

  function validarApellido() {
    validarCampo(apellido, regexNombre.test(apellido.value.trim()), "El apellido no es válido");
  }

  function validarEmail() {
    validarCampo(email, regexCorreo.test(email.value.trim()), "El correo no es válido");
  }

  function validarTelefono() {
    validarCampo(telefono, regexTelefono.test(telefono.value.trim()), "El teléfono debe tener 10 dígitos");
  }

  function validarNacimiento() {
    const fecha = new Date(nacimiento.value);
    const hoy = new Date();
    const edad = hoy.getFullYear() - fecha.getFullYear();
    validarCampo(
      nacimiento,
      nacimiento.value && edad >= 16,
      "Debes tener al menos 16 años"
    );
  }

  function validarSexo() {
    validarCampo(sexo, sexo.value !== "", "Debes seleccionar tu sexo");
  }

  function validarPeso() {
    validarCampo(peso, peso.value && parseFloat(peso.value) > 30, "El peso debe ser mayor a 30 kg");
  }

  function validarEstatura() {
    validarCampo(estatura, estatura.value && parseFloat(estatura.value) > 100, "La estatura debe ser mayor a 100 cm");
  }

  function validarPlan() {
    validarCampo(plan, plan.value !== "", "Debes seleccionar un plan");
  }

  function validarNivel() {
    validarCampo(nivel, nivel.value !== "", "Debes seleccionar tu nivel");
  }

  function validarDireccion() {
    validarCampo(direccion, regexDireccion.test(direccion.value.trim()), "La dirección debe tener al menos 10 caracteres");
  }

  function validarPostal() {
    validarCampo(postal, regexPostal.test(postal.value.trim()), "El código postal debe tener 5 dígitos");
  }

  function validarEmergencia() {
    validarCampo(emergencia, regexNombre.test(emergencia.value.trim()), "El contacto de emergencia no es válido");
  }

  function validarTelEmergencia() {
    validarCampo(telEmergencia, regexTelefono.test(telEmergencia.value.trim()), "El teléfono de emergencia debe tener 10 dígitos");
  }

  function validarTerminos() {
    if (!terminos.checked) {
      terminos.classList.add("is-invalid");
      valido = false;
    } else {
      terminos.classList.remove("is-invalid");
    }
  }

  nombre.addEventListener("input", validarNombre);
  apellido.addEventListener("input", validarApellido);
  email.addEventListener("input", validarEmail);
  telefono.addEventListener("input", validarTelefono);
  nacimiento.addEventListener("change", validarNacimiento);
  sexo.addEventListener("change", validarSexo);
  peso.addEventListener("input", validarPeso);
  estatura.addEventListener("input", validarEstatura);
  plan.addEventListener("change", validarPlan);
  nivel.addEventListener("change", validarNivel);
  direccion.addEventListener("input", validarDireccion);
  postal.addEventListener("input", validarPostal);
  emergencia.addEventListener("input", validarEmergencia);
  telEmergencia.addEventListener("input", validarTelEmergencia);
  terminos.addEventListener("change", validarTerminos);

  
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    valido = true;

    validarNombre();
    validarApellido();
    validarEmail();
    validarTelefono();
    validarNacimiento();
    validarSexo();
    validarPeso();
    validarEstatura();
    validarPlan();
    validarNivel();
    validarDireccion();
    validarPostal();
    validarEmergencia();
    validarTelEmergencia();
    validarTerminos();

    if (valido) {
      alert("Formulario enviado correctamente ✅");
      form.reset();
      document.querySelectorAll(".form-control").forEach(el => el.classList.remove("is-valid"));
    }
  });
});
