/* Para garantir que seus dados não mudem, o JavaScript fornece a função Object.freeze que previne os dados de serem 
   modificados. Qualquer tentativa de alterar o objeto será rejeitada, com um erro sendo lançado se o script estiver 
   executando em modo estrito. */
function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14
    }
    Object.freeze(MATH_CONSTANTS)
    try {
        MATH_CONSTANTS.PI = 99
    } catch (ex) {
        return console.log(ex)
    }
    return MATH_CONSTANTS.PI
}
console.log(freezeObj())

/* No JavaScript, muitas vezes não precisamos nomear nossas funções, especialmente quando passamos uma função como 
   argumento para outra função. Em vez disso, criamos funções anônimas. Como não vamos reutilizar essas funções 
   posteriormente, não precisamos nomeá-las. */
const functionAnonimo = () => "anonimo"
console.log(functionAnonimo)
console.log(functionAnonimo())

/* Assim como uma função normal, você pode passar argumentos para uma arrow function. */
const myConcat = (arr1, arr2) => arr1.concat(arr2)
console.log(myConcat([1, 2], [3, 4, 5]))

/* Para nos ajudar a criar funções mais flexíveis, a versão ES6 introduziu os parâmetros padrão para funções. */
const greeting = (name = "Anonymous") => "Hello " + name
console.log(greeting("John"))
console.log(greeting())

/* Para nos ajuda a criar funções mais flexíveis, ES6 introduziu o parâmetro rest para parâmetros de funções. Com o 
   parâmetro rest, você pode criar funções que recebem um número variável de argumentos. Esses argumentos são armazenados 
   em um array que pode ser acessado depois dentro da função. */
const sum = (...args) => {
    let total = 0
    for (let i = 0; i < args.length; i++) {
        total += args[i]
    }
    return total
}
console.log(sum(1, 2, 6, 6, 8, 4, 1))

/* ES6 introduz o operador spread, o qual nos permite expandir arrays e outras expressões no lugar aonde é esperado 
   diversos parâmetros ou elementos. */
const arr = [6, 89, 3, 45]
const maximus = Math.max(...arr)
console.log(maximus)

/* Atribuição de desestruturação é uma sintaxe especial introduzida na ES6, para atribuir nitidamente valores retirados 
   diretamente de um objeto. */
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
}
const { today, tomorrow } = HIGH_TEMPERATURES

/* Desestruturar o permite atribuir um novo nome de variável quando extrair valores. Você pode fazer isso ao colocar o 
   novo nome após dois pontos quando atribuir o valor. */
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES

/* Você pode usar os mesmos princípios das últimas duas lições para desestruturar valores de objetos aninhados. */
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
}
const { today: { low: lowToday, high: highToday2 } } = LOCAL_FORECAST

/* Uma diferença chave entre o operador spread (...) e a desestruturação de array é que o operador spread retira todos 
   os conteúdos de um array e coloca em uma lista com elementos separados por vírgula. Consequentemente, você não pode 
   pegar ou escolher quais elementos você quer atribuir a variáveis.
   Desestruturar um array nos permite fazer exatamente isso */
const [a, b] = [1, 2, 3, 4, 5, 6]
console.log(a, b)

/* Em algumas situações envolvendo um array desestruturado, podemos querer coletar o resto dos elementos em um array 
   separado. */
function removeFirstTwo(list) {
    const [a, b, ...shorterList] = list
    return shorterList
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const sourceWithoutFirstTwo = removeFirstTwo(source)
console.log(sourceWithoutFirstTwo)

/* Em alguns casos, você pode desestruturar um objeto no próprio argumento da função. */
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
}
const half = ({ max, min }) => {
    return (max + min) / 2.0
}

/* Um novo recurso introduzido na versão ES6 é o template literal. Esse é um tipo especial de string que torna mais 
   fácil a criação de strings complexas.
   Template literals nos permitem criar strings de mais de uma linha e usar os recursos de interpolação de strings. */
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
}
function makeList(arr) {
    const failureItems = []
    for (let i = 0; i < arr.length; i++) {
        failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
    }
    return failureItems
}
const failuresList = makeList(result.failure)
console.log(failuresList)

/* ES6 adiciona alguns suportes legais para facilmente definir literais de objetos.
   É uma função simples que retorna um objeto contendo duas propriedades. ES6 fornece o açúcar sintático para eliminar 
   a redundância de ter de escrever x: x. Você pode simplesmente escrever x uma vez, e será convertido para x: x (ou 
   algo equivalente) */
const createPerson = (name, age, gender) => {
    return {
        name,
        age,
        gender
    }
}

/* Ao definir funções dentro de objetos em ES5, nós temos de usar a palavra-chave function().
   Com ES6, você pode remover a palavra-chave function e dois pontos ao definir funções em objetos. */
const bicycle = {
    gear: 2,
    setGear(newGear) {
        this.gear = newGear
    }
}
bicycle.setGear(3)
console.log(bicycle.gear)

/* ES6 fornece uma nova sintaxe para criar objetos, usando a palavra-chave class.
   No ES5, um objeto pode ser criado definindo uma função constructor e usando a palavra-chave new para instanciar o 
   objeto.
   No ES6, uma declaração de class tem um método constructor, que é invocado com a palavra-chave new. Se o método 
   constructor não for explicitamente definido, ele será definido implicitamente sem argumentos. */
class Vegetable {
    constructor(name) {
        this.name = name
    }
}
const carrot = new Vegetable('carrot')
console.log(carrot.name)

/* Você pode obter valores de um objeto e definir o valor da propriedade dentro de um objeto.
   Esses são classicamente chamados de getters e setters.
   Funções getter tem a finalidade de simplesmente retornar (get) o valor de uma variável privada de um objeto para o 
   usuário sem que o usuário acesse diretamente a variável privada.
   Funções setter tem a finalidade de modificar, ou definir (set), o valor de uma variável privada de um objeto baseado 
   no valor passado dentro da função setter. Essa mudança poderia envolver cálculos, ou até sobrescrever completamente 
   o valor anterior. */
class Thermostat {
    constructor(fahrenheit) {
        this._fahrenheit = fahrenheit
    }
    get temperature() {
        return (5 / 9) * (this._fahrenheit - 32)
    }
    set temperature(celsius) {
        this._fahrenheit = (celsius * 9.0) / 5 + 32
    }
}
const thermos = new Thermostat(76) // Definição na escala Fahrenheit
let temp = thermos.temperature // 24,44 em Celsius
thermos.temperature = 26
temp = thermos.temperature// 26 em Celsius
console.log(temp)

/* Para compartilhar funções com esses outros arquivos, você primeiro precisa exportá-las (export). */
// esta em functionsDois.js / linha 295

/* import te permite escolher quais partes carregar de um arquivo ou módulo. */
import { convertToInteger, verZero } from "./functionsDois.js"
console.log(convertToInteger(9))
console.log(verZero(45))

/* Suponha que você tem um arquivo e deseja importar todo o conteúdo dele no arquivo atual. Isso pode ser feito com a 
   sintaxe import * as.
   A instrução import acima criará um objeto chamado myMathModule. Esse nome é totalmente arbitrário. Você pode escolher 
   qualquer outro nome que seja apropriado para sua aplicação. O objeto conterá todas as exportações do arquivo */
// import * as importFunctionsDois from "./functionsDois.js"

/* Há outra sintaxe para export que você precisa saber, conhecida como exportação padrão. Você usará essa sintaxe quando 
   apenas um valor estiver sendo exportado de um arquivo ou módulo. Essa sintaxe também é usada para exportar um valor 
   substituto caso o valor original não possa ser exportado. */
export default function subtract(x, y) {
    return x - y
}

/* Para importar uma exportação padrão, você precisa usar uma sintaxe diferente de import. */
// import subtract from "./math_functions.js";

/* A sintaxe é diferente em apenas um ponto. O valor importado, subtract, não está rodeado por chaves ({}). Aqui, 
   subtract é simplesmente uma palavra qualquer que vai ser usada para identificar a variável sendo exportada do arquivo. 
   Você pode usar qualquer nome ao importar algo que foi exportado como padrão. */

// 

/* Uma promessa em JavaScript é exatamente o que parece - você faz a promessa de que vai fazer uma tarefa, geralmente de 
   forma assíncrona. Quando a tarefa é finalizada, ou você cumpriu a promessa ou falhou ao tentar. Por ser uma função 
   construtora, você precisa utilizar a palavra-chave new para criar uma Promise. Ela recebe uma função, como seu 
   argumento, com dois parâmetros - resolve e reject. Esses métodos são usados para determinar o resultado da 
   promessa. */
// const makeServerRequest = new Promise((resolve, reject) => { })

/* Uma promessa possui três estados: pendente (pending), cumprida (fulfilled) e rejeitada (rejected).
   A promessa que você criou acima está presa no estado pending para sempre porque você não adicionou 
   uma forma de concluir a promessa.
   Os parâmetros resolve e reject passados para o argumento da promessa servem para este propósito. resolve é utilizado 
   quando a promessa for bem-sucedida, enquanto reject é utilizado quando ela falhar. Ambos são métodos que recebem 
   apenas um argumento */
const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer
    if (responseFromServer) {
        resolve("We got the data") // Altere esta linha
    } else {
        reject("Data not received")// Altere esta linha
    }
})

/* Promessas são úteis quando você tem um processo que leva uma quantidade de tempo desconhecido para ser finalizado 
   (ou seja, algo assíncrono). Muitas vezes, uma requisição a um servidor. Fazer uma requisição a um servidor leva 
   tempo, e após a requisição ser finalizada, você geralmente quer fazer algo com a resposta retornada. Isso pode ser 
   feito usando o método then. O método then é executado imediatamente após a promessa ser cumprida com resolve. */
makeServerRequest.then(result => {
    console.log(result)
})

/* catch é o método usado quando a promessa é rejeitada. Ele é executado imediatamente após o método reject da promessa 
   ser chamado.  */
makeServerRequest.catch(error => {
    console.log(error)
})

