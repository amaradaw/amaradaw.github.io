// ejercicio4/script.js
function evaluarEdad(edad) {
    let res = "";
    if (edad >= 18) {
        res = `Tiene ${edad} años: Es mayor de edad.`;
    } else {
        res = `Tiene ${edad} años: Es menor de edad.`;
    }
    document.getElementById('resultado').textContent = res;
}
evaluarEdad(20);