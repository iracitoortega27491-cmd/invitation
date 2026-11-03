document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("num-edad");
  let actual = 0;
  const destino = 41;
  const velocidad = 60;

  const animar = setInterval(() => {
    el.textContent = actual;
    
    if (actual >= destino) {
      clearInterval(animar);
      el.textContent = destino;
    }
    actual++;
  }, velocidad);
});