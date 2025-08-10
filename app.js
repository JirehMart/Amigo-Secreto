// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


function agregarAmigo() {
    // Capturar el valor ingresado
    let nombreAmigo = document.getElementById("amigo").value.trim();

    // Validar que no esté vacío
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
    } else {
        // Agregar al array
        amigos.push(nombreAmigo);

        // Limpiar el campo de entrada
        document.getElementById("amigo").value = "";

        // Actualizar la lista visualmente
        actualizarListaAmigos();
    }
}

function actualizarListaAmigos() {
    // Obtener el elemento de la lista
    let listaAmigos = document.getElementById("listaAmigos");

    // Limpiar la lista antes de agregar nuevos elementos
    listaAmigos.innerHTML = "";

    // Recorrer el array y agregar cada nombre como un <li>
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];  // Establecer el nombre como contenido del <li>
        listaAmigos.appendChild(li);  // Agregar el <li> a la lista
    }
}

function sortearAmigo() {
    // Validar que haya al menos un amigo en el array
    if (amigos.length === 0) {
        alert("Por favor, añada amigos antes de sortear.");
    } else {
        // Generar un índice aleatorio
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);

        // Obtener el nombre sorteado
        let amigoSorteado = amigos[indiceAleatorio];

        // Mostrar el resultado
        document.getElementById("resultado").innerHTML = "Tu amigo secreto es: " + amigoSorteado;
    }
}

function reiniciarJuego() {
    // Vaciar el array de amigos
    amigos = [];

    // Limpiar la lista en HTML
    document.getElementById("listaAmigos").innerHTML = "";

    // Limpiar el campo de texto
    document.getElementById("amigo").value = "";

    // Limpiar el resultado del sorteo
    document.getElementById("resultado").innerHTML = "";
}
