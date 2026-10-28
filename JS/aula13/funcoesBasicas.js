// Todas as funções básicas são nativas do JS porém alguns precisam do navegador para funcionar. ex: alert, confirm, prompt

// o alert apenas mostra a informação na tela, não retorna nada
let retorno = alert("Olá, mundo!");
console.log(retorno) // retorna undefined

// undefined é direfernte de null, undefined é quando a variável não foi inicializada, null é quando a variável foi inicializada mas não tem valor

// o confirm mostra um diálogo de null, pois null significa que a variável foi declarada mas nenhuma informação foi atribuída a ela. O confirm retorna true ou false dependendo da escolha do usuário
retorno = confirm("Deseja realmente apagar?")
console.log(retorno)

// o prompt mostra um diálogo de input, onde o usuário pode digitar algo. O prompt retorna o valor digitado pelo usuário ou null caso ele cancele a operação
retorno = prompt("Digite seu nome:")
console.log(retorno)

retorno = prompt('Qual sua idade?')
console.log(retorno)
console.log(typeof retorno) // o prompt sempre retorna uma string, mesmo que o usuário digite um número. Para converter para number, podemos usar a função Number()

/*--FUNÇÃO DE CONVERSÃO DE TIPOS--*/

const numero = "100.01"
// parseInt() -> converte para inteiro
let numeroInteiro = parseInt(numero)
console.log(numeroInteiro)
// parseFloat() -> converte um texto em um numero decimal
let numeroDecimal = parseFloat(numero)
console.log(numeroDecimal)
// Number() -> converte para número, seja inteiro ou decimal
let numeroConvertido = Number(numero)
console.log(numeroConvertido)