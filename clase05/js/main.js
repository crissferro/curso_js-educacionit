for (let i = 0; i < 5; i++) {
    console.log('Mensaje de la consola')
}

// -------------------------------------------------

// TEMPLATE STRINGS

const nombre = 'martin';
const apellido = 'torres';
const AnioNacimiento = 1984;
const AnioActual = 2024;
const ciudad = 'La plata';

console.log('Martin torres vive en la plata y tiene 40 años')

console.log(nombre + ' ' + apellido + ' vive en ' + ' y tiene ' + AnioActual - AnioNacimiento + ' años');
//esto asi da nan años porque al texto trata de restas anionacimiento, habria que colocar parentesis en los años

console.log(nombre + ' ' + apellido + ' vive en ' + ciudad + ' y tiene ' + (AnioActual - AnioNacimiento) + ' años');

//ahora uso el template, pare eso debo usar la comilla al reves `  alt+96

console.log(`${nombre} ${apellido} vive en ${ciudad} y tiene ${AnioActual - AnioNacimiento} años`);

// ---------------------------------------------------

// ARRAYS

const dia1 = 'lunes';
const dia2 = 'martes';
const dia3 = 'miercoles';
const dia4 = 'jueves';
const dia5 = 'viernes';
const dia6 = 'sabado';
const dia7 = 'domingo';

//el indice en js arranca desde 0
const dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
console.log(dias);
console.log('Dia: ' + dias[0]);
console.log('Dia: ' + dias[1]);
console.log('Dia: ' + dias[2]);
//esto se puede reemplazar por algo para que sea repetitivo y no escribir todos los log... por ejemplo un for o while

for (let i = 0; i < 7; i++) {
    console.log('Dia: ' + dias[i]); //si coloco i obtengo la cantidad de veces que se ejecuta y es igual al indice del array
    console.log('---')
}

const costoArticulos = [8500, 4700, 6000, 2300, 4050];

for (let i = 0; i < 4; i++) {
    console.log(costoArticulos[i]);
}

// que pasa si borro algun precio me va a dar undefined, entonces coloco el lenght

for (let i = 0; i < costoArticulos.length; i++) {
    console.log(`Costo del articulo ${i}: ${costoArticulos[i]}`);
}

//ahora quiero calcular el total
//console.log(total);

// agrego valores al array

costoArticulos[5] = 25; //yo le digo el indice donde agregarlo
costoArticulos.push(2000); //lo agrega al final
costoArticulos.pop(); //elimina el ultimo

let acumulador = 0;  //defino la variable total

for (let i = 0; i < costoArticulos.length; i++) {
    console.log(`Costo del articulo ${i}: ${costoArticulos[i]}`);
    acumulador = acumulador + costoArticulos[i];  //agrego total para calcular en el for el costo del articulo
}

console.log(`El total es ${acumulador}`);



