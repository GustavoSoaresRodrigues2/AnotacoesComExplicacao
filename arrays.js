// Um array (arranjo ou vetor) é um conjunto de dados (que pode assumir os mais diversos tipos, desde do tipo 
// primitivo, a objeto dependendo da linguagem de programação). Arrays são utilizados para armazenar mais de um valor em 
// uma única variável.
const arrayEx = ["Gustavo", 18, "Programação"]
console.log(arrayEx)

// Com as variáveis de array em JavaScript, podemos armazenar diversos dados em um único lugar.
// Você também pode aninhar arrays dentro de outros arrays.
const arrayComplexo = 
    [
        ["html", "head", "title", "body", "main"], 
        [12345, 54321], 
        [null, true, false, undefined],
        [
            ["dentro", 951, "undefined"]
        ]
    ]
console.log(arrayComplexo)

// Podemos acessar os dados dentro de arrays usando indexes. Os índices de um array são escritos na mesma notação 
// com colchetes que as strings usam. Porém, em vez de especificar um caractere, eles estão especificando um 
// item do array.
const acessarArray = arrayComplexo[0]
console.log(acessarArray)
   
// Você pode entrar mais no array até chegar no que deseja.
const mergulharArray = arrayComplexo[0][2]
console.log(mergulharArray)
   
// Ao contrário das strings, as entradas de arrays são mutáveis e podem ser alteradas livremente, mesmo se o array 
// foi declarado com const.
arrayComplexo[1][0] = 987654321
console.log(arrayComplexo[1][0])
   
// Uma forma fácil de adicionar dados no final de um array é através da função push().
arrayComplexo.push("enviado")
console.log(arrayComplexo)
arrayComplexo[2].push("error")
console.log(arrayComplexo[2])
   
// O .pop() é usado para remover um valor do final do array. Nós podemos armazenar esse valor removido atribuindo-o a 
// uma variável. Em outras palavras, .pop() remove o último elemento de um array e retorna aquele elemento.
arrayComplexo.pop()
console.log(arrayComplexo)
   
// .shift() remove o primeiro elemento ao invés do último.
arrayComplexo.shift()
console.log(arrayComplexo)
   
// .unshift() adiciona o elemento no início do array.
arrayComplexo.unshift("voltei")
console.log(arrayComplexo)

