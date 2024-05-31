//busca el primer p ve que tiene y luego lo cambia

const primerParrafo = document.querySelector('p');
console.log(primerParrafo);

console.log('innerText del primer parrafo: ');
console.log(primerParrafo.innerText);

primerParrafo.innerText = 'Nuevo contenido';

console.log('innerText del primer parrafo: (despues) ');
console.log(primerParrafo.innerText);


//busca el primer Li ve que tiene y luego lo cambia

const primerLi = document.querySelector('li');

console.log(primerLi.title);

primerLi.title = 'Ahora el titulo es este'

console.log(primerLi.title);


