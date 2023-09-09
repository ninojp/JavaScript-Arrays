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
console.log("\n");

// TRABALHANDO COM O MÉTODO CONCAT(): Junta dois array FORMANDO um terceiro com todos os valores, na ORDEM que foram colocados
const salaJS = ["Evaldo", "Camis", "Mari"];
console.log(salaJS)
const salaPython = ["Ju", "Leo", "Raquel"];
console.log(salaPython)
const salasUnificadas = salaJS.concat(salaPython);
console.log(salasUnificadas);
console.log("\n");

// Trabalhando como CONCAT() com outro tipos de dados
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


// DESESTRUTURAR um array ou destructuring, em inglês: const [alunos, notas] = alunosNotas;
const alunosList = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];
const notasList  = [5.0, 7.8, 6.5, 8.7, 7.0, 9.4];
const alunosNotas = [alunosList, notasList];
function buscaAlunoNota(aluno){
    if(alunosNotas[0].includes(aluno)){
        // const indiceAluno = alunosNotas[0].indexOf(aluno);//primeiramente feito assim
        // const alunos = alunosNotas[0]; //mostrado q poderia ser feito assim
        // const notaAluno = alunosNotas[1][indiceAluno]; //primeiramente feito assim
        // const notas = alunosNotas[1]; //mostrado q poderia ser feito assim
        const [alunos, notas] = alunosNotas; //e desta outra forma, desestruturação (ou destructuring, em inglês)
        const indiceAluno = alunos.indexOf(aluno);
        const notaAluno = notas[indiceAluno];
        console.log(`O Aluno(a) ${aluno} foi encontrado e sua nota é: ${notaAluno}`);
    }else{
        console.log('O Aluno(a) não foi encontrado!');
    }
}
buscaAlunoNota("Leo");