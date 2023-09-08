// Os ARRAYs são estruturas de dados que representam listas de dados: variavelArray = ["item1", "item2", "item3"];
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
// Os arrays podem ser declarados sem valor inicial
const arrayVazia = [];
console.log(arrayVazia);
console.log(arrayVazia.length);
console.log(arrayVazia[0]);
console.log(''); // usado apenas pra criar uma linha vazia

//Criamos um array com 3 posições, porém em nenhuma dessas posições existe um valor.
const arrayVazia1 = [,,,];
console.log(arrayVazia1.length)
console.log(arrayVazia1[0])
console.log(arrayVazia1[1])
console.log(arrayVazia1[2])
console.log('\n'); // usado apenas pra criar duas linhas vazias

//O JavaScript manteve as posições vazias e adicionou o 50 ao final do array. Após a execução, ele passou a ter 4 posições, mas somente um elemento (o número 50). 
//Chamamos este tipo de estrutura de array esparso e é importante lembrar deste comportamento dos arrays em JavaScript enquanto trabalhamos.
console.log(arrayVazia1.length)
arrayVazia1.push(50)
console.log(arrayVazia1)
console.log(arrayVazia1.length)
console.log('\n');

// Array simples
var notas = [10, 6.5, 8, 7.5];
console.log(notas);
console.log(typeof notas);

// A propriedade length é muito útil para trabalharmos com arrays, pois ele faz a contagem de elementos de um array.
console.log('Quantidade de Indices: '+notas.length);

// Os arrays podem conter os tipos primitivos de valores misturados
let tiposvariados = ["item", 4.5, true, 7, "item2"];
console.log(tiposvariados);


/************************************************************************************************************************************************************
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

Um método é uma função que serve como uma propriedade do array ou de um objeto (que veremos em outro curso). 
Ele pode realizar tarefas pré-definidas usando os dados do array e dos parâmetros que passamos para eles, como adicionar, remover ou até encontrar elementos.
Existem muitos métodos para conseguir lembrar de todos, mas vamos listar os principais para a aprendizagem. São eles: */

// concat()
// Junta dois arrays, colocando o array passado como argumento, logo depois do primeiro. Em português essa operação é conhecida como concatenação.
// Não altera o array no qual foi chamado, então precisamos salvar esse resultado em um novo array.
var notas2 = [9, 6.5, 3, 10];
let concatNotas = notas.concat(notas2);
console.log(concatNotas);
//-----------------------------------------------------------------------------------------------------------------------

/*
filter()
Retorna uma lista contando todos os elementos que passaram em um teste, ou seja, uma função escrita por nós.
Não altera o array onde foi chamado, então precisamos salvar esse resultado em um novo array.
//-----------------------------------------------------------------------------------------------------------------------

find()
Funciona de forma parecida com o filter, porém retorna apenas o primeiro valor que satisfizer o teste, podendo ser uma string ou um número.
//-----------------------------------------------------------------------------------------------------------------------

findIndex()
Funciona igual o find(), mas retorna o índice em vez do elemento, possibilitando usá-lo em outras partes do código.
//-----------------------------------------------------------------------------------------------------------------------

lastIndexOf()
É igual o findIndex() porém começa do último elemento, não no primeiro.
//-----------------------------------------------------------------------------------------------------------------------

forEach()
Executa uma função em cada elemento do array de forma individual.
Não altera o array original e nem retorna um valor, deixando esse trabalho a cargo da função escolhida.
*/
//-----------------------------------------------------------------------------------------------------------------------

// pop()
// Retira o último elemento do array.
// Altera o array original removendo o elemento.
notas.pop();
console.log(notas); //Exibe [ 10, 6.5, 8 ]
console.log("\n");
//-----------------------------------------------------------------------------------------------------------------------

//shift()
//Retira o primeiro elemento do array.
// Altera o array original removendo o elemento e trocando o índice de todos os elementos para um a menos do que eram, o índice 1 passa a ser o 0, o 2 passa a ser o 1, e assim por diante.
notas.shift();
console.log(notas); //Exibe [ 6.5, 8 ]
console.log("\n");
//-----------------------------------------------------------------------------------------------------------------------

// push()
// Adiciona o elemento passado como parâmetro do array, porém na última posição.
// Altera o array original com o novo valor.
notas.push(9);
console.log(notas); //Exibe [ 6.5, 8, 9 ]
console.log("\n");
//-----------------------------------------------------------------------------------------------------------------------

// unshift()
// Funciona igual ao push(), porém adiciona na primeira posição e acaba trocando o índice de todos os elementos.
// Altera o array original com o novo valor.
notas.unshift(5);
console.log(notas); //Exibe [ 6.5, 8, 9 ]
console.log("\n");
//-----------------------------------------------------------------------------------------------------------------------

// reduce()
// Utiliza uma função definida pelo usuário em cada um dos elementos, guardando o resultado em uma variável que pode ser acessada dentro da função que foi definida, retornando um único valor no final, reduzindo o array para um único valor.
//-----------------------------------------------------------------------------------------------------------------------

// reduceRight()
// Funciona igual o reduce() porém começa do final do array e segue até o início.
//-----------------------------------------------------------------------------------------------------------------------

// reverse()
// Inverte a ordem dos elementos do array, então o primeiro vira o último, o segundo o penúltimo e assim por diante.
//-----------------------------------------------------------------------------------------------------------------------

// slice()
// Copia uma parte do array para outro array.
console.log(notas2);
const notasParte1 = notas2.slice(notas2.length/2);
const notasParte2 = notas2.slice(0,notas2.length/2);
console.log(notasParte1);
console.log(notasParte2);
console.log("\n");
//-----------------------------------------------------------------------------------------------------------------------

// sort()
// Organiza o array de acordo com a classificação Unicode, onde os números vêm antes das letras, porém não funciona corretamente para números, onde temos que definir uma função que irá auxiliar o comando.
//-----------------------------------------------------------------------------------------------------------------------

// splice()
// Consegue remover, um ou mais elementos consecutivos caso o segundo parâmetro tenha um valor maior que 0, e incluir um ou mais elementos a partir de um índice escolhido.
// este método altera o array atual, nomeArray.splice(indice-onde-começa-remoção, numero-quantidade, valor-para-colocar-no-lugar);
console.log(notas); //[ 5, 6.5, 8, 9 ]
notas.splice(1, 2, 7.8, 9.6, 8);
console.log(notas); //Exibi [ 5, 7.8, 9.6, 8, 9 ]
console.log("\n");