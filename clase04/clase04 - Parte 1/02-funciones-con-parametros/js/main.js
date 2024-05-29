
function saludar1(nombre) {
    console.log('Hola, ' + nombre + ', cómo estás?');
}

saludar1('Pablo');
saludar1('Martina');
saludar1('Mar' + 'ti' + 'na');

const nombre3 = 'Damián';
saludar1(nombre3);

saludar1('x');
saludar1(' ');
saludar1('');
saludar1();

console.warn('==============================');

function saludar2(nombre, apellido = 'Parker') {
    console.log('Hola, ' + nombre + ' ' + apellido + ', cómo estás?');
}

saludar2('Pablo', 'García');                // Hola, Pablo García, cómo estás?

const nombre2 = 'Marcelo';
const apellido2 = 'Torres';
saludar2(nombre2, apellido2);               // Hola, Marcelo Torres, cómo estás?

saludar2(nombre2, 'Morelli');               // Hola, Marcelo Morelli, cómo estás?
saludar2('Lucía', 'Méndez');                // Hola, Lucía Méndez, cómo estás?
saludar2('Martín', '');                     // Hola, Martín , cómo estás?
saludar2('Martín', undefined);              // Hola, Martín Parker, cómo estás?
saludar2('Martín');                         // Hola, Martín Parker, cómo estás?
saludar2('Peter');                          // Hola, Peter Parker, cómo estás?
saludar2();                                 // Hola, undefined Parker, cómo estás?

console.warn('==============================');

function mostrarInfo(valor) {
    console.log('Información:', typeof valor, valor);
    if (valor === 5) {
        console.log('👉 Por cierto, el valor recibido es el número 5.');
    }
}

mostrarInfo(2);
mostrarInfo(40);
mostrarInfo('40');
mostrarInfo(null);
mostrarInfo(undefined);
mostrarInfo();
mostrarInfo(5);
mostrarInfo(15);
mostrarInfo('5');


console.warn('==============================');

// function saludarEnMayusculas(nombre, apellido) {
//     const nombreEnMayusculas = nombre.toLocaleUpperCase();
//     const apellidoEnMayusculas = apellido.toLocaleUpperCase();
//     console.log('Hola, ' + nombreEnMayusculas + ' ' + apellidoEnMayusculas + ', cómo estás?');
// }

// function saludarEnMayusculas(nombre, apellido) {
//     const nombreEnMayusculas = nombre.toLocaleUpperCase();
//     const apellidoEnMayusculas = apellido.toLocaleUpperCase();
//     saludar2(nombreEnMayusculas, apellidoEnMayusculas);
// }

function saludarEnMayusculas(nombre, apellido) {
    saludar2(nombre.toLocaleUpperCase(), apellido.toLocaleUpperCase());
}

saludarEnMayusculas('Natalia', 'del Valle');
saludarEnMayusculas('Patricio', 'Fernández');
