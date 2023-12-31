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

// Uma diferença chave entre o operador spread (...) e a desestruturação de array é que o operador spread retira todos 
// os conteúdos de um array e coloca em uma lista com elementos separados por vírgula. Consequentemente, você não pode 
// pegar ou escolher quais elementos você quer atribuir a variáveis.

// Desestruturar um array nos permite fazer exatamente isso 
const [a, b] = [1, 2, 3, 4, 5, 6]
console.log(a, b)

// Em algumas situações envolvendo um array desestruturado, podemos querer coletar o resto dos elementos em um array 
// separado. 
function removeFirstTwo(list) {
    const [a, b, ...shorterList] = list
    return shorterList
}
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const sourceWithoutFirstTwo = removeFirstTwo(source)
console.log(sourceWithoutFirstTwo)

// splice() pode receber até três parâmetros? Bem, você pode usar o terceiro parâmetro, composto por um ou mais 
// elementos, para adicionar algo ao array. Isso pode ser incrivelmente útil para mudar rapidamente de um elemento, ou 
// um conjunto de elementos, para outro. 
const teste31 = () => {
    let array = [10, 11, 12, 12, 15]
    let comArr = 3
    let fimArr = 1
    array.splice(comArr, fimArr, 13, 14)
    return array
}
console.log(teste31())

// O próximo método que abordaremos é slice(). Em vez de modificar um array, slice() copia ou extrai um determinado 
// número de elementos para um novo array, deixando o array em que o método é chamado inalterado. slice() recebe apenas 
// 2 parâmetros — o primeiro é o índice aonde começar a extração e o segundo é o índice no qual parar a extração 
// (a extração ocorrerá até esse índice mas não o incluirá).
const teste32 = () => {
    let array = ['rain', 'snow', 'sleet', 'hail', 'clear']
    let newArr = array.slice(1, 3)
    return newArr
}
console.log(teste32())

// Enquanto slice() nos permite sermos seletivos sobre quais elementos de um array copiar, entre várias outras tarefas 
// úteis, o novo operador spread do ES6 nos permite facilmente copiar todos os elementos de um array, em ordem, com uma 
// sintaxe simples e altamente legível. A sintaxe de spread é simplesmente essa: ... 
const teste33 = () => {
    let array = [true, true, undefined, false, null]
    let arrayIgual = [...array]
    return arrayIgual
}
console.log(teste33())

// Outra grande vantagem do operador spread é a capacidade de combinar arrays, ou de inserir todos os elementos de um 
// array em outro, em qualquer índice. 
const teste34 = () => {
    let array = ["maçã", "banana"]
    let arrayJunt = ["manga", "limão", ...array, "laranja"]
    return arrayJunt
}
console.log(teste34())

// Já que arrays podem ser alterados, ou mutados, a qualquer momento, não há garantia de onde um dado estará em um 
// determinado array, ou se esse elemento sequer existe. Felizmente, o JavaScript nos fornece outro método integrado, 
// indexOf(), que nos permite rapidamente e facilmente checar pela presença de um elemento em um array. indexOf() 
// recebe um elemento como parâmetro, e quando chamado, retorna a posição, ou índice, daquele elemento, ou -1 se o 
// elemento não existe no array. 
const teste35 = () => {
    let array = ["pneu", "porta", "volante", "banco", "pessoa"]
    return array.indexOf("aad")
}
console.log(teste35())

// Às vezes quando trabalhando com arrays, é muito útil ser capaz de iterar sobre cada item para encontrar um ou mais 
// elementos que podemos precisar, ou para manipular o array baseado em qual item de dados atende a determinados 
// critérios. JavaScript oferece diversos métodos integrados que fazem iteração sobre arrays de formas ligeiramente 
// diferentes para alcançar resultados diferentes (como every(), forEach(), map(), entre outros). Porém, a técnica mais 
// flexível e que nos oferece a maior capacidade de controle é o laço for simples. 
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

// Às vezes, você precisa iterar através de todas as chaves dentro de um objeto. Você pode usar um laço for... in para 
// fazer isso. 
const refrigerator = {
    'milk': 1,
    'eggs': 12,
}
for (const food in refrigerator) {
    // Este código registra milk 1 e eggs 12, com cada par de chave-valor em sua própria linha.
    console.log(food, refrigerator[food])
}

// Também podemos gerar um array o qual contém todas as chaves armazenadas em um objeto com o método Object.keys(). Esse 
// método recebe um objeto como argumento e retorna um array de strings que representam cada propriedade no objeto. 
// Novamente, não haverá uma ordem específica para as entradas no array. 
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

// O método map percorre cada item de um array e retorna um novo array cujos elementos são os resultados da chamada da 
// função de callback para cada item. Isso tudo acontece sem modificar o array original.
// A variável global
const watchList = [
    {
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "18 Jul 2008",
        "Runtime": "152 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        "Language": "English, Mandarin",
        "Country": "USA, UK",
        "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        "Metascore": "82",
        "imdbRating": "9.0",
        "imdbVotes": "1,652,832",
        "imdbID": "tt0468569",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        "Language": "English, Urdu, Mandarin",
        "Country": "USA, UK",
        "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
        "Metascore": "70",
        "imdbRating": "8.3",
        "imdbVotes": "972,584",
        "imdbID": "tt0372784",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA, UK",
        "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        "Metascore": "83",
        "imdbRating": "7.9",
        "imdbVotes": "876,575",
        "imdbID": "tt0499549",
        "Type": "movie",
        "Response": "True"
    }
]
const ratings = watchList.map(item => ({
    title: item["Title"],
    rating: item["imdbRating"]
}))
console.log(JSON.stringify(ratings))

// filter chama uma função em cada elemento de um array e retorna um novo array contendo apenas os elementos para os 
// quais aquela função retorna um valor verdadeiro - ou seja, um valor que retorna true se passada para o construtor 
// Boolean(). Em outras palavras, ele filtra o array de acordo com a função passada a ele. Ele o faz sem alterar o 
// array original assim como map.
// A função de callback toma três argumentos. O primeiro argumento é o elemento que está a ser processado. O segundo é 
// o índice deste elemento e o terceiro é o array do qual filter foi chamado. 
const filteredList = watchList
    .filter(({ imdbRating }) => imdbRating >= 8.0)
    .map(({ Title: title, imdbRating: rating }) => ({ title, rating }))
console.log(filteredList)

// Concatenação significa juntar itens de ponta a ponta. Em JavaScript, strings e arrays possuem o método concat e ele 
// funciona igualmente para os dois. Para arrays, o método é chamado em uma instância e um segundo array é passado como 
// argumento. concat então junta os dois arrays em um só. O método retorna um novo array e deixa os dois originais 
// intactos. 
console.log([1, 2, 3].concat([4, 5, 6]))

// O método reduce permite formas mais gerais de processamento de array, e é possível mostrar que tanto o filter quanto 
// o map podem ser derivados como aplicações especiais de reduce. O método reduce percorre cada elemento de um array e 
// retorna um valor (uma string, um número, um objeto ou array). Isso pode ser feito através de uma função de callback 
// que é chamada para cada elemento.
// A função de callback recebe quatro argumentos. O primeiro argumento é conhecido como o acumulador, ao qual é atribuído 
// o resultado da função de callback na iteração anterior. O segundo é o elemento a ser processado. O terceiro é o 
// índice do elemento e o quarto é o array do qual reduce foi chamado.
// Além da função de callback, reduce tem um parâmetro adicional que recebe um valor inicial para o acumulador. Se 
// o segundo parâmetro não for usado, então a primeira iteração é ignorada e ao acumulador é atribuído o primeiro elemento 
// do array na segunda iteração. 
function getRating(watchList) {
    const averageRating = watchList
        .filter(film => film.Director === "Christopher Nolan")
        .map(film => Number(film.imdbRating))
        .reduce((sumOfRatings, rating) => sumOfRatings + rating) /
        watchList.filter(film => film.Director === "Christopher Nolan").length
    return averageRating
}

// O método sort consegue ordenar os elementos de um array de acordo com uma função de callback.
// Use o método sort na função alphabeticalOrder para ordenar os elementos de arr em ordem alfabética. A função deve 
// retornar o array ordenado. 
function alphabeticalOrder(arr) {
    return arr.sort(function (a, b) {
        return a === b ? 0 : a < b ? -1 : +1
    })
}
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]))

// Um efeito colateral do método sort é que ele altera a ordem dos elementos no array original. Em outras palavras, o 
// array sofre uma mutação. Uma forma de evitar isto é primeiro concatenar um array vazio ao array a ordenar (não esqueça 
// que slice e concat retornam um novo array) e, então, executar o método sort no novo array. 
var globalArray = [5, 6, 3, 2, 9]
function nonMutatingSort(arr) {
    return [].concat(arr).sort(function (a, b) {
        return a - b
    })
}
console.log(nonMutatingSort(globalArray))

// O método join é usado para juntar os elementos de um array, resultando em uma string. Ele recebe um delimitador como 
// argumento, que é usado para conectar os elementos na string. 
function sentensify(str) {
    return str.split(/\W/).join(" ")
}
console.log(sentensify("May-the-force-be-with-you"))

// O método every funciona verificando se todos os elementos de um array passam em um teste. Ele retorna um 
// booleano: true se todos os valores atendem ao critério e false caso contrário. 
function checkPositive(arr) {
    return arr.every(function (value) {
        return value > 0
    })
}
console.log(checkPositive([1, 2, 3, -4, 5]))

// O método some funciona verificando se pelo menos um dos elementos de um array passam em um teste. Ele retorna um 
// booleano: true se pelo menos um valor atende ao critério e false caso contrário. 
function checkPositive2(arr) {
    return arr.some(elem => elem > 0)
}
console.log(checkPositive2([1, 2, 3, -4, 5]))