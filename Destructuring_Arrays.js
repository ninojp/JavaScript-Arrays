// DESTRUCTURING com array
// Usando o operador de Espalhamento(spread operator), sintaxe de espalhamento(...) no array
// Este operador copia as propriedades de objetos para outros, “espalhando” os conteúdos.
console.log("DESTRUCTURING");
almoco = ['🍔', '🌭', '🍕'];
janta = [];
janta.push('🍳');
janta.push('🥗');
janta.push('🍏');
let almocoJanta = [...almoco, ...janta]
console.log(almoco);
console.log(janta);
console.log(almocoJanta);
console.log("");
// O Interessante aqui é que posso colocar cada item dentro de uma variável
// E todos os restantes serão clocados automaticamente dentro de um array
// aqui NÃO devo colocar o nome da variável, APENAS os colchetes para receber os valores
let [refei1, refei2, ...sobra] = almocoJanta;
console.log(refei1);
console.log(refei2);
console.log(sobra);
console.log("");