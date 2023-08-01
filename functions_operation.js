// JavaScript fornece oito tipos de dados diferentes que são undefined, null, boolean, string, symbol, bigint, 
// number e object.

// Diferente de var, ao usar let, uma variável com o mesmo nome só pode ser declarada uma única vez. 

// const possui todos os recursos maravilhosos que let tem, com o bônus adicional que variáveis declaradas usando 
// const são somente de leitura. Elas têm um valor constante, o que significa que a variável atribuída com const não 
// pode ser atribuída novamente. 

// i++; equivalente a i = i + 1; 
// i--; equivalente a i = i - 1; 
// myVar += 5; equivalente a myVar = myVar + 5; 
// myVar -= 5; equivalente a myVar = myVar - 5; 
// mantem esse padrão para * e /, só trocar as operações.

// operador de resto % retorna o resto da divisão de dois números.
// Ex: 5 % 2 = 1 

// Em JavaScript, nós podemos dividir nosso código em partes reutilizáveis chamadas de funções. 
function Ola() {
    console.log("Eae :D")
}
console.log(Ola())

// Parâmetros são variáveis que atuam como espaços reservados para os valores que são passados para uma função, 
// quando ela é chamada. Quando uma função é definida, normalmente ela é definida junto com um ou mais parâmetros. 
// Os valores reais que são entradas de (ou "passadas" para) uma função quando ela é chamada são conhecidos como 
// argumentos. 
// Nós podemos passar valores para uma função com argumentos. Você pode usar uma instrução return para enviar um valor 
// para fora de uma função. 
function soma(num1, num2) {
    return num1 + num2
}
console.log(soma(4, 6))

// Em JavaScript, escopo refere-se à visibilidade de variáveis. Variáveis que são definidas fora de um bloco de função 
// tem o escopo Global. Isso significa que elas podem ser vistas em qualquer lugar no seu código JavaScript.
// Variáveis que são declaradas sem a palavra-chave let ou const são automaticamente criadas no escopo global. Isso 
// pode criar consequências indesejadas em outro lugar no seu código ou quando executar uma função novamente. 
const varGlobal = "Sou Global"
function ReturnVar() {
    const varGlobal = "Sou Local"
    return varGlobal
}
console.log(varGlobal, ReturnVar())

// Uma função pode incluir a instrução return mas ela não precisa fazer isso. No caso de a função não ter uma instrução 
// return, quando você a chamar, a função processa o código interno, mas o valor retornado é undefined. 
function voltaUndefined() {
    let sum = 2
    sum = sum * 6
}
console.log(voltaUndefined())

// Na Ciência da Computação, uma fila é uma estrutura de dados abstrata onde itens são mantidos em ordem. Novos itens 
// podem ser adicionados no final da fila e itens mais antigos são removidos do início da fila. 

// Adicione o item no final do array e então remova o primeiro elemento do array.
function nextInLine(arr, item) {
    arr.push(item)
    return arr.shift()
}
// Configuração
let testArr = [1, 2, 3, 4, 5]
// Exibir o código
console.log("Before: " + JSON.stringify(testArr))
console.log(nextInLine(testArr, 6))
console.log("After: " + JSON.stringify(testArr))

// Booleanos podem ser apenas dois valores: true ou false. Eles basicamente são interruptores pequenos, onde true é 
// ligado e false é desligado. Esses dois estados são mutuamente exclusivos.
// Valores booleanos nunca são escritos com aspas. As strings "true" e "false" não são booleanos e não tem nenhum 
// significado especial em JavaScript. 

// O operador mais básico é o operador de igualdade ==. O operador de igualdade compara dois valores e retorna true 
// se eles são equivalentes ou false se não são. Observe que o operador de igualdade é diferente do operador de 
// atribuição (=). 

// Igualdade estrita (===) é a contrapartida do operador de igualdade (==). No entanto, ao contrário do operador de 
// igualdade, que tenta converter ambos os valores em comparação a um tipo comum, o operador estrito de igualdade não 
// realiza uma conversão de tipo. 
// Ex:  3 ===  3  // true
//      3 === '3' // false   
function returnCondicao(condicao) {
    if (condicao === true) {
        // Condição verdadeira
        return true
    } else {
        // Condição falsa ou não definida
        return false
    }
}
console.log(returnCondicao(true))

// Você pode se lembrar de Comparação com o operador de igualdade, em que todos os operadores de comparação retornam 
// um valor booleano true ou false.
// Há uma forma melhor de fazer isso. Já que === retorna true ou false 
function voltarSimplificado(a, b) {
    return a === b
}
console.log(voltarSimplificado(1, 1))

// O operador de desigualdade (!=) é o oposto do operador de igualdade. Significa que não é igual e retorna false 
// onde a igualdade retornaria true e vice-versa. 
// Ex:  1 !=  2    // true
//      1 != "1"   // false
//      1 != '1'   // false
//      1 != true  // false
//      0 != false // false   
function testStrictNotEqual(val) {
    if (val != 17) {
        return "Not Equal (true)"
    }
    return "Equal (false)"
}
console.log(testStrictNotEqual(17))

// O operador de desigualdade estrito (!==) é o oposto lógico do operador de igualdade estrito. Significa que "não é 
// estritamente igual" e retorna false onde a igualdade estrita retornaria true e vice-versa. O operador de desigualdade 
// estrita não converterá tipos de dados. 
// Ex:  3 !==  3  // false
//      3 !== '3' // true
//      4 !==  3  // true   
function testStrictNotEqual2(val) {
    if (val !== 17) {
        return "Not Equal (true)"
    }
    return "Equal (false)"
}
console.log(testStrictNotEqual2(12))

// O operador maior que (>) compara os valores de dois números. Se o número à esquerda for maior que o número à direita, 
// ele retorna true. Caso contrário, ele retorna false.
// Tal como o operador de igualdade, o operador maior que converterá os tipos de dados de valores enquanto compara.
// Ex:  5   >  3   // true
//      7   > '3'  // true
//      2   >  3   // false
//     '1'  >  9   // false   
function comparar(nume) {
    if (nume > 50) {
        return "É maior q 50"
    } else if (nume > 20) {
        return "É maior q 20"
    } else {
        return "É menor q 20"
    }
}
console.log(comparar(51))

// O operador maior ou igual que (>=) compara os valores de dois números. Se o número à esquerda é maior ou igual ao 
// número à direita, ele retorna true. Caso contrário, ele retornará false.
// Tal como o operador de igualdade, o operador maior que converterá os tipos de dados de valores enquanto compara. 
function compararIgual(nume) {
    if (nume >= 50) {
        return "É maior ou igual q 50"
    } else if (nume >= 20) {
        return "É maior ou igual q 20"
    } else {
        return "É menor q 20"
    }
}
console.log(compararIgual(50))

// As regras se repetem para < ou <= (menor).

// Às vezes, você precisará testar mais de uma coisa de cada vez. O operador lógico AND (&&) retornará true apenas se 
// os operadores à esquerda e à direita forem verdadeiros. 
function testeLogico(algo) {
    if (algo < 60 && algo > 6) {
        return "É Menor q 60 e Maior q 6"
    } else {
        return "É Menor q 6 ou Maior q 60"
    }
}
console.log(testeLogico(59))

// O operador lógico OR (||) retorna true se qualquer um dos operandos for true. Caso contrário, retorna false. 
// O operador lógico ou é composto por dois símbolos de pipe: (||). 
function funcaoOU(tipo) {
    if (tipo > 20 || tipo < 10) {
        return "Está fora entre 10 e 20"
    } else {
        return "Está dentro entre 10 e 20"
    }
}
console.log(funcaoOU(21))

// No jogo de golfe, cada buraco tem um par, significando o número médio de strokes que se espera que golfista faça a 
// fim de derrubar a bola no buraco para completar a jogada. Dependendo da distância acima ou abaixo de par que seu número 
// de strokes estiver, há diferentes apelidos.
// Sua função receberá os argumentos par e strokes. Retorne a string correta de acordo com esta tabela que lista os strokes 
// em ordem de prioridade: superior (mais alta) para o final (mais baixo):
/*
        Strokes	            Return
           1	         "Hole-in-one!"
       <= par - 2	        "Eagle"
        par - 1	            "Birdie"
          par	             "Par"
        par + 1	            "Bogey"
        par + 2	        "Double  Bogey"
       >= par + 3	       "Go Home!"
*/
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"]
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0]
    } else if (strokes <= par - 2) {
        return names[1]
    } else if (strokes == par - 1) {
        return names[2]
    } else if (strokes == par) {
        return names[3]
    } else if (strokes == par + 1) {
        return names[4]
    } else if (strokes == par + 2) {
        return names[5]
    } else if (strokes >= par + 3) {
        return names[6]
    }
}
console.log(golfScore(5, 8))

// Se você precisar corresponder um valor a muitas opções, pode usar uma instrução switch. Uma instrução switch compara 
// o valor a uma instrução de caso, que define os diversos valores possíveis. Quaisquer instruções JavaScript válidas 
// podem ser executadas dentro de um bloco de caso (case) e serão executadas a partir do primeiro valor de case 
// correspondente até que um break seja encontrado. 
function switchTest(abc) {
    let voltar = ""
    switch (abc) {
        case 1:
            voltar = "Alpha"
            break
        case 2:
            voltar = "Beta"
            break
        case 3:
            voltar = "Gamma"
            break
        case 4:
            voltar = "Delta"
            break
        default:
            voltar = "Não atendeu a nenhum  critério"
            break
    }
    return voltar
}
console.log(switchTest(2))

// Se a instrução break for omitida de uma instrução case de um switch, as instruções case seguintes serão executadas 
// até que seja encontrado um break. Se você tem várias entradas com a mesma saída, você pode representá-las em uma 
// instrução switch 
function sequenciaSwitch(req) {
    let answer = ""
    switch (req) {
        case 1:
        case 2:
        case 3:
            answer = "Low"
            break
        case 4:
        case 5:
        case 6:
            answer = "Mid"
            break
        case 7:
        case 8:
        case 9:
            answer = "High"
            break
    }
    return answer
}
console.log(sequenciaSwitch(6))

// No jogo de casino Blackjack, um jogador pode determinar se tem uma vantagem sobre a próxima mão da casa, mantendo o 
// número relativo de cartas altas e baixas restantes no baralho. Isso se chama "contar as cartas".
// Ter cartas mais altas restantes no baralho favorece o jogador. A cada carta é atribuído um valor de acordo com a 
// tabela abaixo. Quando o contador for positivo, o jogador deve apostar alto. Quando a contagem for zero ou negativa, 
// o jogador deverá apostar baixo. 
var count = 0
function cc(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++
            break
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--
            break
    }
    var holdbet = 'Hold'
    if (count > 0) {
        holdbet = 'Bet'
    }
    return count + " " + holdbet
}
console.log(cc(4))

// Recursão é o conceito de que uma função pode ser chamada por ela mesma. Para ajudar a entender isso, comece a pensar 
// sobre a seguinte tarefa: multiplique os primeiros n elementos de um array para criar o produto desses elementos. 
// Uma função recursiva, sum(arr, n), que retorna a soma dos primeiros n elementos de um array arr. 
function sumRecursao(arr, n) {
    if (n <= 0) {
        return 0
    } else {
        return sumRecursao(arr, n - 1) + arr[n - 1]
    }
}
console.log(sumRecursao([5, 6, 7], 2))

// Números aleatórios são úteis para criar comportamento aleatório. JavaScript tem a função Math.random() que gera 
// um número decimal aleatório entre 0 (incluso) e 1 (excluso). Assim, Math.random() pode retornar um 0 mas nunca 
// retornará 1. 
function randomFraction() {
    return Math.random()
}
console.log(randomFraction())

// Você pode gerar números decimais aleatórios com Math.random(), mas, às vezes, você precisa gerar números naturais 
// aleatórios.
// N é um número natural a escolha que o resultado vai ser menor que ele. 
//      1º Use Math.random() para gerar um número decimal aleatório.
//      2º Multiplique o número decimal aleatório por N.
//      3º Use Math.floor() para arredondar o número para baixo para o número natural mais próximo.
function randomWholeNum(n) {
    return Math.floor(Math.random() * n)
}
console.log(randomWholeNum(15))

// Você pode gerar um número natural aleatório no intervalo entre zero e um número dado. Você também pode escolher um 
// número diferente para este intervalo.
// Chamaremos o número mínimo de min e o número máximo de max. 
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
}
console.log(randomRange(7, 112))

// A função parseInt() analisa uma string e retorna um inteiro. 
// Se o primeiro caractere na string não pode ser convertido em um número, então ele retorna NaN. 
function convertToInteger(str) {
    return parseInt(str)
}
console.log(convertToInteger("56"))

// A função parseInt() analisa uma string e retorna um inteiro. É preciso um segundo argumento para o radix, que 
// especifica a base do número na string. O radix pode ser um inteiro entre 2 e 36.
// Converte um número binário em um inteiro. 
function convertToInteger2(str) {
    return parseInt(str, 2)
}
console.log(convertToInteger2("100011"))

// Vamos analisar uma função mais complexa, a qual retorna um array de inteiros consecutivos começando com 1 até o 
// número passado para a função. 
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

// No JavaScript, muitas vezes não precisamos nomear nossas funções, especialmente quando passamos uma função como 
// argumento para outra função. Em vez disso, criamos funções anônimas. Como não vamos reutilizar essas funções 
// posteriormente, não precisamos nomeá-las. 
const functionAnonimo = () => "anonimo"
console.log(functionAnonimo)
console.log(functionAnonimo())

// Assim como uma função normal, você pode passar argumentos para uma arrow function. 
const myConcat = (arr1, arr2) => arr1.concat(arr2)
console.log(myConcat([1, 2], [3, 4, 5]))

// Para nos ajudar a criar funções mais flexíveis, a versão ES6 introduziu os parâmetros padrão para funções. 
const greeting = (name = "Anonymous") => "Hello " + name
console.log(greeting("John"))
console.log(greeting())

// Para nos ajuda a criar funções mais flexíveis, ES6 introduziu o parâmetro rest para parâmetros de funções. Com o 
// parâmetro rest, você pode criar funções que recebem um número variável de argumentos. Esses argumentos são armazenados 
// em um array que pode ser acessado depois dentro da função. 
const sum = (...args) => {
    let total = 0
    for (let i = 0; i < args.length; i++) {
        total += args[i]
    }
    return total
}
console.log(sum(1, 2, 6, 6, 8, 4, 1))

// ES6 introduz o operador spread, o qual nos permite expandir arrays e outras expressões no lugar aonde é esperado 
// diversos parâmetros ou elementos. 
const arr = [6, 89, 3, 45]
const maximus = Math.max(...arr)
console.log(maximus)

// Para compartilhar funções com esses outros arquivos, você primeiro precisa exportá-las (export). 
export {convertToInteger}

// import te permite escolher quais partes carregar de um arquivo ou módulo. 
import { verIqual } from "./lacos.js"
console.log(verIqual(9))

// Suponha que você tem um arquivo e deseja importar todo o conteúdo dele no arquivo atual. Isso pode ser feito com a 
// sintaxe import * as.
// A instrução import acima criará um objeto chamado myMathModule. Esse nome é totalmente arbitrário. Você pode escolher 
// qualquer outro nome que seja apropriado para sua aplicação. O objeto conterá todas as exportações do arquivo 
// import * as {modulo} from "./arquivo desejado"

// Há outra sintaxe para export que você precisa saber, conhecida como exportação padrão. Você usará essa sintaxe quando 
// apenas um valor estiver sendo exportado de um arquivo ou módulo. Essa sintaxe também é usada para exportar um valor 
// substituto caso o valor original não possa ser exportado. 
export default function subtract(x, y) {
    return x - y
}

// A sintaxe é diferente em apenas um ponto. O valor importado, subtract, não está rodeado por chaves ({}). Aqui, 
// subtract é simplesmente uma palavra qualquer que vai ser usada para identificar a variável sendo exportada do arquivo. 
// Você pode usar qualquer nome ao importar algo que foi exportado como padrão. 

//  Para importar uma exportação padrão, você precisa usar uma sintaxe diferente de import. 
// import subtract from "./arquivo desejado"

/**//**//**//**/

// Uma promessa em JavaScript é exatamente o que parece - você faz a promessa de que vai fazer uma tarefa, geralmente de 
// forma assíncrona. Quando a tarefa é finalizada, ou você cumpriu a promessa ou falhou ao tentar. Por ser uma função 
// construtora, você precisa utilizar a palavra-chave new para criar uma Promise. Ela recebe uma função, como seu 
// argumento, com dois parâmetros - resolve e reject. Esses métodos são usados para determinar o resultado da 
// promessa. 
// const makeServerRequest = new Promise((resolve, reject) => { })

// Uma promessa possui três estados: pendente (pending), cumprida (fulfilled) e rejeitada (rejected).
// A promessa que você criou acima está presa no estado pending para sempre porque você não adicionou 
// uma forma de concluir a promessa.
// Os parâmetros resolve e reject passados para o argumento da promessa servem para este propósito. resolve é utilizado 
// quando a promessa for bem-sucedida, enquanto reject é utilizado quando ela falhar. Ambos são métodos que recebem 
// apenas um argumento 
const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer
    if (responseFromServer) {
        resolve("We got the data") // Altere esta linha
    } else {
        reject("Data not received")// Altere esta linha
    }
})

// Promessas são úteis quando você tem um processo que leva uma quantidade de tempo desconhecido para ser finalizado 
// (ou seja, algo assíncrono). Muitas vezes, uma requisição a um servidor. Fazer uma requisição a um servidor leva 
// tempo, e após a requisição ser finalizada, você geralmente quer fazer algo com a resposta retornada. Isso pode ser 
// feito usando o método then. O método then é executado imediatamente após a promessa ser cumprida com resolve. 
makeServerRequest.then(result => {
    console.log(result)
})

// catch é o método usado quando a promessa é rejeitada. Ele é executado imediatamente após o método reject da promessa 
// ser chamado.  
makeServerRequest.catch(error => {
    console.log(error)
})

// Você pode usar typeof para verificar a estrutura de dado, ou tipo, de uma variável. Isso é útil na depuração quando 
// trabalhando com diversos tipos de dados. 
console.log(typeof "")
console.log(typeof 45)
console.log(typeof [])

// Essa é uma expressão de função anônima que executa logo após ser declarada.
/*
    (function() {
        return console.log('Eu sou executado apenas quando a página carrega')
    }) da erro n sei pq '-'kkkkk
*/

