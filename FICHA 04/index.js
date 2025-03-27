// Importa modulo data.js
import * as data from "./data.js";

let listUsers = [];
listUsers = data.init();

//console.log(listUsers)

function listasNivel(nivel) {
  listUsers
    .filter((user) => user.nivel == nivel)
    .forEach((user) => console.log(user.nome, user.nivel));
}

listasNivel(2);

/* function somarPontos(nivel) {
  let pontos = 0;
  listUsers
    .filter((user) => user.nivel == nivel)
    .forEach((user) => (pontos += user.pontos));

  alert(pontos);
} */

function somarPontos(nivel) {
  let soma = listUsers
    .filter((user) => user.nivel == nivel)
    .reduce((sum, user) => sum + user.pontos, 0);
  return soma;
}

console.log(somarPontos(2));

function verficarNivel(nivel) {
  return listUsers.some((user) => user.nivel == nivel);
}

console.log(verficarNivel(2));

function pesquisarColecionaveis(colecionaveis) {
  return listUsers
    .flatMap((user) => user.colecionaveis)
    .some((colecion) => colecion == colecionaveis);
}

console.log(pesquisarColecionaveis("badge 1"));

function mostrarJogadores(colecionaveis) {
  return listUsers
    .filter((user) => user.colecionaveis.includes(colecionaveis))
    .map((user) => user.nome);
}

console.log(mostrarJogadores("badge 1"));

function listaTabClass() {
  listUsers
    .toSorted((a, b) => b.pontos > a.pontos)
    .forEach((user) => console.log(user.nome, user.pontos));
}

listaTabClass();

function giveReward(nivel) {
  return listUsers
    .filter((user) => user.nivel == nivel)
    .map((user) => ({
      nome: user.nome,
      pontos: user.pontos + 100,
    }));
}

console.log(giveReward(2));

function sumPontos() {
  return listUsers.reduce((sum, user) => sum + user.pontos, 0);
}

console.log(sumPontos());
