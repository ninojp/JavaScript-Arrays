// Exercício proposto
jantarDeHoje = ['🍔', '🌭', '🍕']
jantarDeHoje.pop()
jantarDeHoje.pop()
jantarDeHoje.push('🍳')
jantarDeHoje.push('🥗')
jantarDeHoje.push('🍏')
console.log(jantarDeHoje);
console.log("\n");

// TRABALHANDO COMO SLICE()
const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];
// console.log(alunos);
// Usado o SLICE() para dividir o array, indicando o INDICE onde começa e o ultimo(que não será colocado)
const sala1 = alunos.slice(0,10);
// Agora indicamos apenas o INDICE onde começa(que será colocado), e automaticamente o SLICE() ira adicionar TODO o restante do array 
const sala2 = alunos.slice(10);
console.log(sala1);
console.log(sala2);
console.log("");
// Outra forma de usar o slice() é automatizando a contagem de INDICEs atravéz do length
const sala3 = alunos.slice(0,alunos.length/2);
const sala4 = alunos.slice(alunos.length/2);
console.log(sala3);
console.log(sala4);
console.log("");

// TRABALHANDO COM O MÉTODO SPLICE(): variavel.splice(indice, quantidade, subtituicao);
const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];
console.log(nomes);
nomes.splice(1, 2, "Rodrigo");
console.log(nomes);
// Pode ser usado apenas para remover, sem indicar o valor de substituição  
nomes.splice(2, 2);
console.log(nomes);
console.log("");
// Execício proposto
animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']
console.log(animaisDoAquario)
animaisDoAquario.splice(1,0,'🐠') //a partir do indice 1, não removeu nada(0), adicionou o peixe
console.log(animaisDoAquario)
animaisDoAquario.splice(3,2,'🐟') //a partir do indice 3, removeu 2, adicionou o outro peixe
console.log(animaisDoAquario)
console.log("");