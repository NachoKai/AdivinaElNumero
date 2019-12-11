let numeroRandom = Number(Math.floor(Math.random() * 50))
conteoIntentos()

function buscaNumero() {
    let mensaje = document.getElementById("mensaje")
    let userNum = Number(document.getElementById("user-num").value)
    let botonIngresar = document.getElementById("button")

    if (userNum === numeroRandom) {
        mensaje.className = ("correcto")
        mensaje.value = indicarVictoria()
        botonIngresar.disabled = true
    } else if (userNum < numeroRandom) {
        mensaje.className = ("intermedio")
        mensaje.innerText = "Ingresa un numero mas alto! ☝️"
        restaIntento()
    } else if (userNum > numeroRandom) {
        mensaje.className = ("intermedio")
        mensaje.innerText = "Ingresa un numero mas bajo! 👇"
        restaIntento()
    } else {
        mensaje.innerText = "Error! Intenta nuevamente ✋"
    }
}
document.getElementById("button").onclick = function () {
    buscaNumero()
}

function conteoIntentos() {
    let intentos = document.querySelector("#intentos")
    let facil = document.querySelector("#facil")
    let normal = document.querySelector("#normal")
    let dificil = document.querySelector("#dificil")
    let muyDificil = document.querySelector("#muy-dificil")

    if (facil.checked === true) {
        intentos.value = 10
    }
    if (normal.checked === true) {
        intentos.value = 8
    }
    if (dificil.checked === true) {
        intentos.value = 6
    }
    if (muyDificil.checked === true) {
        intentos.value = 4
    }
}

function restaIntento() {
    let intentos = document.querySelector("#intentos")
    let botonIngresar = document.getElementById("button")

    if (intentos.value === "1") {
        mensaje.className = ("incorrecto")
        mensaje.value = indicarFracaso()
        botonIngresar.disabled = true
        intentos.value--
    } else {
        intentos.value--
    }
}

document.getElementById("button").onclick = function () {
    buscaNumero()
}

document.querySelector("#dificultad").onclick = function () {
    conteoIntentos()
}

function indicarFracaso() {
    Swal.fire({
        icon: 'error',
        title: "Perdiste!",
        html: `
        <p class="h4">Agotaste tus intentos.</p>
        <span><input type="button" value="Reiniciar" class="btn btn-outline-danger"
                    onclick="window.location.reload(false)"></span>`,
        allowOutsideClick: false,
        allowEscapeKey: false,
        showConfirmButton: false,
    })
}

function indicarVictoria() {
    Swal.fire({
        icon: 'success',
        title: "Ganaste!",
        html: `
        <p class="h4">Muy bien hecho. Te sobraron ${intentos.value} intentos.</p>
        <span><input type="button" value="Reiniciar" class="btn btn-outline-danger"
                    onclick="window.location.reload(false)"></span>`,
        allowOutsideClick: false,
        allowEscapeKey: false,
        showConfirmButton: false,
    })
}