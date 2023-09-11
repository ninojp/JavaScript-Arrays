
// MAP()
// O map() é um método de array ou estrura de repetição e iteração
// O map() também aceita funções callback, assim como o forEach, e é adequado para quando queremos "reescrever" os valores de um array, 
//sem modificar o array original. Um NOVO ARRAY é criado com os valores reescritos.
console.log('Apredendo o array.map()')
const notas = [10, 9.5, 8, 7, 6];
const notasAtual = notas.map((nota) => {
    //usando o oprerador ternário para: SE nota+1 >= 10? atribui=10 SE NÃO: nota+1
    return nota + 1 >= 10 ? 10 : nota +1
})
console.log(notasAtual);
console.log('');
// IMPORTANTE: Enquanto o método forEach não tem um retorno, o método map() pode retornar um array se a função callback retornar algum valor.
//---------------------------------------------------------------------------------
// Apenas para praticar, aqui foi usado o método de array.forEach()
console.log('Mesmo resultado mas usando o array.forEach()')
const retorno = [];
notas.forEach(nota => {
    retorno.push(nota +1 >= 10? 10 : nota +1)
});
console.log(retorno);
console.log('\n');
//---------------------------------------------------------------------------------

// Agora o desafio para praticar o array.map() é traformar todas os itens(strings)do array em caixa alta. Usaremos o método toUpperCase().
const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];
const caixaAlta = nomes.map((nome) => {
    return nome.toUpperCase()
});
// Que pode ser SIMPLIFICADO Assim:
const caixaAlta1 = nomes.map(nome => nome.toUpperCase());
console.log(caixaAlta1);
console.log('\n');
//---------------------------------------------------------------------------------

// Nesta aula(array.map()) introduzimos um novo conceito, o de funções callback.
// O termo callback se refere à função que é “chamada de volta” dentro de outra função. 
// Após o lançamento do ES6 (também conhecido como EcmaScript 2015) o uso desse tipo de método foi se consolidando, 
// então é importante entender como utilizá-lo.
const arrayNums = [1, 2, 3, 4]
function multiplicaPorDez(num) {
    return num * 10;
}
novoArray = arrayNums.map(multiplicaPorDez);
//Para entender melhor, vamos reescrever o código, passando a função multiplicaPorDez(num) direto como parâmetro do map():
novoArray1 = arrayNums.map(num => num * 10);
console.log(novoArray1);
console.log('\n');
//---------------------------------------------------------------------------------


//“String”, além de ser o tipo de dado usado para representar textos, também se define como uma sequência ordenada de caracteres!
//“Lista ordenada” (ou sequência) também é uma forma de definir arrays, certo? Então podemos pensar que, por baixo dos panos, 
//strings são armazenadas em memória da seguinte forma:
const nome = "Alura";
let nomeMaiusculas = "";
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i])
    nomeMaiusculas += nome[i].toUpperCase()
}
console.log(nomeMaiusculas) //ALURA

const nomedoCurso = "Fundamentos de JS";
const nomeDaPlataforma = " Alura"
// const nomeCompleto = nomedoCurso+nomeDaPlataforma
const nomeCompleto = nomedoCurso.concat(nomeDaPlataforma)
console.log(nomeCompleto)  //Fundamentos de JS Alura
console.log('\u0001'); //foram teste(string UNICODE) apenas
console.log('\u0002');
console.log('\u0003');
console.log('\u0004');
console.log('\n');
//----------------------------------------------------------------------------------------------------------

