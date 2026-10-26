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

// Interacción 2: recuperar los fragmentos del código
const lineas = {
  l1: '  const mision = "proteger la información";',
  l2: '  if (acceso === "autorizado") { abrirArchivos(); }',
  l3: '  return "NOVA lista. Sistema restaurado.";'
};
let recuperados = 0;
document.querySelectorAll('.frag').forEach(btn => {
  btn.addEventListener('click', () => {
    const el = document.getElementById(btn.dataset.linea);
    el.textContent = lineas[btn.dataset.linea];
    el.className = 'ok';
    btn.disabled = true;
    btn.classList.add('hecho');
    recuperados++;
    document.getElementById('estado').textContent = 'Recuperados: ' + recuperados + ' de 3';
    if (recuperados === 3) {
      document.getElementById('estado').textContent = '¡Código completo! Baja al final.';
      document.getElementById('bloqueado').classList.add('oculto');
      document.getElementById('desenlace').classList.remove('oculto');
    }
  });
});

// Interacción 3: elegir entre dos opciones en el final
const caja = document.getElementById('mensajeCreador');
const texto = document.getElementById('textoCreador');
function mostrar(msg){ texto.textContent = msg; caja.classList.remove('oculto'); }
document.getElementById('opA').addEventListener('click', () =>
  mostrar('"Bien hecho, Alex. NOVA te eligió a ti. Esto es solo el Proyecto 0… el Proyecto 1 ya está esperando."'));
document.getElementById('opB').addEventListener('click', () =>
  mostrar('Apagas la computadora. La pantalla se oscurece, pero un último parpadeo escribe: "Volveremos a vernos."'));

// Resaltar sección activa en el menú
const enlaces = document.querySelectorAll('nav a');
const obs = new IntersectionObserver(entradas => {
  entradas.forEach(e => { if (e.isIntersecting) {
    enlaces.forEach(a => a.classList.toggle('activo', a.getAttribute('href') === '#' + e.target.id));
  }});
}, { rootMargin: '-40% 0px -55% 0px' });
document.querySelectorAll('section[id]').forEach(s => obs.observe(s));
