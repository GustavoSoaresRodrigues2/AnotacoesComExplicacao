/* JavaScript fornece oito tipos de dados diferentes que são undefined, null, boolean, string, symbol, bigint, 
   number e object. */

/* Diferente de var, ao usar let, uma variável com o mesmo nome só pode ser declarada uma única vez. */

/* O const possui todos os recursos maravilhosos que let tem, com o bônus adicional que variáveis declaradas usando 
   const são somente de leitura. Elas têm um valor constante, o que significa que a variável atribuída com const não 
   pode ser atribuída novamente. */

/* i++; equivalente a i = i + 1; */
/* i--; equivalente a i = i - 1; */
/* myVar += 5; equivalente a myVar = myVar + 5; */
/* myVar -= 5; equivalente a myVar = myVar - 5; */
// mantem esse padrão para * e /, só trocar as operações.

/* O operador de resto % retorna o resto da divisão de dois números.
   Ex: 5 % 2 = 1 */

/* Em JavaScript, você pode escapar uma aspa para que não seja considerada como o fim de uma string ao colocar a barra 
   invertida (\) na frente da aspa. */
const myStr = "I am a \"double quoted\" string inside \"double quotes\"."

/* Valores de string em JavaScript podem ser escritas com aspas simples ou duplas, desde que você comece e termine 
   com o mesmo tipo de aspas.
   O motivo pelo qual você pode querer usar um tipo de aspas no lugar da outra é se você vir a querer usar ambas em 
   uma string. Isso pode acontecer se você quiser salvar uma conversa em uma string e ter a conversa entre aspas. 
   Outro uso para isso seria salvar uma tag <a> com vários atributos em aspas, tudo dentro de uma string. */
const myStr2 = '<a href="http://www.example.com" target="_blank">Link</a>'
console.log(myStr)
console.log(myStr2)

/* As sequências de escape permitem que você use caracteres que você não poderia usar em uma string em outras 
   situações. Tabela no index.html na main#sequencia de escape */
const myStr3 = "FirstLine\n\t\SecondLine\n\t\tThirdLine"
console.log(myStr3)

/* Você pode encontrar o tamanho de um valor de String ao escrever .length após a variável de string ou literal de 
   string. */
const myStr4 = "CSS FLEXBOX PHOTO GALLERY"
console.log(myStr4.length)

/* Notação de colchetes é uma forma de pegar um caractere no índice especificado dentro de uma string. */
const myStr5 = "Gustavo Rodrigues"
const pegarG = myStr5[0]
console.log(pegarG)

/* Para pegar a última letra de uma string, você pode subtrair por um o tamanho da string. */
const pegarS = myStr5[myStr5.length - 1]
console.log(pegarS)

/* Com as variáveis de array em JavaScript, podemos armazenar diversos dados em um único lugar. */
/* Você também pode aninhar arrays dentro de outros arrays. */
const tiposTags = 
    [
        ["html", "head", "title", "body", "main"], 
        [12345, 54321], 
        [null, true, false, undefined]
    ]
console.log(tiposTags)

/* Podemos acessar os dados dentro de arrays usando indexes. Os índices de um array são escritos na mesma notação 
   com colchetes que as strings usam. Porém, em vez de especificar um caractere, eles estão especificando um 
   item do array. */
const verificarArray = tiposTags[0]
console.log(verificarArray)

/* Você pode entrar mais no array até chegar no que deseja. */
const verificarArrayEspecifico = tiposTags[0][2]
console.log(verificarArrayEspecifico)

/* Ao contrário das strings, as entradas de arrays são mutáveis e podem ser alteradas livremente, mesmo se o array 
   foi declarado com const. */
tiposTags[1][0] = 987654321
console.log(tiposTags[1][0])

/* Uma forma fácil de adicionar dados no final de um array é através da função push(). */
tiposTags.push("enviado")
console.log(tiposTags)

tiposTags[2].push("error")
console.log(tiposTags[2])

/* O .pop() é usado para remover um valor do final do array. Nós podemos armazenar esse valor removido atribuindo-o a 
   uma variável. Em outras palavras, .pop() remove o último elemento de um array e retorna aquele elemento. */
tiposTags.pop()
console.log(tiposTags)

/* .shift() remove o primeiro elemento ao invés do último. */
tiposTags.shift()
console.log(tiposTags)

/* .unshift() adiciona o elemento no início do array. */
tiposTags.unshift("voltei")
console.log(tiposTags)

