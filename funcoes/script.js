function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(2));

function pi() {
  return 3.14;
}

var total = 5 * pi();

console.log(total);

function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}

console.log(imc(80, 1.8));

function corFavorita(cor) {
  if (cor === 'azul') {
    return 'Eu gosto do céu';
  } else if (cor === 'verde') {
    return 'Eu gosto de mato';
  } else {
    return 'Eu não gosto de cores';
  }
}

addEventListener('click', function () {
  console.log('oi');
});

// FUNÇÕES 2

function imc2(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}

imc2(85, 1.8);

function terceiraIdade(idade) {
  console.log(typeof idade);
  if (typeof idade !== 'number') {
    return 'Por favor, preencha um número';
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade('oi'));

function faltaVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Falta visitar ${totalPaises - paisesVisitados} países`;
}

var profissao = 'Web Developer';

function dados() {
  var nome = 'William';
  var idade = 30;
  function outrosDados() {
    var endereco = 'Enniscorthy';
    var idade = 33;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados());
