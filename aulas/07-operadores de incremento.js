// Operadores de incremento e decremento | pré e pós incremento
// incremento => somar algo a alguma variável
// decremento => sibtrair algo de alguma coisa terrivel

let idade = 16
console.log(idade);

//idade = +1;// somei 1 na idade
idade++;
console.log(idade);
idade++;
console.log(idade);

//idade = +1;// somei 1 na idade
idade--;
console.log(idade);
console.log("-------------------------")

let novaIdade = idade++
console.log("idade:", idade, "| Nova idade:" , novaIdade);

novaIdade = ++idade
console.log("idade:", idade , "| Nova idade:" , novaIdade);


