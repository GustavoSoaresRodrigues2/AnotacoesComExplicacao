// Você está criando uma função que ajuda na manutenção de uma coleção de álbuns musicais. A coleção está organizada 
// como um objeto que contém múltiplos álbuns que também são objetos. Cada álbum é representado na coleção com um id 
// único como o nome da propriedade. Dentro de cada objeto de álbum, existem várias propriedades descrevendo informações 
// sobre o álbum. Nem todos os álbuns possuem informações completas.
// A função updateRecords recebe 4 argumentos representados pelos seguintes parâmetros de função:
//      records – um objeto contendo vários álbuns individuais
//      id – um número que representa um álbum específico no objeto records
//      prop – uma string que representa o nome da propriedade do álbum a ser atualizada
//      value – uma string contendo informações usadas para atualizar a propriedade do álbum
// Complete a função usando as regras abaixo para modificar o objeto passado para a função.
//      1º A função precisa sempre retornar todo o objeto records.
//      2º se value for uma string vazia, remova a propriedade prop recebida do álbum.
//      3º se prop não for tracks e value não for uma string vazia, atribua value à prop daquele álbum.
//      4º se prop for tracks e value não for uma string vazia, você precisa atualizar o array tracks do álbum. Primeiro, 
//      5º se o álbum não tiver uma propriedade tracks, atribua a ele um array vazio. Em seguida, adicione value como o 
//      6º último item do array tracks do álbum. 
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

// Temos um array de objetos representando pessoas diferentes nas nossas listas de contatos.
//      1º a função deve verificar se name é o firstName (primeiro nome) de um contato e se a propriedade passada (prop) 
//      é uma propriedade daquele contato.
//      2º se ambos forem verdadeiros, então retorne o "valor" daquela propriedade.
//      3º se name não corresponder a nenhum dos contatos, então retorne a string No such contact.
//      4º se prop não corresponder a nenhuma propriedade válida de um contato encontrado para coincidir com name então 
//      retorne a string Nenhuma propriedade. 
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

// Definimos uma função chamada rangeOfNumbers com dois parâmetros. A função deve retornar um array de inteiros a qual 
// começa com um número representado pelo parâmetro startNum e terminar com um número representado pelo parâmetro endNum. 
// O número inicial sempre será menor ou igual ao número final. Sua função precisa usar recursão para chamar a si mesma 
// e não deve depender de nenhum tipo de laço. Também deve funcionar para casos onde startNum e endNum tiverem o mesmo 
// valor. 
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

// Você precisa verificar todos os usernames em um banco de dados. Existem algumas regras que os usuários precisam 
// seguir quando criam os seus usernames.
//      1º Nomes de usuário só podem conter caracteres alfanuméricos.
//      2º Os números, se algum, precisam estar no fim da string. Pode haver zero ou mais números. Usernames não podem 
//      começar com números.
//      3º As letras podem ser maiúsculas ou minúsculas.
//      4º O tamanho de nomes de usuários precisa ser pelo menos dois. Um username de dois caracteres só pode conter 
//      letras. 
const teste19 = (nome) => {
    let str = nome
    let regex = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i
    let result = regex.test(str)
    return result
}
console.log(teste19("Gustavo"))

// Nós começamos escrevendo a função addFriend. Termine de escrevê-la para que receba um objeto user, adicione o nome do 
// argumento friend no array armazenado em user.data.friends e retorne esse array. 
let user = {
    name: 'Kenneth',
    age: 28,
    data: {
        username: 'kennethCodesAllDay',
        joinDate: 'March 26, 2016',
        organization: 'freeCodeCamp',
        friends: [
            'Sam',
            'Kira',
            'Tomo'
        ],
        location: {
            city: 'San Francisco',
            state: 'CA',
            country: 'USA'
        }
    }
}
function addFriend(userObj, friend) {
    userObj.data.friends.push(friend)
    return userObj.data.friends
}
console.log(addFriend(user, 'Pete'))

// Inverta a string fornecida e retorne-a com a inversão. 
function reverseString(str) {
    return str
        .split("")
        .reverse()
        .join("")
}

// Retorne o fatorial do inteiro fornecido. 
function factorialize(num) {
    if (num === 0) {
        return 1
    }
    return num * factorialize(num - 1)
}
console.log(factorialize(5))

// Retorne o comprimento da palavra mais longa na frase fornecida. 
function findLongestWordLength(str) {
    return Math.max(...str.split(" ").map(word => word.length))
}
console.log(findLongestWordLength("abra a cabeça"))

// Retorne um array que consiste no maior número de cada sub-array fornecido. Por simplicidade, o array fornecido 
// conterá exatamente 4 sub-arrays. 
function largestOfFour(arr) {
    return arr.map(Function.apply.bind(Math.max, null))
}
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))

// Repita uma string passada str (primeiro argumento), num vezes (segundo argumento). Retorne uma string vazia se num 
// não for um número positivo. 
function repeatStringNumTimes(str, num) {
    let newArr = []
    if (num <= 0) {
        return ""
    } else {
        for (let i = 0; i < num; i++) {
            newArr += str
        }
    }
    return newArr
}
console.log(repeatStringNumTimes("abc", 3))

// Trunque uma string (primeiro argumento) se ela for maior que o comprimento máximo da string (segundo argumento). 
// Retorne a string truncada com ... (reticências) ao final. 
function truncateString(str, num) {
    if (str.length > num) {
        return str.slice(0, num) + "..."
    } else {
        return str
    }
}
console.log(truncateString("Peter Piper jogou bola", 11))

// Crie uma função que olhe através do array arr e retorne o primeiro elemento dentro do array que passe pelo 'teste de 
// verdade' ('truth test'). Isso significa que, dado um elemento x, o 'teste de verdade' é verdadeiro se func(x) é true. 
// Se nenhum elemento passa no test, retorna undefined. 
function findElement(arr, func) {
    return arr.find(func)
}

// Verifique se um valor é classificado como booleano primitivo. Retorna true ou false. 
function booWho(bool) {
    if (typeof (bool) == "boolean") {
        return true
    } else {
        return false
    }
}
console.log(booWho(null))

// Retorne a string fornecida com a primeira letra de cada palavra em letra maiúscula. Certifique-se de que o resto da 
// palavra esteja em letras minúsculas. 
function titleCase(str) {
    return str
        .toLowerCase()
        .replace(/(^|\s)\S/g, L => L.toUpperCase())
}

// Você está recebendo dois arrays e um índice.
// Copie cada elemento da primeira matriz para a segunda matriz, em ordem.
// Comece inserindo elementos no índice n do segundo array.
// Retorne o array resultante. Os arrays recebidos devem permanecer os mesmos após a função ser executada. 
function frankenSplice(arr1, arr2, n) {
    return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)]
}

// Remover todos os valores falsos de um array. Retorna um novo array; não altere o array original.
// Valores falsos (falsy) em JavaScript são false, null, 0, "", undefined, e NaN.

// Dica: tente converter cada valor para um booleano
function bouncer(arr) {
    return arr.filter(Boolean)
}
console.log(bouncer([7, "ate", "", false, 9]))

// Retorne o menor índice em que um valor (segundo argumento) deve ser inserido no array (primeiro argumento) assim que 
// tenha sido ordenado. O valor retornado deve ser um número. 
function getIndexToIns(arr, num) {
    arr.sort((a, b) => a - b)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= num) return i
    }
    return arr.length
}
console.log(getIndexToIns([10, 20, 30, 40, 50], 30))

// Retorne true se a string no primeiro elemento do array contém todas as letras da string no segundo elemento do 
// array.
function mutation(arr) {
    const test = arr[1].toLowerCase()
    const target = arr[0].toLowerCase()
    for (let i = 0; i < test.length; i++) {
        if (target.indexOf(test[i]) < 0) return false
    }
    return true
}

// Escreva uma função que divida um array (primeiro argumento) em grupos com o comprimento de size (segundo argumento) 
// e os retorne como um array bidimensional. 
function chunkArrayInGroups(arr, size) {
    const newArr = []
    for (let i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i + size))
    }
    return newArr
}

// Separe as palavras usando .split() 
function splitify(str) {
    return str.split(/\W/)
}
console.log(splitify("Hello World,I-am code"))

