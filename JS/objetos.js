// Objetos são similares a arrays, exceto que, ao invés de usar índices para acessar e modificar seus dados, você acessa 
// os dados em objetos através do que se chama propriedades. Objetos são úteis para armazenar dados de forma estruturada 
// e podem representar objetos do mundo real, como um gato. 
// No entanto, se seu objeto tem quaisquer propriedades que não sejam strings, o JavaScript automaticamente definirá seus 
// tipos como strings. 

// Para ter um escaço, tem que colocar ""
const Eu = {
    primNome: "Gustavo",
    "segundo Nome": "Rodrigues",
    quantBracos: 2,
    quantPernas: 2
}

// Existem duas formas para acessar as propriedades de um objeto: notação de ponto (.) e notação de colchetes ([]), de 
// forma similar a um array. Notação de ponto é o que você utiliza quando você sabe o nome da propriedade que você está 
// tentando acessar antecipadamente. 
const primNome = Eu.primNome
// Procurar índice com espaço é com ["ind ice"]
const segunNome = Eu["segundo Nome"]
console.log(primNome, segunNome)

// Outro uso de notação de colchetes em objetos é para acessar a propriedade a qual está armazenada como o valor de uma 
// variável. Isso pode ser muito útil para iterar através das propriedades de um objeto ou quando acessando uma tabela 
// de pesquisa. 

// Tem que utilizar ""
const bracos = "quantBracos"
const verObj = Eu[bracos]
console.log(verObj)

// Depois de criar um objeto JavaScript, você pode atualizar suas propriedades a qualquer momento, como você atualizaria 
// qualquer outra variável. Você pode usar notação de ponto ou colchete para atualizar. 
Eu["segundo Nome"] = "Soares Rodrigues"
console.log(Eu)

// Podemos também excluir propriedades de objetos dessa forma.
delete Eu.quantPernas
console.log(Eu)

// Objetos podem ser pensados como armazenamento de chave/valor, como um dicionário. Se você tem um dado tabular, você 
// pode usar um objeto para pesquisar valores ao invés de uma instrução switch ou uma cadeia de if/else. Isso é mais 
// útil quando você sabe que o seu dado de entrada é limitado para um certo intervalo.
/*   
    Ex:
        switch(val) {
            case "alpha":
            result = "Adams";
            break;
            case "bravo":
            result = "Boston";
            break;
            case "charlie":
            result = "Chicago";
            break;
            case "delta":
            result = "Denver";
            break;
            case "echo":
            result = "Easy";
            break;
            case "foxtrot":
            result = "Frank";
        }
*/
// Poderia ser trocado por um Objeto igual a function abaixo.
function phoneticLookup(val) {
    let result = "";
    const lookup = {
        alpha: "Adams",
        bravo: "Boston",
        charlie: "Chicago",
        delta: "Denver",
        echo: "Easy",
        foxtrot: "Frank"
    }
    result = lookup[val]
    return result;
}
console.log(phoneticLookup("charlie"))

// Para verificar se uma propriedade em um determinado objeto existe ou não, você pode usar o método .hasOwnProperty(). 
// someObject.hasOwnProperty(someProperty) retorna true ou false, dependendo de a propriedade ser encontrada no objeto 
// ou não. 
function checarProp(object, prope) {
    if (object.hasOwnProperty(prope)) {
        return obj[prope]
    } else {
        return "Não Encontrado"
    }
}
console.log(checarProp(primNome, Eu))

// Às vezes, você pode querer armazenar dados em uma Estrutura de Dados flexível. Um objeto JavaScript é uma forma de 
// lidar com dados flexíveis. Eles permitem combinações arbitrárias de strings, numbers, booleans, arrays, functions e 
// objects. 
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

// Para garantir que seus dados não mudem, o JavaScript fornece a função Object.freeze que previne os dados de serem 
// modificados. Qualquer tentativa de alterar o objeto será rejeitada, com um erro sendo lançado se o script estiver 
// executando em modo estrito. 
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

// Atribuição de desestruturação é uma sintaxe especial introduzida na ES6, para atribuir nitidamente valores retirados 
// diretamente de um objeto. 
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
}
const { today, tomorrow } = HIGH_TEMPERATURES

// Desestruturar o permite atribuir um novo nome de variável quando extrair valores. Você pode fazer isso ao colocar o 
// novo nome após dois pontos quando atribuir o valor. 
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES

// Você pode usar os mesmos princípios das últimas duas lições para desestruturar valores de objetos aninhados. 
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
}
const { today: { low: lowToday, high: highToday2 } } = LOCAL_FORECAST

// Em alguns casos, você pode desestruturar um objeto no próprio argumento da função. 
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

// ES6 adiciona alguns suportes legais para facilmente definir literais de objetos.
// É uma função simples que retorna um objeto contendo duas propriedades. ES6 fornece o açúcar sintático para eliminar 
// a redundância de ter de escrever x: x. Você pode simplesmente escrever x uma vez, e será convertido para x: x (ou 
// algo equivalente) 
const createPerson = (name, age, gender) => {
    return {
        name,
        age,
        gender
    }
}

// Ao definir funções dentro de objetos em ES5, nós temos de usar a palavra-chave function().
// Com ES6, você pode remover a palavra-chave function e dois pontos ao definir funções em objetos. 
const bicycle = {
    gear: 2,
    setGear(newGear) {
        this.gear = newGear
    }
}
bicycle.setGear(3)
console.log(bicycle.gear)

// ES6 fornece uma nova sintaxe para criar objetos, usando a palavra-chave class.
// No ES5, um objeto pode ser criado definindo uma função constructor e usando a palavra-chave new para instanciar o 
// objeto.
// No ES6, uma declaração de class tem um método constructor, que é invocado com a palavra-chave new. Se o método 
// constructor não for explicitamente definido, ele será definido implicitamente sem argumentos. 
class Vegetable {
    constructor(name) {
        this.name = name
    }
}
const carrot = new Vegetable('carrot')
console.log(carrot.name)

// Você pode obter valores de um objeto e definir o valor da propriedade dentro de um objeto.
// Esses são classicamente chamados de getters e setters.
// Funções getter tem a finalidade de simplesmente retornar (get) o valor de uma variável privada de um objeto para o 
// usuário sem que o usuário acesse diretamente a variável privada.
// Funções setter tem a finalidade de modificar, ou definir (set), o valor de uma variável privada de um objeto baseado 
// no valor passado dentro da função setter. Essa mudança poderia envolver cálculos, ou até sobrescrever completamente 
// o valor anterior. 
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

// Objetos podem ter um tipo especial de propriedade, chamado de método.
// Os métodos são propriedades que são funções. Isso adiciona diferentes comportamentos para um objeto. 
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function () { return "This dog has 4 legs." }

}
dog.sayLegs()

// this refere-se ao objeto que o método está associado à: dog. Se o nome do objeto é alterado para mallard, não é 
// ecessariamente para encontrar todas as referencias para dog no código. Isso torna o código reutilizável e legível.

// sayLegs: function () { return "This dog has " + this.numLegs + "."}

// Construtores são funções que criam novos objetos. Eles definem propriedades e comportamentos que pertencerão ao novo 
// objeto. Pense neles como uma planta para a criação de novos objetos.
//      1º Construtores são definidos com a primeira letra do nome maiúscula para distinguir eles de outras funções que 
//      não são constructors.
//      2º Construtores usam a palavra-chave this para definir as propriedades do objeto que eles criarão. Dentro do 
//      construtor, this referencia para um novo objeto quer vai ser criado.
//      3º Construtores definem propriedades e comportamentos em vez de retornar valores como outras funções podem fazer. 
function Cachor() {
    this.name = "Albert"
    this.color = "blue"
    this.numLegs = 2
}

// Note que o operador new é usado quando chamamos o construtor. Isso avisa ao JavaScript para criar uma nova instância 
// de Dog chamado whiteDog. Sem o operador new, this dentro do construtor não iria apontar para o objeto recentemente 
// criado, dando resultados inesperados. Agora Dog possui todas as propriedades definidas dentro do construtor 
// Dog. 
let whiteDog = new Cachor()
console.log(whiteDog.name)

// Para criar diferentes objetos Dog de forma mais fácil, você pode projetar o construtor de Dog para aceitar 
// parâmetros. 
function Dog(name, color) {
    this.name = name
    this.color = color
    this.numLegs = 2
}
let paramDog = new Dog("Gustavo", "Marrom")
console.log(paramDog.name)

// Toda vez que a função construtora cria um novo objeto, o objeto é definido como uma instance do seu construtor. 
// JavaScript provê uma forma conveniente para verificar isso com o operador instanceof. instanceof permite que você 
// compare um objeto a um construtor, retornando true ou false caso seja ou não um objeto criado pelo construtor 
console.log(paramDog instanceof Dog)
console.log(whiteDog instanceof Cachor)

// O código a seguir adiciona todas as propriedades próprias (own properties) de paramDog para o array ownProps 
const verPropries = () => {
    let ownProps = []
    for (let property in paramDog) {
        if (paramDog.hasOwnProperty(property)) {
            ownProps.push(property)

        }
    }
    return ownProps
}
console.log(verPropries())