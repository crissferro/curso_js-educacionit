function printDivisor() {
    console.log('____________________________________');
}

// function sumar(num1, num2) {
//     const total = num1 + num2;
//     return total;
// }

function sumar(num1, num2) {
    return num1 + num2;
}

// Se llama a la función sumar y el valor retornado/devuelto se almacena en la constante total1
const total1 = sumar(10, 40);
console.log(total1);    // 50

// Se llama a la función sumar y el valor retornado/devuelto se almacena en la constante total2
const total2 = sumar(2, 98);
console.log(total2);    // 100

// Se llama a la función sumar y el valor retornado/devuelto es utilizado directamente como un argumento para console.log()
console.log(sumar(3, 7));    // 10

console.log(sumar(5, -15));    // -10

// Se llama a la función sumar y al valor retornado/devuelto no se le da ningún uso (es descartado)
sumar(2, 2);

sumar(100, 900);
sumar(30, 70);
sumar(3, 97);

console.log(    sumar(  2 + 3   ,      sumar(100, 80)      ));
console.log(    sumar(  2 + 3   ,      180                 ));
console.log(    sumar(      5   ,      180                 ));

console.log(sumar(sumar(2, sumar(-2, 3)), 40));

const costoArticulo1 = 500;
const costoArticulo2 = 1500;
const total = sumar(costoArticulo1, costoArticulo2);
console.log('El total es ' + total);

printDivisor();

function printSaludo(nombre, apellido) {
    const nombreCompleto = nombre + ' ' + apellido;
    console.log('Hola, ' + nombreCompleto + ', cómo estás?');
}

printSaludo('Mónica', 'Torres');
printSaludo('Gustavo', 'Flores');
printSaludo('Dalila', 'Hernández');
printSaludo('Luciano', 'Gutiérrez');

printDivisor();

function getSaludo(nombre, apellido) {
    const nombreCompleto = nombre + ' ' + apellido;
    const saludoCompleto = 'Hola, ' + nombreCompleto + ', cómo estás?';
    return saludoCompleto;
}

const saludoUsuario1 = getSaludo('Mónica', 'Torres');
console.log(saludoUsuario1);

const saludoUsuario2 = getSaludo('Gustavo', 'Flores');
console.warn(saludoUsuario2);

console.log(getSaludo('Dalila', 'Hernández'));
console.error(getSaludo('Luciano', 'Gutiérrez'));
// alert(getSaludo('Fabiana', 'Fernández'));

printDivisor();

function imprimirEntreLineas(mensaje) {
    printDivisor();
    console.log(mensaje);
    printDivisor();
}

imprimirEntreLineas(400);
imprimirEntreLineas('Un mensaje');
imprimirEntreLineas(false);
imprimirEntreLineas(true);
imprimirEntreLineas('Otro mensaje');
imprimirEntreLineas(getSaludo('Micaela', 'Peralta'));

