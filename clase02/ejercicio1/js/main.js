console.warn('Punto 2');
const nombre = 'PHP';
const diasDeCursada = 'lunes y miercoles';
const horarioDeInicio = 15;
const horaDeFinalizacion = 18;

console.warn('Punto 3');
console.log('nombre:', nombre);
console.log('Dias de cursada:', diasDeCursada);
console.log('Horario de Inicio:', horarioDeInicio);
console.log('Horario de Finalizacion:', horaDeFinalizacion);

console.group('curso');
console.log('nombre:', nombre);
console.log('Dias de cursada:', diasDeCursada);
console.log('Horario de Inicio:', horarioDeInicio);
console.log('Horario de Finalizacion:', horaDeFinalizacion);
console.groupEnd();

console.warn('Punto 4');
console.log('nombre:', nombre + ',' + ' Dias de cursada:', diasDeCursada + ',' + ' Horario de Inicio:', horarioDeInicio + ',' + ' Horario de Finalizacion:', horaDeFinalizacion);

console.group('curso completo');
console.log('nombre:', nombre + ',' + ' Dias de cursada:', diasDeCursada + ',' + ' Horario de Inicio:', horarioDeInicio + ',' + ' Horario de Finalizacion:', horaDeFinalizacion);
console.groupEnd();

