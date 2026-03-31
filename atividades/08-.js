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


 // ------------------ DADOS PESSOAIS ------------------
var nome = "Joao Vitor";
var idade = 18;
var cidade = "Jaú";

console.log("Meu nome é", nome, "eu tenho", idade, "anos e moro em", cidade);

// ------------------ ÁREA RETÂNGULO ------------------
let base = 10;
let alturaRet = 5;
let area = base * alturaRet;

console.log("Área do retângulo:", area);

// ------------------ VOLUME PARALELEPÍPEDO ------------------
let comprimento = 10;
let largura = 5;
let alturaPar = 3;

let volume = comprimento * largura * alturaPar;

console.log("Volume do paralelepípedo:", volume);

// ------------------ IMC ------------------
let peso = 70;
let altura = 1.7;

let imc = peso / (altura * altura);

console.log("IMC:", imc);

// ------------------ MÉDIA ------------------
let n1 = 8;
let n2 = 10;
let n3 = 6;

let media = (n1 + n2 + n3) / 3;

console.log("Média:", media);

// ------------------ DELTA ------------------
let a = 1;
let b = -5;
let c = 6;

let delta = b ** 2 - 4 * a * c;

console.log("Delta:", delta);

// ------------------ TEMPO ------------------
let horas = 2;

console.log("Minutos:", horas * 60);
console.log("Segundos:", horas * 3600);

// ------------------ POSITIVO/NEGATIVO ------------------
let numero = -5;

if (numero > 0) {
  console.log("Positivo");
} else if (numero < 0) {
  console.log("Negativo");
} else {
  console.log("Zero");
}

// ------------------ PAR OU ÍMPAR ------------------
let numero2 = 5;

if (numero2 % 2 == 0) {
  console.log("Par");
} else {
  console.log("Ímpar");
}

// ------------------ MÚLTIPLO DE 3 ------------------
let numero3 = 15;

if (numero3 % 3 == 0) {
  console.log("Múltiplo de 3");
} else {
  console.log("Não é múltiplo de 3");
}

// ------------------ ENTRE 10 E 50 ------------------
let numIntervalo = 50;

if (numIntervalo >= 10 && numIntervalo <= 50) {
  console.log("Está entre 10 e 50");
} else {
  console.log("Não está entre 10 e 50");
}

// ------------------ LOGIN ------------------
const login = "admin";
const senha = "12345";

let loginUser = "admin";
let senhaUser = "12345";

if (loginUser === login && senhaUser === senha) {
  console.log("Login OK");
} else {
  console.log("Acesso negado");
}

// ------------------ MAIOR NÚMERO ------------------
let num1 = 10;
let num2 = 11;

if (num1 > num2) {
  console.log(num1, "é maior");
} else if (num1 === num2) {
  console.log("Iguais");
} else {
  console.log(num2, "é maior");
}

// ------------------ DIA DA SEMANA ------------------
let dia = 3;

switch (dia) {
  case 1: console.log("Segunda"); break;
  case 2: console.log("Terça"); break;
  case 3: console.log("Quarta"); break;
  case 4: console.log("Quinta"); break;
  case 5: console.log("Sexta"); break;
  case 6: console.log("Sábado"); break;
  case 7: console.log("Domingo"); break;
  default: console.log("Inválido");
}

// ------------------ MÊS ------------------
let mes = 5;

switch (mes) {
  case 1: console.log("Janeiro"); break;
  case 2: console.log("Fevereiro"); break;
  case 3: console.log("Março"); break;
  case 4: console.log("Abril"); break;
  case 5: console.log("Maio"); break;
  case 6: console.log("Junho"); break;
  case 7: console.log("Julho"); break;
  case 8: console.log("Agosto"); break;
  case 9: console.log("Setembro"); break;
  case 10: console.log("Outubro"); break;
  case 11: console.log("Novembro"); break;
  case 12: console.log("Dezembro"); break;
  default: console.log("Mês inválido");
}

// ------------------ NOTA ------------------
let nota = "D";

switch (nota) {
  case "A": console.log("Excelente"); break;
  case "B": console.log("Bom"); break;
  case "C": console.log("Regular"); break;
  case "D": console.log("Ruim"); break;
  default: console.log("Inválido");
}

// ------------------ CALCULADORA ------------------
let operacao = "Multiplicar";
let x = 5;
let y = 2;

switch (operacao) {
  case "Soma": console.log(x + y); break;
  case "Subtrair": console.log(x - y); break;
  case "Multiplicar": console.log(x * y); break;
  case "Dividir": console.log(x / y); break;
  default: console.log("Inválido");
}

// ------------------ CONTAGEM ------------------
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

// ------------------ FATORIAL ------------------
let fatNum = 5;
let resultado = 1;

for (let i = fatNum; i > 0; i--) {
  resultado *= i;
}

console.log("Fatorial:", resultado);

// ------------------ TABUADA ------------------
let tab = 24;

for (let i = 1; i <= 10; i++) {
  console.log(tab, "x", i, "=", tab * i);
}

// ------------------ CONTAR PARES ------------------
let contador = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) contador++;
}

console.log("Pares:", contador);

// ------------------ ESCADA ------------------
let estrela = "*";

for (let i = 1; i <= 5; i++) {
  console.log(estrela);
  estrela += "*";
}

// ------------------ ARRAY ------------------
let numeros = [];

for (let i = 1; i <= 10; i++) {
  numeros.push(i);
}

console.table(numeros);

//41. Conte quantos números são pares e ímpares.

var num = [12, 2, 31, 4, 259, 26, 7, 18, 9];
let contador1 = 0;
let contador2 = 0;

for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 == 0) {
        contador1 += 1;
    } else {
        contador2 += 1;
    }
}

console.log("-> Quantidade de Números PARES:", contador1);
console.log("-> Quantidade de Números IMPARES:", contador2);

//42. Multiplique todos os elementos por 2.

var num = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

for (let i = 0; i < num.length; i++) {
    num[i] *= 2
}

console.table(num);


//43. Crie uma matriz 3x3 e exiba todos os valores.

var matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.table(matriz);

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log("Posição [", i, ",", j, "] =", matriz[i][j]);
        
    }
}


//44. Exiba a diagonal principal de uma matriz.

var matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.table(matriz);

for (let l = 0; l < matriz.length; l++) {
    for (let c = 0; c < matriz[l].length; c++) {
        if (l == c) {
            console.log(matriz[l][c]);
        }
    }
}

//45. Exiba a diagonal secundária.

var matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.table(matriz);

for (let l = 0; l < matriz.length; l++) {
    for (let c = 0; c < matriz[l].length; c++) {
        if (l + c === 2) {
            console.log(matriz[l][c]);
        }
    }
}


var matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.table(matriz);

let soma = 0;

for (let l = 0; l < matriz.length; l++) {
    for (let c = 0; c < matriz[l].length; c++) {
        soma += matriz[l][c];

    }
}


console.log("-> A soma de todos os valores da Matriz é:", soma);

var matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.table(matriz);

let maior = matriz[0][0];

for (let l = 0; l < matriz.length; l++) {
    for (let c = 0; c < matriz[l].length; c++) {
        if (matriz[l][c] > maior) {
            maior = matriz[l][c]
        }
    }
}

 
console.log("-> O maior valor é o número:", maior);

var matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.table(matriz);

let x = 2;

for (let l = 0; l < matriz.length; l++) {
    for (let c = 0; c < matriz[l].length; c++) {
        matriz[l][c] *= x;

    }
}

console.table(matriz);
 

