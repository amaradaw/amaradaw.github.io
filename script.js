document.addEventListener("DOMContentLoaded", function () {
    const boton = document.querySelector(".boton-hero");
  
    boton.addEventListener("click", function (e) {
      e.preventDefault();

      const mensaje = document.createElement("div");
      mensaje.textContent = "Espere por favor..";
      mensaje.style.position = "fixed";
      mensaje.style.top = "50%";
      mensaje.style.left = "50%";
      mensaje.style.transform = "translate(-50%, -50%)";
      mensaje.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
      mensaje.style.color = "#fff";
      mensaje.style.padding = "20px 30px";
      mensaje.style.borderRadius = "10px";
      mensaje.style.zIndex = "9999";
      mensaje.style.fontSize = "1.2em";
      mensaje.style.boxShadow = "0 0 15px rgba(0,0,0,0.5)";
  
      document.body.appendChild(mensaje);
  
      setTimeout(() => {
        mensaje.remove();
      }, 3000);
    });
  });