let numeroRandom = Number(Math.floor(Math.random() * 50))

function buscaNumero() {
    let mensaje = document.getElementById("mensaje")
    let userNum = Number(document.getElementById("user-num").value)

    if (userNum === numeroRandom) {
        mensaje.className = ("correcto")
        mensaje.innerText = "Correcto!"
    } else if (userNum < numeroRandom) {
        mensaje.className = ("incorrecto")
        mensaje.innerText = "Ingresa un numero mas grande!"
    } else if (userNum > numeroRandom) {
        mensaje.className = ("incorrecto")
        mensaje.innerText = "Ingresa un numero mas chico!"
    } else {
        mensaje.innerText = "Error! Intenta nuevamente."
    }
}

document.getElementById("button").onclick = function () {
    buscaNumero()
}