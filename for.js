
// Estrutura FOR para laços de repetição, São utilizados para, entre outras coisas, percorrer arrays e executar blocos de código para cada elemento.
for(i=0; i<6; i++){
    console.log(i);
    }
console.log("\n");

const numeros = [100, 200, 300, 400, 500, 600];
for(i = 0 ; i < numeros.length ; i++){
    console.log(numeros[i]);
}
console.log("Estrutura FOR para laços de repetição \n");

// FOR
// Calcular a média das notas
const notas = [10, 6.5, 8, 7.5];
let somaDNotas = 0;
for(i=0; i<notas.length; i++){
  somaDNotas += notas[i]
}
let mediDNotas = somaDNotas / notas.length
console.log(mediDNotas);
console.log("Calcular a média das notas \n");

// FOR OF
// é outra estrutura para laços de repetição só que mais SIMPLIFICADA
const notas0 = [10, 6.5, 8, 7.5];
let somandoNotas=0;
for(let elemento of notas0){
    somandoNotas += elemento;
    // console.log(somandoNotas);
}
console.log(somandoNotas / notas.length);
console.log("FOR OF \n");

// FOR para MATRIZES
// Se quisermos percorrer matrizes, um único for não será suficiente. 
// Mas podemos usar o for várias vezes, uma para cada dimensão da matriz.
// Assim, uma matriz de duas dimensões usará dois for, um dentro do outro.
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
console.log("FOR para MATRIZES \n");
