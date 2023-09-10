// FOR OF
// é outra estrutura para laços de repetição só que mais SIMPLIFICADA
console.log("FOR OF");
const notas0 = [10, 6.5, 8, 7.5];
let somandoNotas=0;
for(let elemento of notas0){
    somandoNotas += elemento
    // console.log(notas0);
    // console.log(somandoNotas);
}
console.log(somandoNotas / notas0.length);
console.log("\n");
//--------------------------------------------------------------------------------------------------------------

// Estrutura FOR para laços de repetição
// A forma mais “clássica” de se efetuar um loop em várias linguagens, o for é muito conveniente pois pode ser utilizado 
// com qualquer tipo de iterável e é construído de uma forma que deixa muito claro quais são todas as “fases” de cada loop 
// também chamamos um loop de laço de repetição ou de iteração.
console.log("Estrutura FOR para laços de repetição");
for(i=0; i<6; i++){
    console.log(i);
    }
const numeros = [100, 200, 300, 400, 500, 600];
for(let i = 0 ; i < numeros.length ; i++){
    console.log(numeros[i]);
}
console.log("\n");
//--------------------------------------------------------------------------------------------------------------

console.log("Calcular a média das notas");
// FOR
// Calcular a média das notas
const notas = [10, 6.5, 8, 7.5];
let somaDNotas = 0;
for(i=0; i<notas.length; i++){
  somaDNotas += notas[i]
}
let mediDNotas = somaDNotas / notas.length
console.log(mediDNotas);
console.log("\n");
//--------------------------------------------------------------------------------------------------------------

console.log("FOR invertido");
// FOR invertido
// Declaramos o valor inicial da variável de controle como o valor da última posição do array (numeros.length - 1); 
//realizamos um decremento (i--) ao invés de um incremento e a condição de execução é i >= 0. 
//Ou seja, nesse caso, a variável i começará do valor 5 e irá até 0.
const numeros1 = [100, 200, 300, 400, 500, 600];
for(let i =  numeros1.length - 1; i >= 0; i--){
    console.log(numeros[i]); 
}
console.log("\n");
//--------------------------------------------------------------------------------------------------------------

// FOR, com incrementada ou decrementada definido
// Outra possibilidade é alterar a quantidade incrementada ou decrementada, mas alterando o decremento para i -= 2.
// O valor de i será diminuído de 2 em 2 a cada iteração (lembrando que a expressão i -= 2 equivale a i = i - 2).
console.log("FOR, com incrementada ou decrementada definido");
const numeros2 = [100, 200, 300, 400, 500, 600];
for (let i = numeros2.length - 1; i >= 0; i -= 2) {
  console.log(numeros2[i]);
}
console.log("\n");
//--------------------------------------------------------------------------------------------------------------

// FOR, com controle sobre a condição de execução
//Também temos controle sobre a condição de execução, então se alterarmos esse último código para ter a condição numeros[i] > 300, teremos o seguinte:
console.log("FOR, com controle sobre a condição de execução");
const numeros3 = [100, 200, 300, 400, 500, 600];

for (let i = numeros3.length - 1; numeros3[i] >= 300; i -= 2) {
  console.log(numeros3[i]);
}
console.log("\n");
//--------------------------------------------------------------------------------------------------------------

// FOR, criar dinamicamente um array com todos os números pares de 0 a 100
// Por fim, até agora utilizamos a estrutura for apenas para percorrer arrays, mas ela pode ser utilizada para repetir qualquer instrução conforme a necessidade. 
// Por exemplo, podemos criar dinamicamente um array com todos os números pares de 0 a 100:
console.log("FOR, criar dinamicamente um array com todos os números pares de 0 a 100");
const numerosPares = [];
for (let i = 0; i <= 100; i += 2) {
  numerosPares.push(i);
}
console.log(numerosPares);
console.log("\n");
//--------------------------------------------------------------------------------------------------------------

// FOR para MATRIZES
// Se quisermos percorrer matrizes, um único for não será suficiente. 
// Mas podemos usar o for várias vezes, uma para cada dimensão da matriz.
// Assim, uma matriz de duas dimensões usará dois for, um dentro do outro.
console.log("FOR para MATRIZES");
const notas1 = [10 , 6.5, 8 ,7.5]
const notas2 = [9  , 6  , 6]
const notas3 = [8.5, 9.5]
const notasGerais = [notas1,notas2,notas3]
// console.log(notasGerais);
let media = 0
for (let i = 0; i < notasGerais.length; i++) {
    // console.log(notasGerais[i])
    for (let j = 0; j < notasGerais[i].length; j++) {
        // console.log(notasGerais[i][j])
      media += notasGerais[i][j]/notasGerais[i].length;
    }
  }
console.log(media);
console.log("");
//--------------------------------------------------------------------------------------------------------------