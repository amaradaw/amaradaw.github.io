// ejercicio5/script.js
function tablaMultiplicar(numero) {
    let salida = `<strong>Tabla del ${numero}:</strong><br>`;
    for (let i = 1; i <= 10; i++) {
        salida += `${numero} x ${i} = ${numero * i}<br>`;
    }
    document.getElementById('resultado').innerHTML = salida;
}
tablaMultiplicar(5);