/* Em JavaScript, nós podemos dividir nosso código em partes reutilizáveis chamadas de funções. */
function Ola() {
    console.log("Eae :D")
}
console.log(Ola())

/* Parâmetros são variáveis que atuam como espaços reservados para os valores que são passados para uma função, 
   quando ela é chamada. Quando uma função é definida, normalmente ela é definida junto com um ou mais parâmetros. 
   Os valores reais que são entradas de (ou "passadas" para) uma função quando ela é chamada são conhecidos como 
   argumentos. */
/* Nós podemos passar valores para uma função com argumentos. Você pode usar uma instrução return para enviar um valor 
   para fora de uma função. */
function Somar(num1, num2) {
    return num1 + num2
}
console.log(Somar(4, 6))

/* Em JavaScript, escopo refere-se à visibilidade de variáveis. Variáveis que são definidas fora de um bloco de função 
   tem o escopo Global. Isso significa que elas podem ser vistas em qualquer lugar no seu código JavaScript.
   Variáveis que são declaradas sem a palavra-chave let ou const são automaticamente criadas no escopo global. Isso 
   pode criar consequências indesejadas em outro lugar no seu código ou quando executar uma função novamente. */
const varFora = "Sou Global"

function ReturnVar() {
    const varFora = "Sou Local"
    return varFora
}
console.log(varFora, ReturnVar())

/* Uma função pode incluir a instrução return mas ela não precisa fazer isso. No caso de a função não ter uma instrução 
   return, quando você a chamar, a função processa o código interno, mas o valor retornado é undefined. */
function voltaUndefined() {
    let sum = 2
    sum = sum * 6
}
console.log(voltaUndefined())

/* Na Ciência da Computação, uma fila é uma estrutura de dados abstrata onde itens são mantidos em ordem. Novos itens 
   podem ser adicionados no final da fila e itens mais antigos são removidos do início da fila. */

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

/* Booleanos podem ser apenas dois valores: true ou false. Eles basicamente são interruptores pequenos, onde true é 
   ligado e false é desligado. Esses dois estados são mutuamente exclusivos.
   Valores booleanos nunca são escritos com aspas. As strings "true" e "false" não são booleanos e não tem nenhum 
   significado especial em JavaScript. */

/* O operador mais básico é o operador de igualdade ==. O operador de igualdade compara dois valores e retorna true 
   se eles são equivalentes ou false se não são. Observe que o operador de igualdade é diferente do operador de 
   atribuição (=). */

/* Igualdade estrita (===) é a contrapartida do operador de igualdade (==). No entanto, ao contrário do operador de 
   igualdade, que tenta converter ambos os valores em comparação a um tipo comum, o operador estrito de igualdade não 
   realiza uma conversão de tipo. 
   Ex:  3 ===  3  // true
        3 === '3' // false   */
function returnVerdade(condicao) {
    if (condicao === true) {
        // Condição verdadeira
        return true
    } else {
        // Condição falsa ou não definida
        return false
    }
}
console.log(returnVerdade(true))

/* O operador de desigualdade (!=) é o oposto do operador de igualdade. Significa que não é igual e retorna false 
   onde a igualdade retornaria true e vice-versa. 
   Ex:  1 !=  2    // true
        1 != "1"   // false
        1 != '1'   // false
        1 != true  // false
        0 != false // false   */
function testStrictNotEqual(val) {
    if (val != 17) {
        return "Not Equal (true)"
    }
    return "Equal (false)"
}

console.log(testStrictNotEqual(17))

/* O operador de desigualdade estrito (!==) é o oposto lógico do operador de igualdade estrito. Significa que "não é 
   estritamente igual" e retorna false onde a igualdade estrita retornaria true e vice-versa. O operador de desigualdade 
   estrita não converterá tipos de dados. 
   Ex:  3 !==  3  // false
        3 !== '3' // true
        4 !==  3  // true   */
function testStrictNotEqual(val) {
    if (val !== 17) {
        return "Not Equal (true)"
    }
    return "Equal (false)"
}

console.log(testStrictNotEqual(12))

/* O operador maior que (>) compara os valores de dois números. Se o número à esquerda for maior que o número à direita, 
   ele retorna true. Caso contrário, ele retorna false.
   Tal como o operador de igualdade, o operador maior que converterá os tipos de dados de valores enquanto compara.
   Ex:  5   >  3   // true
        7   > '3'  // true
        2   >  3   // false
       '1'  >  9   // false   */
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

/* O operador maior ou igual que (>=) compara os valores de dois números. Se o número à esquerda é maior ou igual ao 
   número à direita, ele retorna true. Caso contrário, ele retornará false.
   Tal como o operador de igualdade, o operador maior que converterá os tipos de dados de valores enquanto compara. */
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

/* Às vezes, você precisará testar mais de uma coisa de cada vez. O operador lógico AND (&&) retornará true apenas se 
   os operadores à esquerda e à direita forem verdadeiros. */
function testeLogico(algo) {
    if (algo < 60 && algo > 6) {
        return "É Menor q 60 e Maior q 6"
    } else {
        return "É Menor q 6 ou Maior q 60"
    }
}
console.log(testeLogico(59))

/* O operador lógico OR (||) retorna true se qualquer um dos operandos for true. Caso contrário, retorna false. 
   O operador lógico ou é composto por dois símbolos de pipe: (||). */
function funcaoOU(tipo) {
    if (tipo > 20 || tipo < 10) {
        return "Está fora entre 10 e 20"
    } else {
        return "Está dentro entre 10 e 20"
    }
}
console.log(funcaoOU(21))

/* No jogo de golfe, cada buraco tem um par, significando o número médio de strokes que se espera que golfista faça a 
   fim de derrubar a bola no buraco para completar a jogada. Dependendo da distância acima ou abaixo de par que seu número 
   de strokes estiver, há diferentes apelidos.
   Sua função receberá os argumentos par e strokes. Retorne a string correta de acordo com esta tabela que lista os strokes 
   em ordem de prioridade: superior (mais alta) para o final (mais baixo):

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

// Test
console.log(golfScore(5, 8))

/* Se você precisar corresponder um valor a muitas opções, pode usar uma instrução switch. Uma instrução switch compara 
   o valor a uma instrução de caso, que define os diversos valores possíveis. Quaisquer instruções JavaScript válidas 
   podem ser executadas dentro de um bloco de caso (case) e serão executadas a partir do primeiro valor de case 
   correspondente até que um break seja encontrado. */
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

/* Se a instrução break for omitida de uma instrução case de um switch, as instruções case seguintes serão executadas 
   até que seja encontrado um break. Se você tem várias entradas com a mesma saída, você pode representá-las em uma 
   instrução switch */
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

/* Você pode se lembrar de Comparação com o operador de igualdade, em que todos os operadores de comparação retornam 
   um valor booleano true ou false.     linha 69 */
/* Há uma forma melhor de fazer isso. Já que === retorna true ou false */
function voltarSimplificado(a, b) {
    return a === b
}
console.log(voltarSimplificado(1, 1))

/* No jogo de casino Blackjack, um jogador pode determinar se tem uma vantagem sobre a próxima mão da casa, mantendo o 
   número relativo de cartas altas e baixas restantes no baralho. Isso se chama "contar as cartas".
   Ter cartas mais altas restantes no baralho favorece o jogador. A cada carta é atribuído um valor de acordo com a 
   tabela abaixo. Quando o contador for positivo, o jogador deve apostar alto. Quando a contagem for zero ou negativa, 
   o jogador deverá apostar baixo. */
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

/* Objetos são similares a arrays, exceto que, ao invés de usar índices para acessar e modificar seus dados, você acessa 
   os dados em objetos através do que se chama propriedades. Objetos são úteis para armazenar dados de forma estruturada 
   e podem representar objetos do mundo real, como um gato. 
   No entanto, se seu objeto tem quaisquer propriedades que não sejam strings, o JavaScript automaticamente definirá seus 
   tipos como strings. */

// Para ter um escaço, tem que colocar "".
const Eu = {
    primNome: "Gustavo",
    "segundo Nome": "Rodrigues",
    quantBracos: 2,
    quantPernas: 2
}

/* Existem duas formas para acessar as propriedades de um objeto: notação de ponto (.) e notação de colchetes ([]), de 
   forma similar a um array. Notação de ponto é o que você utiliza quando você sabe o nome da propriedade que você está 
   tentando acessar antecipadamente. */
const primNome = Eu.primNome
// Procurar índice com espaço é com ["ind ice"]. 
const segunNome = Eu["segundo Nome"]
console.log(primNome, segunNome)

/* Outro uso de notação de colchetes em objetos é para acessar a propriedade a qual está armazenada como o valor de uma 
   variável. Isso pode ser muito útil para iterar através das propriedades de um objeto ou quando acessando uma tabela 
   de pesquisa. */
// Tem que utilizar "".
const bracos = "quantBracos"
const verObj = Eu[bracos]
console.log(verObj)

/* Depois de criar um objeto JavaScript, você pode atualizar suas propriedades a qualquer momento, como você atualizaria 
   qualquer outra variável. Você pode usar notação de ponto ou colchete para atualizar. */
Eu["segundo Nome"] = "Soares Rodrigues"
console.log(Eu)

/* Podemos também excluir propriedades de objetos dessa forma: */
delete Eu.quantPernas
console.log(Eu)

/* Objetos podem ser pensados como armazenamento de chave/valor, como um dicionário. Se você tem um dado tabular, você 
   pode usar um objeto para pesquisar valores ao invés de uma instrução switch ou uma cadeia de if/else. Isso é mais 
   útil quando você sabe que o seu dado de entrada é limitado para um certo intervalo.
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
    
    Poderia ser trocado por um Objeto igual a function abaixo
*/
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