/***************************************************** 
Exercícios para fixação 
*****************************************************/
/* 
1. Crie uma variável e atribua o nome de uma pessoa;
2. Crie uma variável e atribua o nome de um banco; 
3. Crie uma variável e atribua o número da agência; 
4. Crie uma variável e atribua o número da conta; 
5. Crie uma variável e atribua o saldo da conta; 
6. Imprima os dados e o saldo da conta; 
7. Efetue e imprima 5 movimentações na conta; 
8. Imprima novamente os dados e o saldo da conta; 
*/

//sistema de bank
let nome = "joao vitor";
let bank = "nubank";
let agencia = 1234_5;
let conta = 12345_5;
let saldo = 367.0;

console.log(" ==============================");
console.log("->           nubank          <-");
console.log(" ===============================");
console.log("Bemvindo ", nome);
console.log("agencia: ", agencia, "| Conta: ", conta);
console.log("seu asldo atual é:",saldo);
console.log("Movimentação");
console.log("compra aprovada de 50,00$");
saldo = 500 - 50;
console.log("saldo:", saldo);
console.log("voçe resecebeu um pix de 700$");
saldo = saldo + 700;
console.log("saldo:", saldo);
console.log("voçe tranferiu um saldo de 20$");
saldo = saldo - 20;
console.log("saldo:", saldo);
