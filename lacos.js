// O primeiro tipo de laço é chamado de laço while porque ele rodará enquanto uma condição específica for verdadeira e 
// vai parar uma vez que a condição não for mais verdadeira. 
const myArray = []
let fff = 5
while (fff >= 0) {
    myArray.push(fff)
    fff--
}
console.log(myArray)

// O tipo mais comum de laço JavaScript é chamado de laço for, porque ele é executado por um número especificado 
// de vezes.
// Laços for são declarados com três expressões opcionais separadas por ponto e vírgula: for (A; B; C), onde A é a 
// declaração de inicialização, B é a declaração de condição, e C é a expressão final. 
const myArray2 = []
for (let i = 0; i <= 5; i++) {
    myArray2.push(i)
}
console.log(myArray2)

// Uma tarefa comum em JavaScript é para iterar através do conteúdo de um array. Uma forma de fazer isso é com um 
// laço for.

// Adicione o valor de cada elemento do array 
const myArray3 = [5, 5, 6, 4, 2, 5]
let total = 0
for (let i = 0; i < myArray3.length; i++) {
    total += myArray3[i]
}
console.log(total)

// Se você possui um array multidimensional, você pode usar a mesma lógica no ponto de passagem anterior para iterar 
// através de arrays e de qualquer sub-array.

// Multiplique tudo que está no array 
const myArray4 = ([[1, 5, 6], [4, 5, 6], [7, 1, 3]])
function multiplyAll(myArray4) {
    let product = 1
    for (let i = 0; i < myArray4.length; i++) {
        for (let j = 0; j < myArray4[i].length; j++) {
            product *= myArray4[i][j]
        }
    }
    return product
}
console.log(multiplyAll(myArray4))

// O laço do...while é chamado assim porque primeiro fará algo (do) ou executará algo uma vez dentro do bloco de código, 
// não importando o que acontecer. Em seguida, continuará a executar o laço enquanto (while) a condição for true.
// Um laço do...while garante que o código dentro do laço será executado pelo menos uma vez. 
const myArray5 = []
let ggg = 10
do {
    myArray5.push(ggg)
    ggg++
} while (ggg < 5)
console.log(myArray5)

// O operador condicional, também chamado de operador ternário, pode ser usado como uma expressão if-else de uma linha.
// A sintaxe é A ? B : C, onde A é a condição, B é o código executado quando a condição retorna true e C é o código 
// executado quando a condição retorna false. 
function verIqual(a, b) {
    return a == b ? "Igual" : "N é igual"
}
console.log(verIqual(5, 6))
export {verIqual}

// Você também pode encadear eles juntos para verificar por múltiplas condições. 
function verZero(num) {
    return (num > 0) ? "positivo"
        : (num < 0) ? "negativo"
            : "zero"
}
console.log(verZero(0))
export {verZero}

