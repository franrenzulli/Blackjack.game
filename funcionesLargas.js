function desactivarCartas(){
 cartaAs.style.display = "none";
 carta2.style.display = "none";
 carta3.style.display = "none";
 carta4.style.display = "none";
 carta5.style.display = "none";
 carta6.style.display = "none";
 carta7.style.display = "none";
 carta8.style.display = "none";
 carta9.style.display = "none";
 carta10.style.display = "none";
 cartaJ.style.display = "none";
 cartaK.style.display = "none";
 cartaQ.style.display = "none";
}




function obtenerCartaObligatoria(){
tirarDado();

  if (cartaRandom == 1){
    cartaAs.style.display = "block";
    miPuntuacion = miPuntuacion + 11;
    avisarCarta.textContent = "Ha salido un As, que vale 11 puntos."
  }

  else if (cartaRandom == 2){
    carta2.style.display = "block";
    miPuntuacion = miPuntuacion + 2;
    avisarCarta.textContent = "Ha salido un 2."
  }

  else if (cartaRandom == 3){
    carta3.style.display = "block";
    miPuntuacion = miPuntuacion + 3;
    avisarCarta.textContent = "Ha salido un 3."
  }

  else if (cartaRandom == 4){
    carta4.style.display = "block";
    miPuntuacion = miPuntuacion + 4;
    avisarCarta.textContent = "Ha salido un 4."
  }

  else if (cartaRandom == 5){
    carta5.style.display = "block";
    miPuntuacion = miPuntuacion + 5;
    avisarCarta.textContent = "Ha salido un 5."
  }

  else if (cartaRandom == 6){
    carta6.style.display = "block";
    miPuntuacion = miPuntuacion + 6;
    avisarCarta.textContent = "Ha salido un 6."
  }

  else if (cartaRandom == 7){
    carta7.style.display = "block";
    miPuntuacion = miPuntuacion + 7;
    avisarCarta.textContent = "Ha salido un 7."
  }

  else if (cartaRandom == 8){
    carta8.style.display = "block";
    miPuntuacion = miPuntuacion + 8;
    avisarCarta.textContent = "Ha salido un 8."
  }

  else if (cartaRandom == 9){
    carta9.style.display = "block";
    miPuntuacion = miPuntuacion + 9;
    avisarCarta.textContent = "Ha salido un 9."
  }

  else if (cartaRandom == 10){
    carta10.style.display = "block";
    miPuntuacion = miPuntuacion + 10;
    avisarCarta.textContent = "Ha salido un 10."
  }

  else if (cartaRandom == 11){
    cartaJ.style.display = "block";
    miPuntuacion = miPuntuacion + 10;
    avisarCarta.textContent = "Ha salido una J, que vale 10 puntos."
  }


// Actualizamos en el texto HTML mi puntuacion.

document.getElementById("puntos").textContent = miPuntuacion;

if (miPuntuacion > 21){
    desactivarOpciones()
    avisarCarta.textContent = "Perdiste. Te pasaste de 21!"

}
}




function empezarGeorge(){

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

  botonSeguir.style.display = "block";

  if (puntuacionGeorge > 14 && puntuacionGeorge < 22) {
    avisarCarta.textContent = "George tiene " + puntuacionGeorge + " puntos y decide plantarse."

    botonSeguir.onclick = function turnoUsuario(){

      botonSeguir.style.display = "none";
      desactivarCartas();
      turno.textContent = "Turno de " + nombreUsuario;
      obtenerCartaObligatoria();
      activarOpciones();

      botonHit.onclick = function usuarioTira(){
        desactivarCartas();
        obtenerCartaObligatoria();

        if (miPuntuacion > puntuacionGeorge && miPuntuacion < 22){
          avisarCarta.textContent = "Has superado en puntuacion a George sin pasarte. Ganaste";
          victoria = true;
          botonSeguir.style.display = "none";
          desactivarOpciones();
        }
        else if (miPuntuacion > puntuacionGeorge && miPuntuacion > 21){
          victoria = false;
          botonSeguir.style.display = "none";
          desactivarOpciones();
          avisarCarta.textContent = "Te has pasado. Perdiste";
        }

// ACA TIENE QUE ARRIESGARSE LUEGO EL JUGADOR

      }
    }
  }

  else if (puntuacionGeorge > 21){
    avisarCarta.textContent = "George tiene " + puntuacionGeorge + " puntos y se ha pasado. Ganaste";
    victoria = true;
    botonSeguir.style.display = "none";
    desactivarOpciones();

  }

  else if (puntuacionGeorge <= 14){
    avisarCarta.textContent = "George tiene " + puntuacionGeorge + " puntos y decide tomar otra carta."


    botonSeguir.onclick = function georgeTira(){
      desactivarCartas();
      empezarGeorge();
    }
  }
}
