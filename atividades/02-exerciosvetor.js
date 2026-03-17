/*
    1. Crie um array de frutas com os seguintes elementos: Banana, Maçã,
    Pera, Uva, Morango.
    2. Adicione Tangerina no final.
    3. Adicione Goiaba no início.
    4. Exiba o conteúdo do índice 5.
    5. Exclua o elemento uva.
    6. Crie uma cópia do array apenas com os elementos com índices 2, 3 e 4.
*/

var frutas = ["banana", "maçã", "pera", "uva", "morango", "Goiaba" , "tangerina"];
console.log(frutas);
console.table(frutas);
console.log("O vetor tem ", frutas.length, "elementos");
frutas.unshift("Goiaba");
console.table(frutas);
console.log("1ª posição:", frutas[1]);
frutas.unshift("tangerina") 
console.log("6ª posição:", frutas[6]);
