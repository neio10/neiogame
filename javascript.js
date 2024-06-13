// Variables globales
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

//Llamar al id del boton de HTML para que pueda reconocerlo apenas arranque la pagina
//*addEventListener* = Registra un evento a una variable en específico, tiene varios tipos. ej: click, load, etc
//*let botonMascotaJugador = document.getElementById("boton-mascota")* = llamar al objeto que tenga ese id en HTML
//El add.eventListener de los ataques, dice que, cada vez que se le de click llame a la función del respectivo ataque
//Se añade el botón de reiniciar partida llamando a la función reiniciarJuego, para poder volver a los valores normales del archivo
//Creamos una variable llamando a la sección de seleccionar ataque para que la oculte antes de seleccionar una mascota.
//Para ocultarla se usa el atributo .style.display = "none"
function iniciarJuego(){
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = 'none'
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener( 'click', seleccionarMascotaJugador)
    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)
    let seccionReiniciar = document.getElementById("reiniciar")
    seccionReiniciar.addEventListener('click', reiniciarJuego)
    seccionReiniciar.style.display = "none"
}

function seleccionarMascotaJugador(){
    //Habilitamos la sección que deshabilitamos en la parte del inicio del juego
    //Deshabilitamos la sección de seleccionar mascota
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = 'flex'
    let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
    sectionSeleccionarMascota.style.display = 'none'

    // Creamos una variable para asignar el nombre de cada Input, de html, para después poder llamarla en el condicional.
    // Creamos una variable llamada "spanMascotaJugador" para asignarle el span, "mascota-jugador", del html para poder cambiarle los valores html que tiene dentro *en este caso String(texto)*
    //Asignamos una variable al boton-mascota para después poder deshabilitarlo
    let inputHipodoge = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatigueya = document.getElementById("ratigueya")
    let spanMascotaJugador = document.getElementById("mascota-jugador")
    let botonMascotaJugador = document.getElementById("boton-mascota")

    //*if (inputHipodoge.checked)* = Este comando dice que si el inputHipodoge, de tipo radio, esta seleccionado ".checked" se ejecute el comando dentro de las llaves {}
    //Este código también ejecuta que si por ej: Hipodoge fue seleccionado se cambie el string, con el comando .innerHTML, al string que le asignemos entre comillas después del "="
    //Establecemos que si se seleccionó la mascota, se deshabiliten los botones para no poder cambiarla en el trayecto del juego, con el .disabled = 1

    if (inputHipodoge.checked){
        spanMascotaJugador.innerHTML = "Hipodoge"
        botonMascotaJugador.disabled = true
        inputHipodoge.disabled = true
        inputCapipepo.disabled = true
        inputRatigueya.disabled = true
    }
    else if (inputCapipepo.checked){
        spanMascotaJugador.innerHTML = "Capipepo"
        botonMascotaJugador.disabled = true
        inputHipodoge.disabled = true
        inputCapipepo.disabled = true
        inputRatigueya.disabled = true
    }
    else if (inputRatigueya.checked){ 
        spanMascotaJugador.innerHTML = "Ratigueya"
        botonMascotaJugador.disabled = true
        inputHipodoge.disabled = true
        inputCapipepo.disabled = true
        inputRatigueya.disabled = true
    } else {
        alert("Tienes que seleccionar una mascota!")
    }

    //Llamamos a la función llamada seleccionarMascotaEnemigo para que se genere la mascota aleatoria del enemigo
    seleccionarMascotaEnemigo()
}

//Creamos una variable que genere un número aleatorio del 1 al 3 y le asignamos una mascota a cada número
//También creamos una variable que llame al span del string, en html, de la mascota del enemigo.
//Decimos, con un condicional, que si el número aleatorio es "= 1" se edite el inner.HTML y ponga el nombre de la mascota seleccionada
function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if(mascotaAleatorio == 1){
        spanMascotaEnemigo.innerHTML = "Hipodoge"
    } else if (mascotaAleatorio == 2){
        spanMascotaEnemigo.innerHTML = "Capipepo"
    } else {
        spanMascotaEnemigo.innerHTML = "Ratigueya"
    }
}

//Creamos una función, para cada ataque, que modifique la variable global, ataqueJugador, cada vez que seleccionemos nuestro ataque con el respectivo botón.
//Al último de todas las funciones llamamos a la función ataqueAleatorioEnemigo para que al terminar de seleccionar nuestro ataque, también genere uno para el enemigo
function ataqueFuego(){
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()
}

function aleatorio(min,max){
    return Math.floor( Math.random() * (max - min + 1) + min )
}

//Función para generar ataque aleatorio del enemigo, asignamos un ataque a cada número, y modificamos la variable ataqueEnemigo según el "ataque" que se genere.
//Al final, primero, llamamos a la función combate para que compare los resultados de los 2 jugadores y le asigne un valor a el resultado
//Después llamamos a la función crearMensaje así ya tiene el valor del resultado para agregarlo al mensaje
function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    if (ataqueAleatorio == 1){
        ataqueEnemigo = "FUEGO"
    } else if (ataqueAleatorio == 2){
        ataqueEnemigo = "AGUA"
    } else {
        ataqueEnemigo = "TIERRA"
    }
    combate()
}

//Creamos una función que compare los resultados del ataque del jugador, y del enemigo, y con un condicional cambia el valor de la var "resultado"
//Después agregamos el valor resultado al innerHTML del párrafo
//Creamos una variable definiendo el span de las vidas del jugador y el enemigo, para después poder cambiar el valor con la variable correspondiente
// Utilizando la variable global de vidasJugador/Enemigo, que tiene de valor predeterminado 3, cada vez que perdamos o ganemos se sumará o restará 1 vida, utilizando "--" o "++"
//Después agregamos la variable global al innerHTML del span de las vidas del jugador/enemigo
function combate(){
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")
    
    let resultado = ""
    if (ataqueJugador == ataqueEnemigo){
        resultado = "EMPATE"
    } else if (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA"){
        resultado = "GANASTE"
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO"){
        resultado = "GANASTE"
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA"){
        resultado = "GANASTE"
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        resultado = "PERDISTE"
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    crearMensaje(resultado)
    revisarVidas()
}
//Creamos una función para crear un párrafo según el ataque que elijamos, y el ataque que se le asigne al pc aleatoriamente
//Creamos una variable llamando "mensajeParrafo" a la sección donde queremos agregar el <p>
//Con *document.createElement* creamos un elemento dentro del HTML con Js, este elemento puede ser: un párrafo, un h1, h2 etc
//A lo último utilizamos .appendChild para llamar a la variable párrafo dentro de la variable mensajeParrafo (metemos el párrafo creado dentro de la sección "mensajes")
function crearMensaje(resultado){
    let mensajeParrafo = document.getElementById("resultado")
    let ataquesJugador = document.getElementById("ataques-jugador")
    let ataquesEnemigo = document.getElementById("ataques-enemigo")

    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    mensajeParrafo.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

//Creamos una función para revisar las vidas, con un condicional, diciendo que si las vidasEnemigo == 0 muestre el mensaje de victoria, y así con el otro caso
function revisarVidas() {
    if (vidasEnemigo == 0){
        crearMensajeFinal("FELICITACIONES! Ganaste🎉")
    } else if (vidasJugador == 0){
        crearMensajeFinal("Lo siento! Perdiste😑")
    }
}

//Creamos una función para generar el mensaje final, utilizando el document.createElement, para crear un párrafo que adentro tenga el mensaje de victoria o pérdida
//Agregamos en el código que, cuando ya hayamos ganado o perdido, deshabilitamos los botones para tirar poderes
//A lo último mostramos la sección de reiniciar así ya una vez nos haya dado el resultadoFinal, podamos reiniciar
function crearMensajeFinal(resultadoFinal){
    let mensajeParrafo = document.getElementById("resultado")
    let parrafo = document.createElement('p')
    mensajeParrafo.innerHTML = resultadoFinal
    mensajeParrafo.appendChild(parrafo)
    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.disabled = true
    let botonReiniciar = document.getElementById("reiniciar")
    botonReiniciar.style.display = "block"
}

function reiniciarJuego(){
    location.reload()
}

window.addEventListener('load', iniciarJuego)