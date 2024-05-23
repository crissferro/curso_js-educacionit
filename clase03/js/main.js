/* if es una estructura condicional que permite que se ejecute de acuerdo a algo que sucede, pero depende siempre de algo */
/*
if (condition) {
.... codigo a ejecutar si la condicion se cumple...    
}

en la condicion se pone true o false

y tambien tenemos el if else que es la segunda parte, en donde se indica que pasa si NO se cumple la condicion


Operadores omparativos

<   menor                       
<=  menor o igual
>   mayor
>=  mayor o igual
==  igual                   compara valor ignorando tipo de dato
=== estrictamente igual     compara valor y tipo de dato
!=  distinto
!== estrictamente distinto

*/

console.warn('Ejemplo 1:');
if (true) {
    console.log('se cumple');
}

console.warn('Ejemplo 3:');
let saldo = 36500;
if (saldo >= 4000) {
    console.log('el saldo alcanza para realizar la compra');
} else {
    console.log('saldo insuficiente');
}

console.warn('Ejemplo 4:');
saldo = 240;
if (saldo >= 4000) {
    console.log('el saldo alcanza para realizar la compra');
} else {
    console.log('No se cumple');
}

console.warn('Ejemplo 5:');
// const dia = 'martes'
const dia = 'domingo';
if (dia === 'domingo') {
    console.log('el local se encuentra cerrado');
} else {
    console.log('atendemos de 10 a 18hs');
}

// AGREGAMOS VENTANAS INTERACTIVAS

//alert('Hola');
//prompt('ingresa tu nombre'); //el nombre no se gaurdo porque no se almaceno

//const nombre = prompt('ingresa tu nombre:'); //guarda en una variable constante el nombre

//console.log('nombre:', nombre);
//alert(nombre);

const continuar = confirm('Queres ingresar tus datos?');
console.log('continuar:', continuar);

if (continuar) {
    const nombre = prompt('ingresa tu nombre:');

    if (nombre === '') {
        console.log('dejaste un texto vacio y presionaste aceptar.');
    }

    if (nombre === null) {
        console.log('presionaste cancelar.')
    }

    console.log('nombre:', nombre);

    alert(nombre);
} else {
    console.warn('se decidio continuar sin completar los datos...');
}

// if/else/if, se cuple una condicion si se cumple otra condicion... y si no preguntar por otra

