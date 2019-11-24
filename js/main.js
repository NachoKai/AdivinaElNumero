//Facil: max 50, 10 intentos
//Normal: max 100, 8 intentos
//Dificil: max 150, 6 intentos
//Muy Dificil: max 500, 5 intentos

let numeroRandom = Number(Math.floor(Math.random() * 50))
conteoIntentos()

function buscaNumero() {
    let mensaje = document.getElementById("mensaje")
    let userNum = Number(document.getElementById("user-num").value)
    let botonIngresar = document.getElementById("button")

    if (userNum === numeroRandom) {
        mensaje.className = ("correcto")
        mensaje.innerText = "Correcto! Has ganado!"
        botonIngresar.disabled = true
    } else if (userNum < numeroRandom) {
        mensaje.className = ("incorrecto")
        mensaje.innerText = "Ingresa un numero mas grande!"
        restaIntento()
    }
    else if (userNum > numeroRandom) {
        mensaje.className = ("incorrecto")
        mensaje.innerText = "Ingresa un numero mas chico!"
        restaIntento()
    } else {
        mensaje.innerText = "Error! Intenta nuevamente."
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
        intentos.value = 15
    }
    if (normal.checked === true) {
        intentos.value = 10
    }
    if (dificil.checked === true) {
        intentos.value = 7
    }
    if (muyDificil.checked === true) {
        intentos.value = 5
    }
}

function restaIntento() {
    let intentos = document.querySelector("#intentos")
    let botonIngresar = document.getElementById("button")

    if (intentos.value === "1") {
        mensaje.className = ("incorrecto")
        mensaje.innerText = "Perdiste! Intenta nuevamente."
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
