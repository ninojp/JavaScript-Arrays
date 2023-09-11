
// FOREACH
const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];
// Ao contrário de for e for…of, o forEach() é um método do objeto Array. (Em programação, chamamos de método uma função que é propriedade de um objeto.)
// O método de array .forEach lê to o array e nos trás todos os ITENS(elementos) e seus INDICES
// ForEach, usando uma função declarada externamente
// Os PARAMETROS(nome, indice) passados na função são opcionais, o primeiro referrece ao ELEMENTO(item do array) e o segundo o INDICE(posição dentro do array)
console.log('ForEach, usando uma função declarada externamente');
function imprimiNomes(elemento, indice){
    console.log(elemento, indice);
}
nomes.forEach(imprimiNomes);
console.log('\n');
//-------------------------------------------------------------------------------------------------------------------------------

// Nos permitindo ainda passar(obrigatório) uma função anônima(neste caso, função call back), para (tratar cada item) deste array
// basicamente uma função CALL BACK é uma função que esta sendo declarada(chamada) DENTRO de outra função.
console.log('forEach, usando uma função anônima');
nomes.forEach(function(item, indice){
    console.log(`Cada item do Array: ${item} e seu indice é: ${indice}.`)
})
console.log('\n');
//-------------------------------------------------------------------------------------------------------------------------------

// Podemos também usar como parametro dentro do forEach, uma ARROW FUNCTION (função anônima em forma de seta)
console.log('forEach, usando uma arrow function');
nomes.forEach((nome, posicao) => {
    console.log(nome, posicao);
}) 