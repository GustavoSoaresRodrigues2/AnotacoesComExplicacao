/* Expressões regulares são usadas em linguagens de programação para encontrar e extrair partes de strings. Cria-se 
   padrões que ajudam a encontrar tais partes.
   Se você quiser encontrar a palavra the na str The dog chased the cat, você poderia usar a seguinte expressão 
   regular: /the/. Note que aspas não são necessárias ao redor da expressão regular.
   O JavaScript oferece múltiplas maneiras de usar regexes. Uma dessas maneiras é com o método .test(). O método 
   .test() aplica a regex à str dentro dos parênteses e retorna true caso encontre o padrão ou false caso 
   contrário. */
const teste1 = () => {
    let str = "o cachorro esta andando"
    let regex = /esta/
    let result = regex.test(str)
    return result
}
console.log(teste1())

/* Você pode procurar por múltiplos padrões usando o operador de alternation, ou OR: |.
   Este operador funciona para buscar padrões à esquerda e à direita dele. Por exemplo, se você quiser encontrar as 
   strings yes ou no, a regex que você quer é /yes|no/. */
const teste2 = () => {
    let str = "o cachorro esta brincando"
    let regex = /cachorro|esta/
    let result = regex.test(str)
    return result
}
console.log(teste2())

/* Existem várias flags, mas agora nós queremos a flag que ignora a caixa - a flag i. Para usá-la é só colocar ao fim da 
   regex. Por exemplo, escrever /ignorecase/i é uma forma. Essa regex pode encontrar as strings ignorecase, igNoreCase 
   e IgnoreCase (e todas as outras combinações de maiúsculas e minúsculas). */
const teste3 = () => {
    let str = "o caChoRrO esta comendo"
    let regex = /cachorro/i
    let result = regex.test(str)
    return result
}
console.log(teste3())

/* Você também pode extrair os resultados encontrados por meio do método .match().
   Para usar o método .match(), aplique o método em uma string e passe a regex dentro dos parênteses. */
const teste4 = () => {
    let str = "o cachorro esta dormindo"
    let regex = /dormindo/
    let result = str.match(regex)
    return result
}
console.log(teste4())

/* Para buscar ou extrair um padrão além do primeiro resultado, você pode usar a flag de busca global g. */
const teste5 = () => {
    let str = "o cachorro está brincando na praia, brincando no campo, brincando na rua"
    let regex = /brincando/g
    let result = str.match(regex)
    return result
}
console.log(teste5())

/* O caractere curinga . captura qualquer caractere. 
   Se você quiser encontrar hug, huh, hut ou hum, você pode usar a regex /hu./ para capturar todas as quatro palavras.*/
const teste6 = () => {
    let str = "o cachorro correu e seu corpo estava cansado"
    let regex = /cor.../g
    let result = str.match(regex)
    return result
}
console.log(teste6())

/* Você pode ter alguma flexibilidade ao procurar um padrão literal usando classes de caracteres. Classes de caracteres 
   permitem a definição de grupos de caracteres que você quer capturar ao colocá-los entre colchetes: [ e ].
   Por exemplo, se você quiser encontrar bag, big e bug mas não bog. Você pode escrever a regex /b[aiu]g/ para isso. 
   [aiu] é a classe de caracteres que só capturará a, i ou u. */
const teste7 = () => {
    let str = "big o bag o bug o bog"
    let regex = /b[aiu]g/g
    let result = str.match(regex)
    return result
}
console.log(teste7())

/* Você viu como pode usar conjuntos de caracteres para especificar um grupo de caracteres para capturar. Mas você 
   precisaria escrever muito para definir uma classe larga como, por exemplo, para capturar todas as letras do alfabeto. 
   Felizmente há uma maneira de fazer com que elas fiquem pequenas e simples.
   Você pode usar um hífen (-) para definir um intervalo de caracteres para capturar dentro de uma classe. */

/* O uso do hífen (-) para capturar um intervalo de caracteres não é limitado a letras. Ele também funciona para 
   capturar intervalos de números. */
const teste8 = () => {
    let str = "cat o bat o mat"
    let regex = /[a-d]at/g
    let result = str.match(regex)
    return result
}
console.log(teste8())

/* Até agora você aprendeu a criar classes de caracteres para capturar caracteres específicos, mas você também pode 
   usá-las para capturar caracteres ausentes nelas. Esse tipo de classe de caracteres é chamada classe de caracteres 
   negada.
   Para criar uma classe de caracteres negada, você só precisa colocar um acento circunflexo (^) depois do colchete 
   de abertura e à esquerda dos caracteres que você quer evitar. 
   [^caracteresQueNãoQueremos] */
const teste9 = () => {
    let str = "a rápida rapos@ marrom, pula sobre o cachorro preguiçoso!?."
    let regex = /[^a-z]/ig
    let result = str.match(regex)
    return result
}
console.log(teste9())

/* Às vezes você precisa capturar um caractere, ou grupo de caracteres, que aparece uma ou mais vezes seguidas. Ou seja, 
   que aparecem pelo menos uma vez e podem se repetir.
   Você pode usar o caractere + para verificar se é o caso. Lembre-se que o caractere ou padrão precisa repetir-se 
   consecutivamente. Ou seja, um atrás do outro.
   Por exemplo, /a+/g encontra um resultado na string abc e retorna ["a"]. Mas o + também faz com que encontre um único 
   resultado em aabc e retorne ["aa"]. */
const teste10 = () => {
    let str = "abaacaaabadacaeaaaadaaebecedeeaeeeefefffg"
    let regex = /a+/g
    let result = str.match(regex)
    return result
}
console.log(teste10())

/* O último desafio fez uso do caractere + para buscar caracteres que ocorrem uma ou mais vezes. Existe um outro 
   caractere que permite buscar zero ou mais ocorrências de um padrão.
   O caractere usado para isso é o asterisco: *. */
const teste11 = () => {
    let str = "Aaaaaaaaaaaaaaaarrrgh!!!"
    let regex = /Aa*/g
    let result = str.match(regex)
    return result
}
console.log(teste11())

/* Em expressões regulares, uma captura gananciosa encontra a parte mais longa o possível de uma string em que a regex 
   atua e a retorna como resultado. A alternativa se chama captura preguiçosa e ela encontra o menor pedaço possível de 
   uma string que satisfaz a regex. 
   Você pode usar o caractere ? para torná-la preguiçosa. Aplicar a regex adaptada /t[a-z]*?i/ à string "titanic" 
   retorna ["ti"].*/
const teste12 = () => {
    let str = "titanic afundou tiquitaqui"
    let regex = /t[a-z]*?i/ig
    let result = str.match(regex)
    return result
}
console.log(teste12())

/* Expressões regulares também podem ser usadas para procurar em posições específicas de strings. 
   Mais cedo você usou o circunflexo (^) em classes de caracteres para procurar caracteres que não devem ser capturados, 
   como em [^caracteresQueNãoQueremos]. Quando usados fora de classes de caracteres, o circunflexo serve para buscar a 
   partir do começo de strings. */
const teste13 = () => {
    let str = "primeira palavra e ultima"
    let regex = /^primeira/
    let result = regex.test(str)
    return result
}
console.log(teste13())

/* Se você colocar um cifrão, $, no fim da regex, você pode buscar no fim de strings. */
const teste14 = () => {
    let str = "primeira palavra e ultima"
    let regex = /ultima$/
    let result = regex.test(str)
    return result
}
console.log(teste14())

/* Em JavaScript, você pode usar \w para capturar todas as letras do alfabeto. Isso é equivalente à classe de caracteres 
   [A-Za-z0-9_]. Ela captura números e letras, tanto maiúsculas quanto minúsculas. Note que o underline (_) também é 
   incluído nela. */
const teste15 = () => {
    let str = "The five xing wizards jump quickly."
    let regex = /\w/g // ou /\w+/g para pegar a palavra inteira
    let result = str.match(regex).length
    return result
}
console.log(teste15())

/* Você pode capturar não alfanuméricos usando \W */
const teste16 = () => {
    let str = "a 50% do tempo e !9 ?45 está"
    let regex = /\W/g
    let result = str.match(regex)
    return result
}
console.log(teste16())

/* O atalho para procurar caracteres numéricos é \d */
const teste17 = () => {
    let str = "+55 (81) 9-9999-9: o numero de algum lugar"
    let regex = /\d/g
    let result = str.match(regex)
    return result
}
console.log(teste17())

/* Você também pode procurar não dígitos usando um atalho semelhante que usa um \D */
const teste18 = () => {
    let str = "@#$% casa foca lança 12345 654321"
    let regex = /\D/g
    let result = str.match(regex)
    return result
}
console.log(teste18())

/* Você precisa verificar todos os usernames em um banco de dados. Existem algumas regras que os usuários precisam 
   seguir quando criam os seus usernames.
   1º Nomes de usuário só podem conter caracteres alfanuméricos.
   2º Os números, se algum, precisam estar no fim da string. Pode haver zero ou mais números. Usernames não podem 
   começar com números.
   3º As letras podem ser maiúsculas ou minúsculas.
   4º O tamanho de nomes de usuários precisa ser pelo menos dois. Um username de dois caracteres só pode conter 
   letras. */
const teste19 = (nome) => {
    let str = nome
    let regex = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i
    let result = regex.test(str)
    return result
}
console.log(teste19("Gustavo"))

/* Você pode usar o atalho \s com um s minúsculo para capturar espaços em branco. Este atalho não captura apenas espaços 
   em branco como também retorno de carro, tabulações, feeds de formulário e quebras de linha. O atalho é equivalente à 
   classe de caracteres [ \r\t\f\n\v]. */
const teste20 = () => {
    let str = "Whitespace is important in separating words"
    let regex = /\s/g
    let result = str.match(regex)
    return result
}
console.log(teste20())

/* Não busque espaços em branco usando \S com um s maiúsculo. Este atalho não captura espaços em branco, retorno de 
   carro, tabulações, feeds de formulário ou quebras de linha. O atalho é equivalente à classe de caracteres 
   [^ \r\t\f\n\v]. */
const teste21 = () => {
    let str = "Whitespace is important in separating words"
    let regex = /\S/g
    let result = str.match(regex)
    return result
}
console.log(teste21())

/* Você pode especificar um número mínimo e um máximo de capturas com especificadores de quantidade. Para usar 
   especificadores de quantidade, usa-se chaves: { e }. Você pode especificar os dois números dentro delas para 
   restringir as capturas. */
const teste22 = () => {
    let str = "aaaaaah aaah aah aaaaah ah"
    let regex = /a{3,5}h/g
    let result = str.match(regex)
    return result
}
console.log(teste22())

/* Você pode especificar um número mínimo e um máximo de capturas com chaves. Haverá vezes que você precisará 
   especificar um mínimo mas não um máximo.
   Para fazer isso, apenas escreva o número seguido de uma vírgula dentro das chaves. */
const teste23 = () => {
    let str = "aaaaaah aaah aah aaaaah ah" + "a".repeat(150) + "h"
    let regex = /a{4,}h/g
    let result = str.match(regex)
    return result
}
console.log(teste23())

/* Você pode especificar um número mínimo e um máximo de capturas com chaves. Às vezes, você só quer um número 
   específico de capturas. */
const teste24 = () => {
    let str = "aaaaaah aaah aah aaaaah ah" + "a".repeat(150) + "h" + "aah"
    let regex = /a{2}h/g
    let result = str.match(regex)
    return result
}
console.log(teste24())

/* Haverá vezes em que você procurará padrões que podem ou não existir na string. Pode ser relevante validá-los 
   dependendo da situação.
   Você pode fazer com que um padrão seja opcional ao usar uma interrogação, ?, depois dele. Ela valida se há uma ou 
   nenhuma ocorrência do padrão. Pode-se dizer que a interrogação torna o elemento à esquerda dela opcional. */
const teste25 = () => {
    let str = "pedir e pederneira"
    let regex = /ped?erneira/g
    let result = regex.test(str)
    return result
}
console.log(teste25())

