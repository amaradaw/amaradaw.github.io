// ejercicio6/script.js
let contador = 10;
let texto = "Conteo regresivo: ";

while (contador >= 0) {
    texto += contador + (contador === 0 ? "." : ", ");
    contador--;
}

document.getElementById('resultado').textContent = texto;