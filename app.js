let numeroSecreto = 0 ;//generarNumeroSecreto();
let intentos = 0 ;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento,texto ){
let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);//tomar el valor del numero, parseint me convierte el string en numero
      
    console.log(numeroSecreto);
    if (numeroDeUsuario === numeroSecreto) {
       asignarTextoElemento('p', ` You got it! / Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez!':'veces!' }`);
       document.getElementById('reiniciar').removeAttribute('disabled');//habilta boton nuevo JUego   
    } else {
        //el usuario no acerto
       if(numeroDeUsuario > numeroSecreto ){
          asignarTextoElemento('p', 'Secret number is a lower value/ El numero secreto es menor!');
       }else{
          asignarTextoElemento('p', 'Secret number is a higher value/ El numero secreto es mayor!');
       }
       intentos++ ;
       limpiarCaja();
    } 
    return;
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;//genera numero aleatorio 
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
      asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');  
    }else{
            //si el numero generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }   
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Secret number game/ Juego del numero secreto!');
    asignarTextoElemento('p',`Choose a number from 1 to ${numeroMaximo} / Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //Generar el numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego 
    document.querySelector('#reiniciar') .setAttribute('disabled','true');
}
condicionesIniciales();