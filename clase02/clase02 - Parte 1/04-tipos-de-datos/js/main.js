console.warn('string');
const string1 = 'Hola';
const string2 = 'Ho' + 'la';
const string3 = string1;
const string4 = '';
const string5 = ' ';
const string6 = '123';
const string7 = 'true';
const string8 = 'false';
const string9 = 'null';
const string10 = 'undefined';
const string11 = 'NaN';
const string12 = 'Infinity';

console.log('string1:', typeof string1, '"' + string1 + '"');
console.log('string2:', typeof string2, '"' + string2 + '"');
console.log('string3:', typeof string3, '"' + string3 + '"');
console.log('string4:', typeof string4, '"' + string4 + '"');
console.log('string5:', typeof string5, '"' + string5 + '"');
console.log('string6:', typeof string6, '"' + string6 + '"');
console.log('string7:', typeof string7, '"' + string7 + '"');
console.log('string8:', typeof string8, '"' + string8 + '"');
console.log('string9:', typeof string9, '"' + string9 + '"');
console.log('string10:', typeof string10, '"' + string10 + '"');
console.log('string11:', typeof string11, '"' + string11 + '"');
console.log('string12:', typeof string12, '"' + string12 + '"');

console.warn('number');
const number1 = 200;
const number2 = 195 + 5;
const number3 = number1 + 50 - 25 - 20 - 5;
const number4 = 18.2;
const number5 = -45;
const number6 = 0;
const number7 = Infinity;       // Infinity
const number8 = 80 / 0;         // Infinity
const number9 = NaN;            // NaN
const number10 = 20 * 'abc';    // NaN
console.log('number1:', typeof number1, number1);
console.log('number2:', typeof number2, number2);
console.log('number3:', typeof number3, number3);
console.log('number4:', typeof number4, number4);
console.log('number5:', typeof number5, number5);
console.log('number6:', typeof number6, number6);
console.log('number7:', typeof number7, number7);
console.log('number8:', typeof number8, number8);
console.log('number9:', typeof number9, number9);
console.log('number10:', typeof number10, number10);

console.warn('boolean');
console.error('true:');
const boolean1 = true;
const boolean2 = 2 < 3;
const boolean3 = 2 <= 2;
const boolean4 = 20 > 5;
const boolean5 = 20 >= 20;
const boolean6 = 37 === 37;
const boolean7 = 37 == '37';
const boolean8 = 'abc' != 'xxx';
const boolean9 = '18' !== 18;
const boolean10 = !false;
const boolean11 = !!true;
const boolean12 = !!!!true;

console.log('boolean1:', typeof boolean1, boolean1);
console.log('boolean2:', typeof boolean2, boolean2);
console.log('boolean3:', typeof boolean3, boolean3);
console.log('boolean4:', typeof boolean4, boolean4);
console.log('boolean5:', typeof boolean5, boolean5);
console.log('boolean6:', typeof boolean6, boolean6);
console.log('boolean7:', typeof boolean7, boolean7);
console.log('boolean8:', typeof boolean8, boolean8);
console.log('boolean9:', typeof boolean9, boolean9);
console.log('boolean10:', typeof boolean10, boolean10);
console.log('boolean11:', typeof boolean11, boolean11);
console.log('boolean12:', typeof boolean12, boolean12);

console.error('false');
const boolean13 = false;
const boolean14 = 2 > 7;
const boolean15 = 7 < 5;
const boolean16 = 8 === 7.14;
const boolean17 = 8 === '8';
const boolean18 = 50 != 50;
const boolean19 = 40 != '40';
const boolean20 = 7 !== 7;
const boolean21 = !true;
const boolean22 = !!false;
const boolean23 = !!!!false;

console.log('boolean13:', typeof boolean13, boolean13);
console.log('boolean14:', typeof boolean14, boolean14);
console.log('boolean15:', typeof boolean15, boolean15);
console.log('boolean16:', typeof boolean16, boolean16);
console.log('boolean17:', typeof boolean17, boolean17);
console.log('boolean18:', typeof boolean18, boolean18);
console.log('boolean19:', typeof boolean19, boolean19);
console.log('boolean20:', typeof boolean20, boolean20);
console.log('boolean21:', typeof boolean21, boolean21);
console.log('boolean22:', typeof boolean22, boolean22);
console.log('boolean23:', typeof boolean23, boolean23);

console.warn('undefined');
let undefined1 = undefined;     // undefined
let undefined2;                 // undefined
console.log('undefined1:', typeof undefined1, undefined1);
console.log('undefined2:', typeof undefined2, undefined2);

console.warn('null (se muestra como "object")');
const null1 = null;                             // null
const null2 = document.querySelector('h2');     // null
console.log('null1:', typeof null1, null1);
console.log('null2:', typeof null2, null2);

console.warn('object');
const object1 = {nombre: 'Martín', apellido: 'Rodríguez'};
const object2 = {nombre: 'Martín', apellido: 'Rodríguez'};
const object3 = {codigo: 135, descripcion: 'TV de 75 pulgadas', marca: 'Philips', precio: 4500};
console.log('object1:', typeof object1, object1);
console.log('object2:', typeof object2, object2);
console.log('object3:', typeof object3, object3);
