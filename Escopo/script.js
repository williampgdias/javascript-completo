'use strict';

var carro = 'Fusca';

function mostrarCarro() {
  console.log(carro);
}

mostrarCarro(); // Fusca no console
console.log(carro); // Erro, carro is not defined

if (true) {
  let mes = 'Dezembro';
  console.log(mes);
}

// for (let i = 0; i < 11; i++) {
//   console.log(`Número ${i}`);
// }

// console.log(i * 10);

const semana = 'Sexta';
console.log(semana);
