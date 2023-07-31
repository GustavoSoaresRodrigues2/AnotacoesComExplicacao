// Em JavaScript, você pode escapar uma aspa para que não seja considerada como o fim de uma string ao colocar a barra 
// invertida (\) na frente da aspa.
const myStr = "I am a \"double quoted\" string inside \"double quotes\"."

// Valores de string em JavaScript podem ser escritas com aspas simples ou duplas, desde que você comece e termine 
// com o mesmo tipo de aspas.
// O motivo pelo qual você pode querer usar um tipo de aspas no lugar da outra é se você vir a querer usar ambas em 
// uma string. Isso pode acontecer se você quiser salvar uma conversa em uma string e ter a conversa entre aspas. 
// Outro uso para isso seria salvar uma tag <a> com vários atributos em aspas, tudo dentro de uma string.
const myStr2 = '<a href="http://www.example.com" target="_blank">Link</a>'
console.log(myStr)
console.log(myStr2)

// As sequências de escape permitem que você use caracteres que você não poderia usar em uma string em outras 
// situações. Tabela no index.html na main#sequencia de escape.
const myStr3 = "FirstLine\n\t\SecondLine\n\t\tThirdLine"
console.log(myStr3)

// Você pode encontrar o tamanho de um valor de String ao escrever .length após a variável de string ou literal de 
// string.
const myStr4 = "CSS FLEXBOX PHOTO GALLERY"
console.log(myStr4.length)

// Notação de colchetes é uma forma de pegar um caractere no índice especificado dentro de uma string.
const myStr5 = "Gustavo Rodrigues"
const pegarG = myStr5[0]
console.log(pegarG)

// Para pegar a última letra de uma string, você pode subtrair por um o tamanho da string.
const pegarS = myStr5[myStr5.length - 1]
console.log(pegarS)

