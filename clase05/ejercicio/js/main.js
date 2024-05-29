/*1) Crear un array que almacene los últimos 20 valores de la cotización de una moneda.
Ej: 1020, 1200, 990, 1300, 1400, 750, 870 etc.

2) Recorrer el array de forma automatizada con un while para mostrar todos estos valores.
3) Recorrer el array con un for.
4) Después de recorrer el array, mostrar en la consola el valor mínimo, máximo y el promedio de cotización de todos los meses.
*/


const cotizaciones = [1020, 1200, 990, 1300, 1400, 750, 840];
cotizaciones.push(500);
cotizaciones.push(1500);
cotizaciones.push(1800);
cotizaciones.push(850);
cotizaciones.push(1450);
cotizaciones.push(1350);
cotizaciones.push(1250);
cotizaciones.push(1030);
cotizaciones.push(1750);
cotizaciones.push(1600);
cotizaciones.push(1610);
cotizaciones.push(1440);

console.log(cotizaciones);
let i = 0;

while (i < cotizaciones.length) {
    let cotizacion = cotizaciones[i];
    console.log(`Cotizacion: ${cotizacion}`); //si coloco i obtengo la cantidad de veces que se ejecuta y es igual al indice del array
    console.log('---')
    i++;
}

for (let i = 0; i < cotizaciones.length; i++) {
    let cotizacion = cotizaciones[i];
    console.log(`Cotizacion: ${cotizacion}`); //si coloco i obtengo la cantidad de veces que se ejecuta y es igual al indice del array
    console.log('---')
}


let o = 0;
let maximo = -Infinity; // Inicializar con el valor más bajo posible
let minimo = Infinity;  // Inicializar con el valor más alto posible
let suma = 0;

// Bucle while que recorre el array
while (o < cotizaciones.length) {
    let valorActual = cotizaciones[o];

    if (valorActual > maximo) {
        maximo = valorActual;
    }

    if (valorActual < minimo) {
        minimo = valorActual;
    }

    suma += valorActual;
    o++;
}

let promedio = suma / cotizaciones.length;

console.log(`Máximo: ${maximo}`);
console.log(`Mínimo: ${minimo}`);
console.log(`Promedio: ${promedio}`);



