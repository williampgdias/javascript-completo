var numero = 20;
var numero2 = 10;

numero += numero2; // numero = numero + 10

console.log(numero);

////////////////// Operador ternário //////////////////

// condição ? true : false

var idade = 19;
var naoPossuiDiabetes = true;

var podeBeber;
podeBeber = idade >= 18 && naoPossuiDiabetes ? 'Pode beber' : 'Não pode beber';

console.log(podeBeber);

var possuiFaculdade = true;
if (possuiFaculdade) console.log('Sim, possui');
else console.log('Não possui');

// EXERCÍCIO

// Some 500 ao valor de scroll abaixo, atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;
console.log(scroll);

// Atribua TRUE para a variável darCredito, caso o cliente possua carro e casa, e FALSE caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;

darCredito = possuiCarro && possuiCasa;
console.log(darCredito);
