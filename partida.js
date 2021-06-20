var botonEmpezarPartida = document.getElementById("empezarPartida");
var botonCerrarModal = document.getElementById("cerrarModal");
var pantalla = document.getElementById("partida");
var billete = document.getElementById("billetes").textContent
var miApuesta = document.getElementById("miDinero");
var premio = document.getElementById("premio");
var turno = document.getElementById("turnoDe");
var avisarCarta = document.getElementById("cartaRandom");
var botonHit = document.getElementById("hit");
var botonStand = document.getElementById("stand");
var botonSeguir = document.getElementById("seguir");
var sonidoDinero = document.getElementById("audio");
var perfil = document.getElementById("usuario");
var victoria;
var nombreUsuario;

var cartaAs = document.getElementById("as");
var carta2 = document.getElementById("2");
var carta3 = document.getElementById("3");
var carta4 = document.getElementById("4");
var carta5 = document.getElementById("5");
var carta6 = document.getElementById("6");
var carta7 = document.getElementById("7");
var carta8 = document.getElementById("8");
var carta9 = document.getElementById("9");
var carta10 = document.getElementById("10");
var cartaJ = document.getElementById("J");
var cartaK = document.getElementById("K");
var cartaQ = document.getElementById("Q");
var miPuntuacion = 0;
var puntuacionGeorge = 0;




// Funciones Pequeñas

function desactivarOpciones(){
  botonHit.style.display = "none";
  botonStand.style.display = "none";
}

function activarOpciones(){
  botonHit.style.display = "block";
  botonStand.style.display = "block";
}

function tirarDado(){
  cartaRandom = Math.floor(Math.random() * (11 - 1) + 1);
}

function desactivarBotonComienzo(){
  botonEmpezarPartida.disabled = true;
}

function activarBotonComienzo(){
  botonEmpezarPartida.disabled = false;
}




// Se empieza la partida

botonEmpezarPartida.onclick = function mostrarPartida(){

desactivarBotonComienzo();

// Aparece el modal en pantalla y pide dos datos:

  pantalla.style.display = "block"

  if (nombreUsuario === undefined){
    nombreUsuario = prompt("¿Como te llamas?");
    usuario.textContent = "Nombre: " + nombreUsuario;
    }

  apuesta = prompt("¿Cuanto quieres apostar?");



// Se tira el dado.

  dado = Math.floor(Math.random() * (7 - 1) + 1);


  if (dado == 1 || dado == 3 || dado == 5){
    primeroYo = true;

  }

  else if (dado == 2 || dado == 4 || dado == 6){
    primeroYo = false;

  }




// Retiramos el dinero de nuestra cuenta hasta perder o ganar.

billete = billete - apuesta
document.getElementById("billetes").textContent = billete;
miApuesta.textContent = apuesta;


// Definimos el premio, que es el doble de la apuesta.

premio.textContent = apuesta * 2;
premioTotal = premio.textContent;






// Si empiezo yo.

if (primeroYo == true){

// Decir que es mi turno y tirar el dado.

  turno.textContent = "Turno de " + nombreUsuario;
  tirarDado();
  obtenerCartaObligatoria();





// Si quiero agarrar otra carta

botonHit.onclick = function obtenerCarta(){
  desactivarCartas();
  obtenerCartaObligatoria();

}




// Si quiero plantarme

botonStand.onclick = function plantarse(){

// Desactivar todo lo previo en el turno del jugador.

  turno.textContent = "Turno de George";
  avisarCarta.textContent = " ";
  desactivarOpciones()
  desactivarCartas();



  // Hacemos que tome la primera carta, y que empiece a decidir si arriesgarse o no.

  function empezar(){

    tirarDado();

    if (cartaRandom == 1){
      cartaAs.style.display = "block";
      puntuacionGeorge = puntuacionGeorge + 11;

    }

    else if (cartaRandom == 2){
      carta2.style.display = "block";
      puntuacionGeorge = puntuacionGeorge + 2;

    }

    else if (cartaRandom == 3){
      carta3.style.display = "block";
      puntuacionGeorge = puntuacionGeorge + 3;


    }

    else if (cartaRandom == 4){
      carta4.style.display = "block";
      puntuacionGeorge = puntuacionGeorge + 4;

    }

    else if (cartaRandom == 5){
      carta5.style.display = "block";
      puntuacionGeorge = puntuacionGeorge + 5;

    }

    else if (cartaRandom == 6){
      carta6.style.display = "block";
      puntuacionGeorge = puntuacionGeorge + 6;

    }

    else if (cartaRandom == 7){
      carta7.style.display = "block";
      puntuacionGeorge = puntuacionGeorge + 7;

    }

    else if (cartaRandom == 8){
      carta8.style.display = "block";
      puntuacionGeorge = puntuacionGeorge + 8;

    }

    else if (cartaRandom == 9){
      carta9.style.display = "block";
      puntuacionGeorge = puntuacionGeorge + 9;

    }

    else if (cartaRandom == 10){
      carta10.style.display = "block";
      puntuacionGeorge = puntuacionGeorge + 10;

    }

    else if (cartaRandom == 11){
      cartaJ.style.display = "block";
      puntuacionGeorge = puntuacionGeorge + 10;

    }



    // Chequeemos si el adversario ya logro superar a nuestro jugador.

    if (puntuacionGeorge > miPuntuacion && puntuacionGeorge < 21){
      console.log("Hola");
      avisarCarta.textContent = "El enemigo tiene " + puntuacionGeorge + " puntos y te ha ganado";
      victoria = false;
      botonSeguir.style.display = "none";


    }
    else if (puntuacionGeorge > miPuntuacion && puntuacionGeorge > 21){
      avisarCarta.textContent = "El enemigo tiene " + puntuacionGeorge + " puntos y se ha pasado. Ganaste"
      victoria = true;
      botonSeguir.style.display = "none";


    }

      else if (puntuacionGeorge < miPuntuacion){
      avisarCarta.textContent = "El enemigo tiene " + puntuacionGeorge + " puntos y ahora decidira si pedir otra carta o plantarse."
    }


    // Si no, entonces sigue la partida.




    botonSeguir.onclick = function georgeArriesga(){

      desactivarCartas();
      empezar();

      if (puntuacionGeorge < miPuntuacion && puntuacionGeorge < 21){
        avisarCarta.textContent = "El enemigo tiene " + puntuacionGeorge + " puntos y ahora decidira si pedir otra carta o plantarse."
      }
      else if (puntuacionGeorge > miPuntuacion && puntuacionGeorge < 21){
        avisarCarta.textContent = "El enemigo tiene " + puntuacionGeorge + " puntos y te ha ganado."
        victoria = false;
      }
      else if (puntuacionGeorge > miPuntuacion && puntuacionGeorge > 21){
        avisarCarta.textContent = "El enemigo tiene " + puntuacionGeorge + " puntos y se ha pasado. Ganaste"
        victoria = true;
        botonSeguir.style.display = "none";
      }
    }
  } // Termina la funcion EMPEZAR

  // Al ya haberle tocado las dos cartas al enemigo

  empezar();
  empezar();

  botonSeguir.style.display = "block";


  }
}


// Si empieza George


else if(primeroYo == false){

// Avisamos que es su turno y empieza su juego. (Todo englobado en la funcion empezarGeorge, en funcionesLargas.js)

turno.textContent = "Turno de George";
desactivarOpciones();
empezarGeorge();


} // Termina el scope de turno de George primero.


// Al cerrar el modal


botonCerrarModal.onclick = function cerrarPartida(){
  miPuntuacion = 0;
  puntuacionGeorge = 0;
  document.getElementById("puntos").textContent = miPuntuacion;
  avisarCarta.textContent = undefined;
  turno.textContent = " ";
  activarBotonComienzo();
  desactivarCartas();
  pantalla.style.display = "none"
  botonHit.style.display = "block";
  botonStand.style.display = "block"

  // Corroboramos si al irse de la partida, el jugador gano o perdio.

      if (victoria == true){
        var premioNumero = parseInt(premioTotal);
        billete = billete + premioNumero;
        document.getElementById("billetes").textContent = billete;
        audio.play();
      }
}


} // Termina el scope de la partida
