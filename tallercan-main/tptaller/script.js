var input_email = document.getElementById("email")
var select_artista = document.getElementById("artista")
var input_submit = document.getElementById("submit")

input_submit.addEventListener("click", enviarFormulario);

function enviarFormulario(event) {
    event.preventDefault();

    var valor_email = input_email.value;
    var valor_artista = select_artista.value;

    console.log(valor_email);
    console.log(valor_artista);

    var placeholder_email = document.getElementById("email-placeholder");
    var placeholder_artista = document.getElementById("artista-placeholder");

    placeholder_email.innerHTML = valor_email;
    placeholder_artista.innerHTML = valor_artista;

    elemento_feedback = document.getElementById("feedback");
    elemento_feedback.classList.remove("oculto");

    elemento_formulario = document.getElementById("formulario");
    elemento_formulario.classList.add("oculto");
}