// Ejercicio 3: Saber si un número es par o impar
let numero = 7;

if (numero % 2 === 0) {
    document.getElementById('resultado').innerHTML = "El número " + numero + " es PAR.";
} else {
    document.getElementById('resultado').innerHTML = "El número " + numero + " es IMPAR.";
}