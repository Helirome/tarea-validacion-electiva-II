// validaciones.js

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    if (!form) return;

    function validarSeleccion(valor, opcionesValidas) {
        return (opcionesValidas.includes(valor))
    }
    function Text(valor) {
        return /^[0-9-a-zA-ZÁÉÍÓÚÑáéíóúñ\s]+$/.test(valor.trim());
    }
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
        return /^[0-9]{10}$/.test(valor.trim());
    }

    function validarFecha(valor) {
        const fechaNacimiento = new Date(valor);
        const hoy = new Date();
        const edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
        return edad >= 18;
    }

    function validarCodigoPostal(valor) {
        return /^[0-9]{5}$/.test(valor.trim());
    }

    // Mostrar validación
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

        const email = form.querySelector("#email");
        mostrarValidacion(email, validarEmail(email.value), "Formato de email inválido");
        if (!validarEmail(email.value)) valido = false;

        // Revisar
        const nacimiento = form.querySelector("#nacimiento");
        mostrarValidacion(nacimiento, validarFecha(nacimiento.value), "Debes ser mayor de nacimiento");
        if (!validarFecha(nacimiento.value)) valido = false;

        const sexo = form.querySelector("#sexo");
        mostrarValidacion(sexo, validarSeleccion(sexo.value, ["Masculino", "Femenino", "Otro"]), "Selección inválida");
        if (!validarSeleccion(sexo.value, ["Masculino", "Femenino", "Otro"])) valido = false;

        const telefono = form.querySelector("#telefono");
        mostrarValidacion(telefono, validarTelefono(telefono.value), "Teléfono inválido (10 dígitos)");
        if (!validarTelefono(telefono.value)) valido = false;

        const peso = form.querySelector("#peso");
        mostrarValidacion(peso, soloNumeros(peso.value) && peso.value > 30, "Debes ser mayor de peso");
        if (!(soloNumeros(peso.value) && peso.value > 30)) valido = false;

        const estatura = form.querySelector("#estatura");
        mostrarValidacion(estatura, soloNumeros(estatura.value) && estatura.value > 100, "Debes ser mayor de estatura");
        if (!(soloNumeros(estatura.value) && estatura.value > 100)) valido = false;

        const plan = form.querySelector("#plan");
        mostrarValidacion(plan, validarSeleccion(plan.value, ["Musculación", "Cardio", "Crossfit"]), "Selección inválida");
        if (!validarSeleccion(plan.value, ["Musculación", "Cardio", "Crossfit"])) valido = false;

        const nivel = form.querySelector("#nivel");
        mostrarValidacion(nivel, validarSeleccion(nivel.value, ["Principiante", "Intermedio", "Avanzado"]), "Selección inválida");
        if (!validarSeleccion(nivel.value, ["Principiante", "Intermedio", "Avanzado"])) valido = false;

        // Limitarlo a un mínimo de 10 carácteres
        const direccion = form.querySelector("#direccion");
        mostrarValidacion(direccion, Text(direccion.value) && direccion.value.length > 10, "Mínimo 10 caracteres");
        if (!Text(direccion.value) && direccion.value.length > 10) valido = false;

        const cp = form.querySelector("#postal");
        mostrarValidacion(cp, validarCodigoPostal(cp.value), "Código postal inválido");
        if (!validarCodigoPostal(cp.value)) valido = false;

        const contactoEmergencia = form.querySelector("#emergencia");
        mostrarValidacion(contactoEmergencia, soloLetras(contactoEmergencia.value), "Teléfono inválido (10 dígitos)");
        if (!soloLetras(contactoEmergencia.value)) valido = false;

        const telEmergencia = form.querySelector("#telEmergencia");
        mostrarValidacion(telEmergencia, validarTelefono(telEmergencia.value), "Teléfono inválido (10 dígitos)");
        if (!validarTelefono(telEmergencia.value)) valido = false;

        const terminos = form.querySelector("#terminos");
        mostrarValidacion(terminos, terminos.checked, "Debes aceptar los términos y condiciones");
        if (!terminos.checked) valido = false;

        if (valido) {
            alert("Formulario enviado con éxito ✅");
            form.reset();
            form.querySelectorAll(".is-valid").forEach(el => el.classList.remove("is-valid"));
        }
    });
});
