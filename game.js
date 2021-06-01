var bandera = false;//esta bandera indica si el juego inicia, comienza en falso y cambia a verdadero hasta que se presiona el boton comenzar
var turno = 0; //esta determina el turno
var tab = new Array();//en este arreglo se guardan los botones del tablero 

window.onload = function (){ //cargamos el evento en click con esta funcion
    var iniciar = document.getElementById("iniciar"); //llamamos al boton que tiene el id=iniciar, y lo guardamos en una variable del mismo nombre.
    iniciar.addEventListener("click", comenzar);//decimos: a la variable iniciar cuando el evento click se haga se ejecuta la funcion comenzar.
    
}

function comenzar () { //aqui comienza el juego
    bandera = true;//cambiamos la bandera a verdadero para indicar que el juego comenzo
    var jugador1 = document.getElementById("jugador1"); //guardamos en la variable los elementos mediante getById
    var jugador2 = document.getElementById("jugador2");

    if (jugador1.value == ""){ //aqui revisaremos que efectivamente los jugadores pusieron sus  nombres
        alert("Falta el nombre del jugador 1"); //si el jugador1.el valor de la caja de texto esta vacio.
        jugador1.focus(); //mandamos un alert al usuario y hacemos que directamente el focus lo mande ese elemento.
    }else {
        if (jugador2.value == ""){ //lo mismo que el jugador 1.
            alert("Falta el nombre del jugador 2");
            jugador2.focus();
        }else { // si todo lo anterior esta bien comenzamos a llenar el arreglo de los botones.
            tab[0] = document.getElementById("b0");
            tab[1] = document.getElementById("b1");
            tab[2] = document.getElementById("b2");
            tab[3] = document.getElementById("b3");
            tab[4] = document.getElementById("b4");
            tab[5] = document.getElementById("b5");
            tab[6] = document.getElementById("b6");
            tab[7] = document.getElementById("b7");
            tab[8] = document.getElementById("b8");
            for ( var i = 0; i < 9; i ++){ // ahora con el ciclo for recorremos el arreglo
                tab[i].className = "botonInicial";// con la propiedad className podemos asigarle una clase a cada elemnto del arreglo que en este caso es la de los botones iniciar.
                tab[i].value = "I"; // con esto le asignamos valor a cada boton
            }
            turno = 1;
            document.getElementById("turnoJugador").innerHTML = "Adelante Jugador " + jugador1.value; //innerHTML nos permite colocarle texto a nuestra etiqueta-

        }
    }
}


//para la siguiente funcion se coloco un evento on click en los botones del tablero con la propiedad this, para que se manden llamar asi mismos con esta funcion. on click="colocar(this)".
function colocar (boton) { //ahora salimos de la funcion comenzar () y colocamos los botones y estilos para cada jugador.
    if (bandera == true){ //primero aseguramos que nuentra bandera sea true y que el juego esta activo.
        if(turno == 1 && boton.value=="I"){ //ahora si el turno es del jugador 1 y el boton tiene un valor "I" es decir nadie lo ha ocupado ejecutamos lo siguiente.
            turno = 2;//se cambia el turno para el jugador 2
            document.getElementById("turnoJugador").innerHTML = "Adelante jugador " + jugador2.value;
            boton.value = "X"//se coloca una X donde se presiono el boton
            boton.className = "botonJugador1"; //y se le asigna una clase respectiva para el estilo del jugador.
        }else {
            if(turno == 2 && boton.value == "I"){
                turno = 1;//se cambia el turno para el jugador 1
                document.getElementById("turnoJugador").innerHTML = "Adelante jugador " + jugador1.value;
                boton.value = "O"//se coloca una O donde se presiono el boton
                boton.className = "botonJugador2"; //y se le asigna una clase respectiva para el estilo del jugador.
            }
        }
    }
    
    revisar();// despues de los condicionales revisamos si algun jugador gano con esta funcion.
}

function revisar (){ //revisamos si algun jugador gano y escribimos las diferentes maneras de ganas que son 8.
    if((tab[0].value == "X" && tab[1].value=="X" && tab[2].value =="X")
    ||(tab[3].value == "X" && tab[4].value=="X" && tab[5].value =="X")
    ||(tab[6].value == "X" && tab[7].value=="X" && tab[8].value =="X")
    ||(tab[0].value == "X" && tab[3].value=="X" && tab[6].value =="X")
    ||(tab[1].value == "X" && tab[4].value=="X" && tab[7].value =="X")
    ||(tab[2].value == "X" && tab[5].value=="X" && tab[8].value =="X")
    ||(tab[0].value == "X" && tab[4].value=="X" && tab[8].value =="X")
    ||(tab[2].value == "X" && tab[4].value=="X" && tab[6].value =="X")
    ){
        alert("Felicidades ganaste Jugador " + jugador1.value);
        bandera = false;
    }
    if((tab[0].value == "O" && tab[1].value=="O" && tab[2].value =="O")
    ||(tab[3].value == "O" && tab[4].value=="O" && tab[5].value =="O")
    ||(tab[6].value == "O" && tab[7].value=="O" && tab[8].value =="O")
    ||(tab[0].value == "O" && tab[3].value=="O" && tab[6].value =="O")
    ||(tab[1].value == "O" && tab[4].value=="O" && tab[7].value =="O")
    ||(tab[2].value == "O" && tab[5].value=="O" && tab[8].value =="O")
    ||(tab[0].value == "O" && tab[4].value=="O" && tab[8].value =="O")
    ||(tab[2].value == "O" && tab[4].value=="O" && tab[6].value =="O")
    ){
        alert("Felicidades ganaste Jugador " + jugador2.value);
        bandera = false;
    }
}
