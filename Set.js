
// Entendendo o SET
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Set

const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];
// const setNomes = new Set(nomes);
// const nomesAtualizados = [...setNomes];
const nomesAtualizados = [...new Set(nomes)]; // MODO SIMPLIFICADO, unindo as duas declarações acima em uma só
// console.log(setNomes, typeof setNomes); //apenas curiosidade, ver o tipo
console.log(nomesAtualizados, typeof nomesAtualizados);
//===============================================================================================================================

// Conclusão deste módulo, o que aprendemos.

// Como utilizar o filter e o reduce:
// Aprendemos mais métodos modernos do JavaScript que nos ajudam em situações mais específicas. Utilizamos o filter para criar um array filtrado
//a partir de um existente e o reduce para acumular valores de um array em um só. Como clonar arrays com o spread operator ...:
// Entendemos o problema de referência do JavaScript ao tentar atribuir um array a um novo. Para resolver esse problema, 
//utilizamos o spread operator para espalhar todos os valores de um array em um novo, realizando a clonagem com sucesso.
// Como utilizar a estrutura Set:
// Vimos como criar um Set a partir de um array existente, a fim de remover todas as suas duplicatas. Em seguida,
//utilizamos o spread operator para converter o Set de volta em um lista.