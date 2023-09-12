// Exercício proposto
jantarDeHoje = ['🍔', '🌭', '🍕']
jantarDeHoje.pop()
jantarDeHoje.pop()
jantarDeHoje.push('🍳')
jantarDeHoje.push('🥗')
jantarDeHoje.push('🍏')
console.log(jantarDeHoje);
console.log("\n");
//========================================================================================================================================

// PRATICANDO O SLICE()
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
console.log("\n");
//============================================================================================================================================

// TRABALHANDO COM O MÉTODO CONCAT(): Junta dois array FORMANDO um terceiro com todos os valores, na ORDEM que foram colocados
console.log("PRATICANDO O array.concat()");
const salaJS = ["Evaldo", "Camis", "Mari"];
console.log(salaJS)
const salaPython = ["Ju", "Leo", "Raquel"];
console.log(salaPython)
const salasUnificadas = salaJS.concat(salaPython);
console.log(salasUnificadas);
console.log("");

// PRATICANDO O array.concat() com outro tipos de dados
const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
const arrayConcat = arrayOriginal.concat("André", "Fernanda")
console.log(arrayOriginal)
console.log(arrayConcat)
console.log("");

const arrayOriginal1 = ["Maria", "Carlos", "Eduardo", "Samanta"]
const arrayConcat1 = arrayOriginal1.concat(["André", "Fernanda"], ["Ricardo", "Ana"], ["Marcelo", "Bia"])
console.log(arrayOriginal1)
console.log(arrayConcat1)
console.log("");

const arrayOriginal2 = [50, 60, 70]
const arrayConcat2 = arrayOriginal2.concat([80, [90, 100]]) // aqui hà um animhamento, um array dentro de outro array(matrix)
console.log(arrayConcat2)
console.log(arrayOriginal2)
console.log("");
//============================================================================================================================================

// PRATICANDO o array.reduce()
// O método reduce() está trabalhando com dois parâmetros. O primeiro é a função callback obrigatória para retornar o cálculo
//e o segundo parâmetro é um número que representa o valor inicial do acumulador – no caso, 0.
// A função callback foi escrita diretamente dentro do reduce(), e esta função também está recebendo dois parâmetros, 
//ambos obrigatórios: o valor acumulado e o valor atual.
// A função callback foi escrita na forma de arrow function; nesse caso, quando só temos uma linha de instrução
//dentro da função (atual + acc) não precisamos usar chaves e nem da palavra-chave return.
// Caso você tenha mais de uma linha de instrução dentro de uma arrow function, as chaves {} e a palavra-chave return voltam a ser necessários.
console.log("PRATICANDO o array.reduce()");
const numeros = [43, 50, 65, 12]
const soma = numeros.reduce((acc, atual) => atual + acc, 0)
console.log(soma) //170
console.log("");
//============================================================================================================================================

// Desafio 17: criando cópias - OPERADOR(...), operador de espalhamento
//Crie um novo array com a nota 10 a mais, sem alterar o array original.
console.log("OPERADOR(...), operador de espalhamento");
const notasA = [7, 7, 8, 9];
const notasConcat = notasA.concat(10); //(exemplo q eu criei)
console.log(`CONCAT(): As novas notas são ${notasConcat}`); //Assim acho EU q resolveria
console.log(`As notas originais são ${notasA}`);
console.log("");
// const notasPush = notasA.push(10) //ERRO, pois o push ALTERA O ARRAY ATUAL //Exibe 5 (eu q criei esta kaka)
// console.log(notasPush)

const notasPush1 = notasA //ERRO, aqui agora a uma ATRIBUIÇÃO INVERSA e notasPush1 recebe o valor de notasA MAS notasA tabém passa a receber o valor de notasPush1
// Então, qualquer alteração que fizermos em notasPush1 será feita no array original e vice-versa. É como se, para o JavaScript, eles fossem o mesmo array. E não é isso que queremos.
notasPush1.push(10)
console.log(`As novas notas são ${notasPush1}`);
console.log(`As notas originais são ${notasA}`); // sendo assim AGORA notasA é = a notasPush1
console.log("");

// FORMA CORRETA
const notas = [7, 7, 8, 9];
const novasNotas = [...notas]; //Esse é um operador(...) do JavaScript que se chama spread operator, ou "operador de espalhamento". 
// Ao utilizá-lo junto com uma lista, ele pega todo o conteúdo desse array e espalhar seus valores no local que estamos indicando.
novasNotas.push(10)
console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);
console.log("");
// Também podemos usar essa sintaxe do operador de espalhamento no parâmetro de uma função, por exemplo, 
//ele vai pegar o conteúdo de uma array e colocar separado por vírgulas onde queremos.
const novasNotas2 = [30, ...notas, 20];
//Então, o spread operator é um operador que podemos usar para clonar arrays sem ter problemas de referências do JavaScript.
console.log(`As novas notas são ${novasNotas2}`);
console.log(`As notas originais são ${notas}`);
console.log("");
//============================================================================================================================================


// Atribuir diretamente um array para outro com o sinal = faz com o que o JavaScript entenda que é como se eles fossem o mesmo array. 
// Para evitar esse comportamento, devemos criar um array totalmente novo, com a ajuda do spread operator ... (ou operador de espalhamento).
// Porém, esse comportamento não acontece com strings, números e booleanos, que são tipos primitivos do JavaScript.
console.log("OPERADOR(...), ");
let num1 = 10;
console.log(num1)
let num2 = num1;
console.log(num2)
num2 += 5;
console.log(num2)
num1 += 1;
console.log(num1)
console.log(`Num1 é ${num1}. Num2 é ${num2}`);
console.log("");
// Ao executar o código, teremos a frase “Num1 é 11. Num2 é 15”. Ou seja, com o código let num2 = num1, o JavaScript entende que queremos criar uma cópia de num1, 
//e cria uma nova variável, com seu próprio espaço na memória guardando seu valor. Então, ao modificar uma das variáveis, a outra não é alterada.
// Esse comportamento de copiar um valor primitivo, o atribuindo a uma nova variável, é chamado de atribuição por valor e acontece somente com os tipos primitivos do JavaScript.

// O mesmo comportamento ocorre quando trabalhamos com parâmetros de funções. Veja o seguinte exemplo:
let numeroOriginal = 10;
function alteraNumero(numero) {
  numero = 50;
  console.log(`numero do parâmetro é ${numero}. numeroOriginal é ${numeroOriginal}`);
}
alteraNumero(numeroOriginal);
console.log("");
// Executando o código, teremos a frase “numero do parâmetro é 50. numeroOriginal é 10”. Ao chamar a função passando numeroOriginal como parâmetro, 
// foi feita uma cópia de seu valor para ser utilizada como o parâmetro numero dentro da função. Dessa forma, mesmo alterando numero dentro da função, numeroOriginal permanece inalterado.
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Mas como você viu, com arrays não funciona bem dessa forma, afinal, eles não são um tipo primitivo. Considere o exemplo utilizado no vídeo passado:
// Como estamos lidando com dados mais complexos, o JavaScript faz isso por padrão para otimizar memória e performance, em vez de realizar uma cópia do array em toda nova atribuição.
// Uma atribuição de um array é chamada de atribuição por referência, pois nela é passada a referência do array em si, e não uma cópia de seu valor.
const notas5 = [7, 7, 8, 9];
const novasNotas5 = notas5;
novasNotas.push(10);
console.log(`As novas notas são ${novasNotas5}`);
console.log(`As notas originais são ${notas5}`);
console.log("");

// O mesmo comportamento ocorre quando trabalhamos com parâmetros de funções. Veja o código abaixo:
const arrayOriginal3 = [7, 7, 8, 9];
function alteraArray(array) {
  array.push(10);
  console.log(`array do parâmetro é ${array}`);
  console.log(`arrayOriginal é ${arrayOriginal3}`);
}
alteraArray(arrayOriginal3);
// Após passar arrayOriginal como parâmetro de alteraArray, o utilizamos como o parâmetro array. O código array.push(10) alterou ambos os arrays,
// assim como o que houve no exemplo que fizemos a atribuição. Ou seja, novamente, foi passada a referência do array em si, e não uma cópia dele.
// De forma análoga à solução do vídeo, caso queiramos passar uma cópia do array e não sua referência, trocamos o código alteraArray(arrayOriginal)
// por alteraArray([...arrayOriginal]). Assim, a saída será:

