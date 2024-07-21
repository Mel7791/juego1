let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = []; //crochets nos indica que hay una lista
let numeroMaximo = 10; //para buscar algo se aprieta ctrl f

//console.log(numeroSecreto);

//para no repetir los codigos vamos optimizar el codigo con variables atraves de function: 
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; //si el numeroGenerado esta en la lista, genero otro, si no esta, sigo 
    
    console.log(numeroGenerado);
    //console.log(listaNumerosSorteados);

    //aqui vamos colocar condicion de salida, pq aqui se ocurrio el problema
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            //si el numero no esta en la lista, generamos otro numero con metodo push
            if (listaNumerosSorteados.push(numeroGenerado));
            return numeroGenerado;
        }
    }
} 

function verificarIntento() { 
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); //parseInt elimina el string y .value es para q nos devuelva el valor
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero secreto en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        //vamos activar el boton de nuevo juego usando DOM removiendo el attributo "disabled". Esa funcion se agrega despues de que el usuario acerta el numero secreto
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'Numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'Numero secreto es mayor')
        }
        intentos++; 
        limpiarCaja(); //funcion limpiarCaja debe ir dentro de la funcion cuando el usuario no acerta
    }        
    return;
} 

function limpiarCaja() {
    document.querySelector('#valorUsuario').value=' ';
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'JUEGO DEL NUMERO SECRETO');
    asignarTextoElemento('p', `Indica un numero de 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}   

function reiniciarJuego() {
    limpiarCaja(); //primero debemos dejar la caja limpia
    condicionesIniciales(); 
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}


condicionesIniciales();



