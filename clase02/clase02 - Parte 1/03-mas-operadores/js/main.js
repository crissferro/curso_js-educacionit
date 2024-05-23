/*
    Operadores de asignación
        =
        +=
        -=
        *=
        **=
        /=
        %=

    Operador de concatenación
        +

    Operadores aritméticos
        +
        -
        *
        **
        /
        %
    
    Operadores de incremento y decremento
        ++
        --

    Caracteres válidos para nomenclar variables:
        [a-z][A-Z]      letras en minúsculas y/o mayúsculas
        [0-9]           Números
        _               Guión bajo
        $               Signo de dolar (habitualmente, se reserva para jQuery)

    Estilos de nomenclaturas recomendados:
        telefonodelusuario          No recomendado
        telefono_del_usuario        Ok (snake case)
        telefonoDelUsuario          Ok (camel case)

 */

const costoArticulo1 = 700;
const costoArticulo2 = 1800;
const descuento = 250;
const iva = 1.21;
const total = (costoArticulo1 + costoArticulo2 - descuento) * iva;
console.log('total:', total);

const nombre = 'Juan';
const apellido = "Romero";
const nombreCompleto = nombre + ' ' + apellido;
console.log('nombreCompleto:', nombreCompleto);
console.log('Nombre completo de la persona:', nombreCompleto);
console.log('Nombre completo de la persona:', nombre + ' ' + apellido);

let x = 800;
console.log('x:', x);   // 800

x = 850;
console.log('x:', x);   // 850

x = x + 50;
console.log('x:', x);   // 900

x = x + 2;
console.log('x:', x);   // 902

// x = x + 2;
x += 2; // Equivalente
console.log('x:', x);   // 904

x += 46;
console.log('x:', x);   // 950

x -= 50;
console.log('x:', x);   // 900

x += 1;
console.log('x:', x);   // 901

x++;
console.log('x:', x);   // 902

x++;
console.log('x:', x);   // 903

++x;
console.log('x:', x);   // 904

let y = x++;
/*
Equivalente a:
let y = x;
x++;
*/

console.warn('y:', y);  // 904!
console.log('x:', x);   // 905

let z = ++x;
/*
Equivalente a:
x++;
let z = x;
*/
console.warn('z:', z);   // 906!
console.log('x:', x);   // 906


console.log('x:', x++); // 906
console.log('x:', x);   // 907
console.log('x:', x);   // 907
console.log('x:', x++); // 907
console.log('x:', x);   // 908
console.log('x:', x);   // 908
console.log('x:', x--); // 908
console.log('x:', x);   // 907
