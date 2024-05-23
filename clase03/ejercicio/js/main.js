const dia = prompt('ingresa el dia de la semana:');

if (dia === 'lunes') {
    console.log('"Hoy atendemos de 10 a 19h. Podés venir personalmente."');
}
else if (dia === 'martes') {
    console.log('"Hoy atendemos de 10 a 19h. Podés venir personalmente."');
}
else if (dia === 'miercoles') {
    console.log('"Hoy atendemos de 10 a 19h. Podés venir personalmente."');
}
else if (dia === 'jueves') {
    console.log('"Hoy atendemos de 10 a 19h. Podés venir personalmente."');
}
else if (dia === 'viernes') {
    console.log('"Hoy atendemos de 10 a 19h. Podés venir personalmente."');
}
else if (dia === 'sabado') {
    console.log('"Hoy podés contactarnos por teléfono de 10 a 14h"');
}
else if (dia === 'domingo') {
    console.log('"Hoy no atendemos personalmente"');
}
else {
    console.error('"El dia' ,dia, 'no es correcto"');
}
