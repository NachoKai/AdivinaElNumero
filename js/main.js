const numeroRandom = Number(Math.floor(Math.random() * 50));
conteoIntentos();

function buscaNumero() {
  const mensaje = document.getElementById("mensaje");
  const userNum = Number(document.getElementById("user-num").value);
  const botonIngresar = document.getElementById("button");

  if (userNum === numeroRandom) {
    mensaje.className = "correcto";
    mensaje.value = indicarVictoria();
    botonIngresar.disabled = true;
    return;
  }
  if (userNum < numeroRandom) {
    mensaje.className = "intermedio";
    mensaje.innerText = "Ingresa un número mas alto! ☝️";
    restaIntento();
    return;
  }
  if (userNum > numeroRandom) {
    mensaje.className = "intermedio";
    mensaje.innerText = "Ingresa un número mas bajo! 👇";
    restaIntento();
    return;
  }
  mensaje.innerText = "Error! Intenta nuevamente ✋";
}
document.getElementById("button").onclick = () => {
  buscaNumero();
};

function conteoIntentos() {
  const mensaje = document.getElementById("mensaje");
  const intentos = document.getElementById("intentos");
  const facil = document.getElementById("facil");
  const normal = document.getElementById("normal");
  const dificil = document.getElementById("dificil");
  const muyDificil = document.getElementById("muy-dificil");

  if (facil.checked === true) {
    mensaje.className = "hidden";
    intentos.value = 10;
  }
  if (normal.checked === true) {
    mensaje.className = "hidden";
    intentos.value = 8;
  }
  if (dificil.checked === true) {
    mensaje.className = "hidden";
    intentos.value = 6;
  }
  if (muyDificil.checked === true) {
    mensaje.className = "hidden";
    intentos.value = 4;
  }
}

function restaIntento() {
  const mensaje = document.getElementById("mensaje");
  const intentos = document.getElementById("intentos");
  const botonIngresar = document.getElementById("button");

  if (intentos.value === "1") {
    mensaje.className = "incorrecto";
    mensaje.value = indicarFracaso();
    botonIngresar.disabled = true;
    intentos.value--;
    intentosMal();
    return;
  }
  intentos.value--;
  intentosMal();
}

document.getElementById("button").onclick = () => {
  buscaNumero();
};

document.getElementById("dificultad").onclick = () => {
  conteoIntentos();
};

function indicarFracaso() {
  Swal.fire({
    icon: "error",
    title: "Perdiste!",
    html: `
        <p class="h4">Agotaste tus intentos.</p>
        <span><input type="button" value="Reiniciar" class="btn btn-outline-danger"
                    onclick="window.location.reload(false)"></span>`,
    allowOutsideClick: false,
    allowEscapeKey: false,
    showConfirmButton: false,
  });
}

function indicarVictoria() {
  const intentos = document.getElementById("intentos");
  Swal.fire({
    icon: "success",
    title: "Correcto!",
    html: `
        <p class="h4">Muy bien hecho. Te sobraron ${intentos.value} intentos.</p>
        <span><input type="button" value="Reiniciar" class="btn btn-outline-danger"
                    onclick="window.location.reload(false)"></span>`,
    allowOutsideClick: false,
    allowEscapeKey: false,
    showConfirmButton: false,
  });
}

function intentosMal() {
  const intentos = document.getElementById("intentos");
  setTimeout(() => {
    intentos.id = "intentosMal";
  }, 100);
  setTimeout(() => {
    intentos.id = "intentos";
  }, 300);
}

document.getElementById("current-year").innerHTML = new Date().getFullYear();
