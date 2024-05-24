function printDivisor() {
    console.log('--------------------------');
}


function saludar() {
    console.log('Hola');
    console.warn('Como estas?');
}
//ejecuto la funcion
saludar();

//ejecuto de nuevo la funcion
saludar();

printDivisor();
//puedo llamar una funcion dentro de la otra..

function saludar2() {
    console.log('ejecuto otra funcion')
    saludar();
}

saludar2();

printDivisor();

//Funciones con parametros

function saludarAPablo() {
    console.warn('Hola, Pablo, como estas?');
}

function saludarANatalia() {
    console.warn('Hola, Natalia, como estas?');
}
//ejecuto la funcion
saludarAPablo();
saludarANatalia();

//en este caso no tiene sentido hacer una por nombre, entonces uso parametros

function saludar3(nombre) {
    console.warn('Hola, ' + nombre + ' como estas?');
}
//uso el argumento definido en la funcion como nombre que esta entre parentesis
saludar3('Pablo');
saludar3('Nicolas');
saludar3('Jose');



function saludar4(nombre, apellido = 'Apellido') {
    console.warn('Hola, ' + nombre + ' ' + apellido + ' como estas?');
}

saludar4('Pablo', 'Torres');
saludar4('Nicolas', 'Martinez');
saludar4('Jose', 'Lupin');
saludar4('Cristian',) //usa el apellido Apellido por defecto

printDivisor();

// otro ejemplo metiendo if dentro de una funcion

console.warn('==============');

function mostrarInfo(valor) {
    console.log('Informacion:', typeof valor, valor);
    if (valor === 5) {
        console.log
    }
}


printDivisor();
// funciones con retorno
//yo le paso a la funcion cosas y la misma me retorna un resultado u otro valor

function sumar(num1, num2) {
    const total = num1 + num2;
    return total;
}
//se llama a la funcion sumar y el resultado se almacena en la constante total1
const total1 = sumar(10, 40);
console.log(total1);

console.log(sumar(3, 7));  //uso la funcion directamente en console.log

printDivisor();


















