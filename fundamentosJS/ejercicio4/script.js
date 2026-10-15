// Ejercicio 4: Condicional de edad
let edad = 20;

if (edad >= 18) {
    document.getElementById('resultado').innerHTML = "Tienes " + edad + " años. Eres mayor de edad.";
} else {
    document.getElementById('resultado').innerHTML = "Tienes " + edad + " años. Eres menor de edad.";
}