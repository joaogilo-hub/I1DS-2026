/*****************************************************
Lista de Exercícios
*****************************************************/
/*
Dada a matriz abaixo, faça um programa em JavaScript
que imprima os elementos da sua diagonal principal.
| 3 5 8 |
| 1 9 2 |
| 7 1 4 |
********************************************************
Dada a matriz abaixo, faça um programa em JavaScript
que multiplique seus elementos por um valor x e imprima
a matriz antes e após a multiplicação.
| 8 1 3 |
| 2 9 1 |
| 4 6 2 |
*/

let matriz = [
  [6, 5, 8],
  [1, 9, 2],
  [7, 3, 4],
];
console.table(matriz);

for (let linha = 0; linha < matriz.length; linha++) {
  for (let coluna = 0; coluna < matriz[0].length; coluna++)
    console.log("Matriz[", linha, ",", coluna, "] =", matriz[linha][coluna]);
}

console.table(matriz);

matriz = [3, 5, 8, 1, 9, 2, 7, 1, 4];

console.log("------------------------");
for (let i = 0; i < matriz.length; i++) {
    matriz[i] *= 3; // numeros [i] = numeros [i] * 3;
}
console.table(matriz)

var nome = "joao vitor"
var idade = 17
var cidade = "jau"

console.log(
  "Meu nome é",
  nome,
  "eu tenho",
  idade,
  "anos",
  "e moro em",
  cidade,
  ".",
);

let x = 20;
let y = 4;

console.log("X = ", x, "| Y = ", y);

resultado = x + y;
console.log("A soma é", resultado);

resultado = x - y;
console.log("A subtração é", resultado);

resultado = x * y;
console.log("A multiplicação é", resultado);

resultado = x / y;
console.log("A divisão é", resultado);

let peso = 70;
let altura = 1.7;

let IMC = peso / (altura * altura);

console.log("O seu peso é:", peso);
console.log("A sua altura é:", altura);
console.log("Então o seu IMC é:", IMC);

let n1 = 8;
let n2 = 10;
let n3 = 6;

let media = (n1 + n2 + n3) / 4;

console.log("Nota da primeira prova:", n1);
console.log("Nota da segunda prova:", n2);
console.log("Nota da terceira prova:", n3);
console.log("A sua média é:", media);