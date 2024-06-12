// Palabra secreta y estado del juego
let palabraSecreta = prompt(`Ingrese la palabra a adivinar`).toLocaleLowerCase()
let palabraOculta = Array(palabraSecreta.length).fill('_');
let intentos = 6;
let letras = [];




// Mostrar la palabra oculta, mostrando sus guiones y cantidad de letras que tiene
function mostrarPalabra() {
    alert(palabraOculta.join(" "))
}

//verifiicar la letra adivinada
//si la letra ya fue ingresada, me da otro intento. De lo contrario
//la guardamos en el array letras.
// recorremos el array para ver si la letra se encuentra en la palabra secreta,
//y si es asi se la asignamos a la palbra oculta, sino se decuentan intentos 

function adivinarLetra(letra) {
    if (letras.includes(letra)) {
        alert(`Ya adivinaste la letra '${letra}'. Intenta otra vez.`)
        return
    }



    letras.push(letra)



    if (palabraSecreta.includes(letra)) {
        for (let i = 0; i < palabraSecreta.length; i++) {
            if (palabraSecreta[i] === letra){
                palabraOculta[i] = letra
            }
        }
        
    } else {
        intentos--
        alert(`Letra incorrecta. Te queda '${intentos}' intentos.`)
    }

    mostrarPalabra()
    estadoJuego()

    
}



//verificar como venimos con la palabra, si la palabra oculta 
//ya no contiene guines bajos ganaste la partida.
//si los intentos llega a 0 - perdiste.

function estadoJuego() {
    if (!palabraOculta.includes('_')) {

        alert("Ganaste!!!")

    } else if (intentos <= 0) {

        alert(`¡Perdiste! La palabra era ${palabraSecreta}.`) 
    }
}


//funcion principal del juego

function juego() {
    mostrarPalabra()

    while (intentos > 0 && palabraOculta.includes('_')) {
        const letra = prompt("Introduce una letra: ").toLocaleLowerCase()
        adivinarLetra(letra)
    }

    if (!palabraOculta.includes('_')) {
        alert(`Felicitaciones!, ganaste el juego`)
    } else {

        alert(`Lo siento, perdiste. Intenta de nuevo`)
    }


}

juego()