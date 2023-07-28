/* Você pode usar typeof para verificar a estrutura de dado, ou tipo, de uma variável. Isso é útil na depuração quando 
   trabalhando com diversos tipos de dados. */
console.log(typeof "")
console.log(typeof 45)
console.log(typeof [])

/* e se quisermos remover um elemento de algum lugar do meio? Ou remover mais de um elemento de uma vez? Bem, é aí que 
   splice() pode ser útil. splice() nos permite fazer isso: remover qualquer número de elementos consecutivos de 
   qualquer lugar no array.
   splice pode receber 3 parâmetros, mas por agora, nós focaremos apenas nos 2 primeiros. Os dois primeiros parâmetros 
   de splice() são inteiros que representam índices, ou posições, dos itens no array para o qual o método splice() está 
   sendo chamado. */
const teste30 = () => {
    let array = ['I', 'am', 'feeling', 'really', 'happy']
    let newArr = array.splice(3, 2)
    return newArr
}
console.log(teste30())

/* splice() pode receber até três parâmetros? Bem, você pode usar o terceiro parâmetro, composto por um ou mais 
   elementos, para adicionar algo ao array. Isso pode ser incrivelmente útil para mudar rapidamente de um elemento, ou 
   um conjunto de elementos, para outro. */
const teste31 = () => {
    let array = [10, 11, 12, 12, 15]
    let comArr = 3
    let fimArr = 1
    array.splice(comArr, fimArr, 13, 14)
    return array
}
console.log(teste31())

/* O próximo método que abordaremos é slice(). Em vez de modificar um array, slice() copia ou extrai um determinado 
   número de elementos para um novo array, deixando o array em que o método é chamado inalterado. slice() recebe apenas 
   2 parâmetros — o primeiro é o índice aonde começar a extração e o segundo é o índice no qual parar a extração 
   (a extração ocorrerá até esse índice mas não o incluirá) */
const teste32 = () => {
    let array = ['rain', 'snow', 'sleet', 'hail', 'clear']
    let newArr = array.slice(1, 3)
    return newArr
}
console.log(teste32())

/* Enquanto slice() nos permite sermos seletivos sobre quais elementos de um array copiar, entre várias outras tarefas 
   úteis, o novo operador spread do ES6 nos permite facilmente copiar todos os elementos de um array, em ordem, com uma 
   sintaxe simples e altamente legível. A sintaxe de spread é simplesmente essa: ... */
const teste33 = () => {
    let array = [true, true, undefined, false, null]
    let arrayIgual = [...array]
    return arrayIgual
}
console.log(teste33())

/* Outra grande vantagem do operador spread é a capacidade de combinar arrays, ou de inserir todos os elementos de um 
   array em outro, em qualquer índice. */
const teste34 = () => {
    let array = ["maçã", "banana"]
    let arrayJunt = ["manga", "limão", ...array, "laranja"]
    return arrayJunt
}
console.log(teste34())

/* Já que arrays podem ser alterados, ou mutados, a qualquer momento, não há garantia de onde um dado estará em um 
   determinado array, ou se esse elemento sequer existe. Felizmente, o JavaScript nos fornece outro método integrado, 
   indexOf(), que nos permite rapidamente e facilmente checar pela presença de um elemento em um array. indexOf() 
   recebe um elemento como parâmetro, e quando chamado, retorna a posição, ou índice, daquele elemento, ou -1 se o 
   elemento não existe no array. */
const teste35 = () => {
    let array = ["pneu", "porta", "volante", "banco", "pessoa"]
    return array.indexOf("aad")
}
console.log(teste35())

/* Às vezes quando trabalhando com arrays, é muito útil ser capaz de iterar sobre cada item para encontrar um ou mais 
   elementos que podemos precisar, ou para manipular o array baseado em qual item de dados atende a determinados 
   critérios. JavaScript oferece diversos métodos integrados que fazem iteração sobre arrays de formas ligeiramente 
   diferentes para alcançar resultados diferentes (como every(), forEach(), map(), entre outros). Porém, a técnica mais 
   flexível e que nos oferece a maior capacidade de controle é o laço for simples. */
function filteredArray(arr, elem) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(elem) == -1) {
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3))

/* Às vezes, você precisa iterar através de todas as chaves dentro de um objeto. Você pode usar um laço for... in para 
   fazer isso. */
const refrigerator = {
    'milk': 1,
    'eggs': 12,
}
for (const food in refrigerator) {
    // Este código registra milk 1 e eggs 12, com cada par de chave-valor em sua própria linha.
    console.log(food, refrigerator[food])
}

/* Também podemos gerar um array o qual contém todas as chaves armazenadas em um objeto com o método Object.keys(). Esse 
   método recebe um objeto como argumento e retorna um array de strings que representam cada propriedade no objeto. 
   Novamente, não haverá uma ordem específica para as entradas no array. */
let users = {
    Alan: {
        age: 27,
        online: false
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: false
    },
    Ryan: {
        age: 19,
        online: true
    }
}
function getArrayOfUsers(obj) {
    return Object.keys(obj)
}
console.log(getArrayOfUsers(users))

/* Nós começamos escrevendo a função addFriend. Termine de escrevê-la para que receba um objeto user, adicione o nome do 
   argumento friend no array armazenado em user.data.friends e retorne esse array. */
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

/* Inverta a string fornecida e retorne-a com a inversão. */
function reverseString(str) {
    return str
        .split("")
        .reverse()
        .join("")
}

/* Retorne o fatorial do inteiro fornecido. */
function factorialize(num) {
    if (num === 0) {
        return 1
    }
    return num * factorialize(num - 1)
}
console.log(factorialize(5))

/* Retornar o comprimento da palavra mais longa na frase fornecida. */
function findLongestWordLength(str) {
    return Math.max(...str.split(" ").map(word => word.length))
}
console.log(findLongestWordLength("abra a cabeça"))

/* Retorna um array que consiste no maior número de cada sub-array fornecido. Por simplicidade, o array fornecido 
   conterá exatamente 4 sub-arrays. */
function largestOfFour(arr) {
    return arr.map(Function.apply.bind(Math.max, null))
}
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))