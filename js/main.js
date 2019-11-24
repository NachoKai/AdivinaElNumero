//Facil: max 50, 10 intentos
//Normal: max 100, 8 intentos
//Dificil: max 150, 6 intentos
//Muy Dificil: max 500, 5 intentos

let numeroRandom = Number(Math.floor(Math.random() * 50))
conteoIntentos()

function buscaNumero() {
    let mensaje = document.getElementById("mensaje")
    let userNum = Number(document.getElementById("user-num").value)

    if (userNum === numeroRandom) {
        mensaje.className = ("correcto")
        mensaje.innerText = "Correcto! Has ganado!"
    } else if (userNum < numeroRandom) {
        gameOver()
        mensaje.className = ("incorrecto")
        restaIntento()
        mensaje.innerText = "Ingresa un numero mas grande!"
    } 
    else if (userNum > numeroRandom) {
        gameOver()
        mensaje.className = ("incorrecto")
        restaIntento()
        mensaje.innerText = "Ingresa un numero mas chico!"
    } else {
        gameOver()
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
        intentos.value = 10
    }
    if (normal.checked === true) {
        intentos.value = 8
    }
    if (dificil.checked === true) {
        intentos.value = 6
    }
    if (muyDificil.checked === true) {
        intentos.value = 5
    }
}

function restaIntento() {
    let intentos = document.querySelector("#intentos")
    return intentos.value--
}

function gameOver() {
    let intentos = document.querySelector("#intentos")
    let botonIngresar = document.getElementById("button")

    if (intentos.value === 0) {
        mensaje.className = ("incorrecto")
        mensaje.innerText = "Perdiste! Intenta nuevamente."
        botonIngresar.disabled = true
    }
}

document.getElementById("button").onclick = function () {
    buscaNumero()
    gameOver()
}

document.querySelector("#dificultad").onclick = function () {
    conteoIntentos()
}