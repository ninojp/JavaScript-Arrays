// Os ARRAYs são estruturas de dados que representam listas de dados: variavelArray = ["item1", "item2", "item3"];
// Também chamado de vetor, matriz ou arranjo, o array é a mais comum das estruturas de dados. Um array é uma lista ordenada de valores:
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
console.log(''); // usado apenas pra criar duas linhas vazias

//O JavaScript manteve as posições vazias e adicionou o 50 ao final do array. Após a execução, ele passou a ter 4 posições, mas somente um elemento (o número 50). 
//Chamamos este tipo de estrutura de array esparso e é importante lembrar deste comportamento dos arrays em JavaScript enquanto trabalhamos.
console.log(arrayVazia1.length)
arrayVazia1.push(50)
console.log(arrayVazia1)
console.log(arrayVazia1.length)
console.log('');

// Array simples
var notas = [10, 6.5, 8, 7.5];
console.log(notas);
console.log(typeof notas);
console.log('');

// A propriedade length é muito útil para trabalharmos com arrays, pois ele faz a contagem de elementos de um array.
console.log('Quantidade de Indices: '+notas.length);
console.log('');

// Os arrays podem conter os tipos primitivos de valores misturados
let tiposvariados = ["item", 4.5, true, 7, "item2"];
console.log(tiposvariados);
console.log('');
//============================================================================================================================================

// Estruturas de dados, um array dentro de outro
// Outra forma de chamar os arrays de 2 dimensões é matrizes.
const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];
const mediasAlunos = [alunos, medias];
console.log(mediasAlunos);
// Acessando as posições dentro do array principal
console.log(`A aluna no indice 1 é: ${mediasAlunos[0][1]} e sua média é: ${mediasAlunos[1][1]}`);
console.log('');
//============================================================================================================================================

// DESESTRUTURAR um array ou destructuring, em inglês: const [alunos, notas] = alunosNotas;
const alunosList = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];
const notasList  = [5.0, 7.8, 6.5, 8.7, 7.0, 9.4];
const alunosNotas1 = [alunosList, notasList];
function buscaAlunoNota(aluno){
    if(alunosNotas1[0].includes(aluno)){
        // const indiceAluno = alunosNotas1[0].indexOf(aluno);//primeiramente feito assim
        // const alunos = alunosNotas1[0]; //mostrado q poderia ser feito assim
        // const notaAluno = alunosNotas1[1][indiceAluno]; //primeiramente feito assim
        // const notas = alunosNotas1[1]; //mostrado q poderia ser feito assim
        const [alunos, notas] = alunosNotas1; //e desta outra forma, desestruturação (ou destructuring, em inglês)
        const indiceAluno = alunos.indexOf(aluno);
        const notaAluno = notas[indiceAluno];
        console.log(`O Aluno(a) ${aluno} foi encontrado e sua nota é: ${notaAluno}`);
    }else{
        console.log('O Aluno(a) não foi encontrado!');
    }
}
buscaAlunoNota("Leo");

/************************************************************************************************************************************************************
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
Um método é uma função que serve como uma propriedade do array ou de um objeto (que veremos em outro curso). 
Ele pode realizar tarefas pré-definidas usando os dados do array e dos parâmetros que passamos para eles, como adicionar, remover ou até encontrar elementos.
Existem muitos métodos para conseguir lembrar de todos, mas vamos listar os principais para a aprendizagem. São eles: */

// concat()
// Junta dois arrays, colocando o array passado como argumento, logo depois do primeiro. Em português essa operação é conhecida como concatenação.
// Não altera o array no qual foi chamado, então precisamos salvar esse resultado em um novo array.(sendo essa a diferença básica do uso ao invez do +)
// concat() é um método útil quando não se deseja alterar o array original, e sim fazer uma cópia alterada. Caso isso não seja necessário, 
//considere utilizar push() ou splice() para inserir novos elementos ou fazer alterações no array original.
console.log('CONCAT() e seu uso: array.concat()');
console.log(notas);
var notas2 = [9, 6.5, 3, 10];
console.log(notas2);
let concatNotas = notas.concat(notas2);
console.log(concatNotas);
console.log('');
//============================================================================================================================================

// filter()
// Retorna uma lista contando todos os elementos que passaram em um teste, ou seja, uma função escrita por nós.
// Quando a função callback retorna verdadeiro(true), o elemento é adicionado no array de retorno, e quando ela retorna falso(false), o elemento é descartado.
// Não altera o array onde foi chamado, então precisamos salvar esse resultado em um novo array.
console.log('FILTER() e seu uso: array.filter()');
const nAlunos = ["Ana", "Marcos", "Maria", "Mauro"];
const nMedias = [7, 4.5, 8, 7.5];
const Reprovado = nAlunos.filter((_, indice) => nMedias[indice] < 7); // AQUI foi usado o _(underline) para omitir o nome do elemento(item) pois não estava sendo usado
console.log(Reprovado+': Aluno Reprovado');
console.log('');
//============================================================================================================================================

// find()
// Funciona de forma parecida com o filter, porém retorna apenas o primeiro valor que satisfizer o teste, podendo ser uma string ou um número.
//============================================================================================================================================

// findIndex()
// Funciona igual o find(), mas retorna o índice em vez do elemento, possibilitando usá-lo em outras partes do código.
//============================================================================================================================================

// includes(); Este método verifica dentro do array indicado se possui o valor do parametro passado: array.includes(parametro); retorna TRUE ou FALSE
// indexOf(); Este método verifica dentro do array indicado se possui o valor do parametro passado: array.indexOf(parametro); retorna O INDICE(posição dentro do array)
console.log('INCLUDES() e seu uso: array.includes()');
// const alunos4 = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];
// const notas4  = [5.0, 7.8, 6.5, 8.7, 7.0, 9.4];  //ANTES(dentro do praticarArrays.js) ESTAVA FUNCIONANDO
// const alunosNotas4 = [alunos4, notas4];  //AQUI(Arrays.js) TIVE Q COLOCAR AS VARIÁVEIS DENTRO DA FUNÇÃO 
function buscaAlunoNota(aluno){
    const alunos4 = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];
    const notas4  = [5.0, 7.8, 6.5, 8.7, 7.0, 9.4];
    const alunosNotas4 = [alunos4, notas4];
    if(alunosNotas4[0].includes(aluno)){
        let indiceAluno = alunosNotas4[0].indexOf(aluno);
        let notaAluno4 = alunosNotas4[1][indiceAluno];
        console.log(`O Aluno(a) ${aluno} foi encontrado e sua nota é: ${notaAluno4}`);
    }else{
        console.log('O Aluno(a) não foi encontrado!');
    }
}
buscaAlunoNota("Lara");
console.log("");
//============================================================================================================================================

// lastIndexOf()
// É igual o findIndex() porém começa do último elemento, não no primeiro.
//============================================================================================================================================

// forEach()
// Executa uma função em cada elemento do array de forma individual.
// Não altera o array original e nem retorna um valor, deixando esse trabalho a cargo da função escolhida.
console.log('FOREACH() e seu uso: array.forEach()');
const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];
nomes.forEach((elemento, indice) => console.log(elemento, indice)); // Usando o modo de declarar, ARROW FUNCTION na função CALL BACK
console.log("");
//============================================================================================================================================

// pop()
// Retira o último elemento do array.
// Altera o array original removendo o elemento.
console.log('POP() e seu uso: array.pop()');
notas.pop();
console.log(notas); //Exibe [ 10, 6.5, 8 ]
console.log("s");
//============================================================================================================================================

//shift()
//Retira o primeiro elemento do array.
// Altera o array original removendo o elemento e trocando o índice de todos os elementos para um a menos do que eram, o índice 1 passa a ser o 0, o 2 passa a ser o 1, e assim por diante.
console.log('SHIFT() e seu uso: array.shift()');
notas.shift();
console.log(notas); //Exibe [ 6.5, 8 ]
console.log("");
//============================================================================================================================================

// push()
// Adiciona o elemento passado como parâmetro do array, porém na última posição.
// Altera o array original com o novo valor.
console.log('PUSH() e seu uso: array.push()');
notas.push(9);
console.log(notas); //Exibe [ 6.5, 8, 9 ]
console.log("");
//============================================================================================================================================

// unshift()
// Funciona igual ao push(), porém adiciona na primeira posição e acaba trocando o índice de todos os elementos.
// Altera o array original com o novo valor.
console.log('UNSHIFT() e seu uso: array.unshift()');
notas.unshift(5);
console.log(notas); //Exibe [ 6.5, 8, 9 ]
console.log("");
//============================================================================================================================================

// reduce()
// Utiliza uma função definida pelo usuário em cada um dos elementos, guardando o resultado em uma variável que pode ser
//acessada dentro da função que foi definida, retornando um único valor no final, reduzindo o array para um único valor.
// "Reduce", em português significa "reduzir". Esse método vai iterar sobre o array, então também vamos passar uma função callback como parâmetro para ele,
//usaremos a arrow function. Mas os parâmetros que essa função recebe são um pouco diferentes, chamaremos o primeiro parâmetro de acumulador
//e o segundo será o valor do elemento que estamos iterando agora, nota.
// Depois da declaração da função, depois da chave de fechamento e antes do parênteses de fechamento, vamos colocar uma vírgula e o parâmetro (0), que será o valor inicial desse acumulador.
// resumindo, usamos o acumulador, informamos o valor inicial dele no segundo parâmetro do reduce e vamos atualizando o valor do acumulador a cada iteração que fazemos na lista.
console.log('REDUCE() e seu uso: array.reduce()');
const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];
function calculaMedia(notasDaSala){
   // const somaDasNotas = notasDaSala.reduce((acumulador, nota) => {
   // return acumulador + nota
   // Que pode ser declarado assim:
   const somaDasNotas = notasDaSala.reduce((acc, nota) => acc + nota, 0)
    // console.log(somaDasNotas);
    const mediaSala = somaDasNotas / notasDaSala.length
    return mediaSala;
}
console.log(`A média da sala de JavaScript é ${calculaMedia(salaJS)}`);
console.log(`A média da sala de Java é ${calculaMedia(salaJava)}`);
console.log(`A média da sala de Python é ${calculaMedia(salaPython)}`);
console.log("");
//============================================================================================================================================

// reduceRight()
// Funciona igual o reduce() porém começa do final do array e segue até o início.
//============================================================================================================================================

// reverse()
// Inverte a ordem dos elementos do array, então o primeiro vira o último, o segundo o penúltimo e assim por diante.
// FOI USADO NO EXEMPLO DO PALINDROMO
//============================================================================================================================================

// slice()
// Copia uma parte do array para outro array, (usado para fatiar, dividir o array em partes)
console.log('SLICE() e seu uso: array.slice()');
console.log(notas2);
const notasParte1 = notas2.slice(notas2.length/2);
const notasParte2 = notas2.slice(0,notas2.length/2);
console.log(notasParte1);
console.log(notasParte2);
console.log("");
//============================================================================================================================================

// sort()
// Organiza o array de acordo com a classificação Unicode, onde os números vêm antes das letras, porém não funciona corretamente para números, onde temos que definir uma função que irá auxiliar o comando.
//============================================================================================================================================

// splice()
// Consegue remover, um ou mais elementos consecutivos caso o segundo parâmetro tenha um valor maior que 0, e incluir um ou mais elementos a partir de um índice escolhido.
// este método altera o array atual, nomeArray.splice(indice-onde-começa-remoção, numero-quantidade, valor-para-colocar-no-lugar);
console.log('SUPLICE() e seu uso: array.suplice()');
console.log(notas); //[ 5, 6.5, 8, 9 ]
notas.splice(1, 2, 7.8, 9.6, 8);
console.log(notas); //Exibi [ 5, 7.8, 9.6, 8, 9 ]
console.log("");