// ejercicio2/script.js
function calcular() {
    const num1 = 15;
    const num2 = 5;
    const suma = num1 + num2;
    const resta = num1 - num2;
    const mult = num1 * num2;
    const div = num1 / num2;

    document.getElementById('resultado').innerHTML = 
        `Número 1: ${num1}, Número 2: ${num2}<br>` +
        `Suma: ${suma} | Resta: ${resta} | Multiplicación: ${mult} | División: ${div}`;
}
calcular();