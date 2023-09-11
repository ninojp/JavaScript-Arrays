
// MAP
// O map() é um método de array ou estrura de repetição e iteração
// O map por ser um método do array ele sempre retorna um NOVO array
console.log('Apredendo o array.map()')
const notas = [10, 9.5, 8, 7, 6];
const notasAtual = notas.map((nota) => {
    //usando o oprerador ternário para: SE nota+1 >= 10? atribui=10 SE NÃO: nota+1
    return nota + 1 >= 10 ? 10 : nota +1
})
console.log(notasAtual);
console.log('');
//---------------------------------------------------------------------------------
// Apenas para praticar, aqui foi usado o método de array.forEach()
console.log('Mesmo resultado mas usando o array.forEach()')
const retorno = [];
notas.forEach(nota =>{
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

