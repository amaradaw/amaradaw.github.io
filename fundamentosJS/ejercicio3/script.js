// ejercicio3/script.js
function verificarNumero(num) {
    const esPar = num % 2 === 0;
    const resultadoText = `El número ${num} es ${esPar ? 'PAR' : 'IMPAR'}.`;
    document.getElementById('resultado').textContent = resultadoText;
}
verificarNumero(7);