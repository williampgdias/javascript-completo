window.location;

const href = window.location.href;

console.log(href);

if (href === 'http://127.0.0.1:5500/o-que-e-dom/index.html') {
  console.log('É Igual!');
} else {
  console.log('Não não não!');
}

const h1Selecionado = document.querySelector('h1');

function handleClick() {
  console.log('Clicou em ', h1Selecionado.innerText);
}

h1Selecionado.addEventListener('click', handleClick);

// EXERCÍCIO

// RETORNE O URL DA PÁGINA ATUAL UTILIZANDO O OBJETO WINDOW
const hrefPagina = window.location.href;
console.log(hrefPagina);

// SELECIONA O PRIMEIRO ELEMENTO DA PÁGINA QUE POSSUA A CLASSE ATIVO
const elementoAtivo = document.querySelector('.ativo');
console.log(elementoAtivo);

// RETORNE A LINGUAGEM DO NAVEGADOR
const linguagem = window.navigator.language;
console.log(linguagem);

// RETORNE A LARGURA DA JANELA
const largura = window.innerWidth;
console.log(largura);
