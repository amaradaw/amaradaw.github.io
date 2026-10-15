// Ejercicio 6: Cuenta atrás con bucle while
let contador = 10;
let resultado = "Cuenta atrás: ";

while (contador >= 0) {
    resultado += contador + " ";
    contador--;
}

document.getElementById('resultado').innerHTML = resultado;