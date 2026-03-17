//criando variaveis do tipo Array (Vetot)

var dinos = ["Tiranoussauro rex", "Estrogossauro", "Brotossauro", "Velocirapitor"];

console.log(dinos)
console.table(dinos)

// lenght - > "Tamanho" do Array (Quantidade de elementos)
console.log("O vetor tem", dinos.length, "elementos");

// Imprimir Elemento a partir do indice
console.log(dinos [2]);

// push - > Adicione um novo elemento no final da fila
dinos.push("Anquilossauro");
console.log("dinossauro")
console.log("O vetor agora tem", dinos.length, "elementos");

// unshift -> Adiociona um novo elemento no inicio da fila
dinos.unshift("Velocirapitor");
console.log("1ª posição:", dinos[0])
console.log("4ª posição:", dinos[3])
console.log("20ª posição (não exite):", dinos[20])

// pop - > Remover um elemento do final do vetor (ultimo elemento)
dinos.pop();
console.table(dinos);
console.log("O vetor agora tem", dinos.length, "elementos");

// shift- > Remover um elemento do final do vetor (primeiro elemento)
dinos.shift();
console.table(dinos);
console.log("O vetor agora tem", dinos.length, "elementos");

// spice - > Removendo um elemento a partir de um indice, e tembem precisa infromada a quantidade de registro a ser excluido a partir do indice
dinos.splice(1, 1)// Remove somente o segundo item da lista
console.log("O vetor agora tem", dinos.length, "elementos")

// Adicionar mais elementos ao vetor
dinos.push("Pterodáctilo")
dinos.push("Estragossauro")
dinos.push("Argentinossauro")

// Procurar mu elemento a partir do nome (descrição)
// indexOf(procurado) - > retorna o indice do elemento no vetor
let procurando = "Estragossauro"
let indece = dinos.indexOf(procurado)
console.log("O ", procurando, "está no indice:", indice)

// Excluir um elemente 

