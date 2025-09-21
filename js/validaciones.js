// validaciones.js

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form"); 
    if (!form) return;

    function soloLetras(valor) {
        return /^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]+$/.test(valor.trim());
    }

    function soloNumeros(valor) {
        return /^[0-9]+$/.test(valor.trim());
    }

    function validarEmail(valor) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor.trim());
    }

    function validarTelefono(valor) {
        return /^[0-9]{11}$/.test(valor.trim()); 
    }

    function validarPassword(valor) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(valor);
    }

    function validarFecha(valor) {
        const hoy = new Date().toISOString().split("T")[0];
        return valor >= hoy;
    }

    function validarHora(valor) {
        return valor >= "08:00" && valor <= "18:00";
    }

    function validarCodigoPostal(valor) {
        return /^[0-9]{5}$/.test(valor.trim()); 
    }

    
    function mostrarValidacion(input, esValido, mensaje) {
        if (esValido) {
            input.classList.add("is-valid");
            input.classList.remove("is-invalid");
            if (input.nextElementSibling) {
                input.nextElementSibling.textContent = "";
            }
        } else {
            input.classList.add("is-invalid");
            input.classList.remove("is-valid");
            if (input.nextElementSibling) {
                input.nextElementSibling.textContent = mensaje;
            }
        }
    }

    // Validar al enviar
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let valido = true;

        const nombre = form.querySelector("#nombre");
        mostrarValidacion(nombre, soloLetras(nombre.value), "Solo letras");
        if (!soloLetras(nombre.value)) valido = false;

        const apellido = form.querySelector("#apellido");
        mostrarValidacion(apellido, soloLetras(apellido.value), "Solo letras");
        if (!soloLetras(apellido.value)) valido = false;

        const edad = form.querySelector("#nacimiento");
        mostrarValidacion(edad, soloNumeros(edad.value) && edad.value >= 18, "Debes ser mayor de edad");
        if (!(soloNumeros(edad.value) && edad.value >= 18)) valido = false;

        const email = form.querySelector("#email");
        mostrarValidacion(email, validarEmail(email.value), "Formato de email inválido");
        if (!validarEmail(email.value)) valido = false;

        const telefono = form.querySelector("#telefono");
        mostrarValidacion(telefono, validarTelefono(telefono.value), "Teléfono inválido (10 dígitos)");
        if (!validarTelefono(telefono.value)) valido = false;

        const password = form.querySelector("#password");
        mostrarValidacion(password, validarPassword(password.value), "Debe tener mayúscula, minúscula, número y carácter especial");
        if (!validarPassword(password.value)) valido = false;

        const fecha = form.querySelector("#fecha");
        mostrarValidacion(fecha, validarFecha(fecha.value), "La fecha no puede ser menor a hoy");
        if (!validarFecha(fecha.value)) valido = false;

        const hora = form.querySelector("#hora");
        mostrarValidacion(hora, validarHora(hora.value), "La hora debe estar entre 08:00 y 18:00");
        if (!validarHora(hora.value)) valido = false;

        const cp = form.querySelector("#postal");
        mostrarValidacion(cp, validarCodigoPostal(cp.value), "Código postal inválido");
        if (!validarCodigoPostal(cp.value)) valido = false;


        if (valido) {
            alert("Formulario enviado con éxito ✅");
            form.reset();
            form.querySelectorAll(".is-valid").forEach(el => el.classList.remove("is-valid"));
        }
    });
});
