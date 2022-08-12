window.location;

const href = window.location.href;

console.log(href);

if (href === 'http://127.0.0.1:5500/o-que-e-dom/index.html') {
  console.log('É Igual!');
} else {
  console.log('Não não não!');
}

const h1Selecionado = document.querySelector('h1');

console.log(h1Selecionado);

h1Selecionado.innerHTML = 'Oie'
