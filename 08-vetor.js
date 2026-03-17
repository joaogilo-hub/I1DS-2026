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