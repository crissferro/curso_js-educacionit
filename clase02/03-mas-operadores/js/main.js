/* 
operadores de asignacion
=
+=
-=
*=
**=
/=
%=


operadores de concatenacion
+


estilos de nomenclaturas recomendadas:

teledelusuario          no recomendado
telefono_del_usuario    recomendado (snake case)
telefonoDelUsuario      recomendado (camel case)


operadores de incremento

++
--


*/


const costoArticulo1 = 700;
const costoArticulo2 = 1800;
const desceunto = 250;
const iva = 1.21;
const total = (costoArticulo1 + costoArticulo2 - desceunto) * iva;
console.log('Total:', total);


const nombre = 'Juan';
const apellido = 'Romero';
const nombreCompleto = nombre + ' ' + apellido;
console.log('nombreCompleto:', nombreCompleto)


let x = 400;
console.log('x:', x);

x = 450;
console.log('x:', x);

/* ahora si quiero agregarle 50 mas hay que hacer esto: x + 50 */

x = x + 50;
console.log('x:', x);

/* ahora puedo usar un operador ++ o --*/

x += 2;
console.log('x:', x);

x++;
console.log('x:', x);

x--;
console.log('x:', x);


