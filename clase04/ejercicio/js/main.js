function sonNumeros(num1, num2) {
    return typeof num1 === 'number' && typeof num2 === 'number';
}

function imprimirSuma(num1, num2) {
    if (sonNumeros(num1, num2)) {
        console.log(num1 + num2);
    } else {
        console.error('"Ambos parámetros deben ser números"');
    }
}

function imprimirResta(num1, num2) {
    console.log(num1 - num2);
}

function imprimirMultiplicacion(num1, num2) {
    console.log(num1 * num2);
}

function imprimirDivision(num1, num2) {
    if (num2 !== 0) {
        console.log(num1 / num2);
    } else {
        console.error('"No se puede dividir entre cero"');
    }
}

imprimirSuma(4, 2)
imprimirResta(4, 2)
imprimirMultiplicacion(4, 2)
imprimirDivision(4, 2)

imprimirDivision(4, 0);
imprimirSuma(100, true);