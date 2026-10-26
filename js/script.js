// Menú móvil
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
burger.addEventListener('click', () => {
  const abierto = menu.classList.toggle('abierto');
  burger.setAttribute('aria-expanded', abierto);
});
menu.addEventListener('click', () => { menu.classList.remove('abierto'); burger.setAttribute('aria-expanded', false); });

// Interacción 1: revelar / ocultar la pista secreta
const btnPista = document.getElementById('btnPista');
const pista = document.getElementById('pistaSecreta');
btnPista.addEventListener('click', () => {
  const visible = pista.classList.toggle('oculto') === false;
  btnPista.textContent = visible ? 'Ocultar pista' : 'Revelar pista secreta';
  btnPista.setAttribute('aria-expanded', visible);
});


// Pendiente: fragmentos del código y final con dos opciones
