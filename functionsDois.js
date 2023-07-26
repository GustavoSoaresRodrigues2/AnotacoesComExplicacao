/* Para verificar se uma propriedade em um determinado objeto existe ou não, você pode usar o método .hasOwnProperty(). 
   someObject.hasOwnProperty(someProperty) retorna true ou false, dependendo de a propriedade ser encontrada no objeto 
   ou não. */
function checarProp(object, prope) {
    if (object.hasOwnProperty(prope)) {
        return obj[prope]
    } else {
        return "Não Encontrado"
    }
}

/* Às vezes, você pode querer armazenar dados em uma Estrutura de Dados flexível. Um objeto JavaScript é uma forma de 
   lidar com dados flexíveis. Eles permitem combinações arbitrárias de strings, numbers, booleans, arrays, functions e 
   objects. */
const myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "Eminem",
        "title": "Godzilla",
        "release_year": "algum ano ai",
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": false
    }
]
console.log(myMusic[1].artist)
console.log(myMusic[1].formats[0])

/* Você está criando uma função que ajuda na manutenção de uma coleção de álbuns musicais. A coleção está organizada 
   como um objeto que contém múltiplos álbuns que também são objetos. Cada álbum é representado na coleção com um id 
   único como o nome da propriedade. Dentro de cada objeto de álbum, existem várias propriedades descrevendo informações 
   sobre o álbum. Nem todos os álbuns possuem informações completas.
   
   A função updateRecords recebe 4 argumentos representados pelos seguintes parâmetros de função:
    records – um objeto contendo vários álbuns individuais
    id – um número que representa um álbum específico no objeto records
    prop – uma string que representa o nome da propriedade do álbum a ser atualizada
    value – uma string contendo informações usadas para atualizar a propriedade do álbum
    Complete a função usando as regras abaixo para modificar o objeto passado para a função.
   
   A função precisa sempre retornar todo o objeto records.
    se value for uma string vazia, remova a propriedade prop recebida do álbum.
    se prop não for tracks e value não for uma string vazia, atribua value à prop daquele álbum.
    se prop for tracks e value não for uma string vazia, você precisa atualizar o array tracks do álbum. Primeiro, se o 
    álbum não tiver uma propriedade tracks, atribua a ele um array vazio. Em seguida, adicione value como o último item 
    do array tracks do álbum. */
const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let it Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
}
function updateRecords(records, id, prop, value) {
    if (value === "") {
        delete records[id][prop]
    } else if (prop !== "tracks" && value !== "") {
        records[id][prop] = value
    } else if (prop === "tracks" && value !== "") {
        if (records[id].hasOwnProperty("tracks") === false) {
            records[id][prop] = []
        }
        records[id][prop].push(value)
    }
    return records
}
console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'))

/* O primeiro tipo de laço é chamado de laço while porque ele rodará enquanto uma condição específica for verdadeira e 
   vai parar uma vez que a condição não for mais verdadeira. */
const myArray = []
let fff = 5
while (fff >= 0) {
    myArray.push(fff)
    fff--
}
console.log(myArray)

/* O tipo mais comum de laço JavaScript é chamado de laço for, porque ele é executado por um número especificado 
   de vezes.
   Laços for são declarados com três expressões opcionais separadas por ponto e vírgula: for (A; B; C), onde A é a 
   declaração de inicialização, B é a declaração de condição, e C é a expressão final. */
const myArray2 = []
for (let i = 0; i <= 5; i++) {
    myArray2.push(i)
}
console.log(myArray2)

/* Uma tarefa comum em JavaScript é para iterar através do conteúdo de um array. Uma forma de fazer isso é com um 
   laço for.
   Adicione o valor de cada elemento do array */
const myArray3 = [5, 5, 6, 4, 2, 5]
let total = 0
for (let i = 0; i < myArray3.length; i++) {
    total += myArray3[i]
}
console.log(total)

/* Se você possui um array multidimensional, você pode usar a mesma lógica no ponto de passagem anterior para iterar 
   através de arrays e de qualquer sub-array.
   Multiplique tudo que está no array */
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

/* O laço do...while é chamado assim porque primeiro fará algo (do) ou executará algo uma vez dentro do bloco de código, 
   não importando o que acontecer. Em seguida, continuará a executar o laço enquanto (while) a condição for true.
   Um laço do...while garante que o código dentro do laço será executado pelo menos uma vez. */
const myArray5 = []
let ggg = 10
do {
    myArray5.push(ggg)
    ggg++
} while (ggg < 5)
console.log(myArray5)

/* Recursão é o conceito de que uma função pode ser chamada por ela mesma. Para ajudar a entender isso, comece a pensar 
   sobre a seguinte tarefa: multiplique os primeiros n elementos de um array para criar o produto desses elementos. 
   Uma função recursiva, sum(arr, n), que retorna a soma dos primeiros n elementos de um array arr. */
function sumRecursao(arr, n) {
    if (n <= 0) {
        return 0
    } else {
        return sumRecursao(arr, n - 1) + arr[n - 1]
    }
}
console.log(sumRecursao([5, 6, 7], 2))

/* Temos um array de objetos representando pessoas diferentes nas nossas listas de contatos.
   A função deve verificar se name é o firstName (primeiro nome) de um contato e se a propriedade passada (prop) é uma 
   propriedade daquele contato.
   Se ambos forem verdadeiros, então retorne o "valor" daquela propriedade.
   Se name não corresponder a nenhum dos contatos, então retorne a string No such contact.
   Se prop não corresponder a nenhuma propriedade válida de um contato encontrado para coincidir com name então retorne 
   a string No such property. */
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
]
function lookUpProfile(name, prop) {
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            return contacts[i][prop] || "Nenhuma propriedade"
        }
    }
    return "Nenhum tal contato"
}
console.log(lookUpProfile("Akira", "likes"))

/* Números aleatórios são úteis para criar comportamento aleatório. JavaScript tem a função Math.random() que gera 
   um número decimal aleatório entre 0 (incluso) e 1 (excluso). Assim, Math.random() pode retornar um 0 mas nunca 
   retornará 1. */
function randomFraction() {
    return Math.random()
}
console.log(randomFraction())

/* Você pode gerar números decimais aleatórios com Math.random(), mas, às vezes, você precisa gerar números naturais 
   aleatórios.
   N é um número natural a escolha que o resultado vai ser menor que ele. 
   1º Use Math.random() para gerar um número decimal aleatório.
   2º Multiplique o número decimal aleatório por N.
   3º Use Math.floor() para arredondar o número para baixo para o número natural mais próximo.*/
function randomWholeNum(n) {
    return Math.floor(Math.random() * n)
}
console.log(randomWholeNum(15))

/* Você pode gerar um número natural aleatório no intervalo entre zero e um número dado. Você também pode escolher um 
   número diferente para este intervalo.
   Chamaremos o número mínimo de min e o número máximo de max. */
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
}
console.log(randomRange(7, 112))

/* A função parseInt() analisa uma string e retorna um inteiro. 
   Se o primeiro caractere na string não pode ser convertido em um número, então ele retorna NaN. */
function convertToInteger(str) {
    return parseInt(str)
}
console.log(convertToInteger("56"))

/* A função parseInt() analisa uma string e retorna um inteiro. É preciso um segundo argumento para o radix, que 
   especifica a base do número na string. O radix pode ser um inteiro entre 2 e 36.
   Converte um número binário em um inteiro. */
function convertToInteger2(str) {
    return parseInt(str, 2)
}
console.log(convertToInteger2("100011"))

/* O operador condicional, também chamado de operador ternário, pode ser usado como uma expressão if-else de uma linha.
   A sintaxe é A ? B : C, onde A é a condição, B é o código executado quando a condição retorna true e C é o código 
   executado quando a condição retorna false. */
function verIqual(a, b) {
    return a == b ? "Igual" : "N é igual"
}

console.log(verIqual(5, 6))

/* Você também pode encadear eles juntos para verificar por múltiplas condições. */
function verZero(num) {
    return (num > 0) ? "positivo"
        : (num < 0) ? "negativo"
            : "zero"
}

console.log(verZero(0))

/* vamos analisar uma função mais complexa, a qual retorna um array de inteiros consecutivos começando com 1 até o 
   número passado para a função. */
function countdown(n) {
    if (n < 1) {
        return []
    } else {
        const countArray = countdown(n - 1)
        countArray.unshift(n)
        return countArray
    }
}
console.log(countdown(8))

/* Definimos uma função chamada rangeOfNumbers com dois parâmetros. A função deve retornar um array de inteiros a qual 
   começa com um número representado pelo parâmetro startNum e terminar com um número representado pelo parâmetro endNum. 
   O número inicial sempre será menor ou igual ao número final. Sua função precisa usar recursão para chamar a si mesma 
   e não deve depender de nenhum tipo de laço. Também deve funcionar para casos onde startNum e endNum tiverem o mesmo 
   valor. */
function rangeOfNumbers(startNum, endNum) {
    if (endNum < startNum) {
        return []
    } else {
        const numbers = rangeOfNumbers(startNum, endNum - 1)
        numbers.push(endNum)
        return numbers
    }
}
console.log(rangeOfNumbers(5, 20))

// Exportar
export {convertToInteger, verZero}