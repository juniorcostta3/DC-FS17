
let escolha = "CUPOM AZUL"
// a chave / key ou nesse caso variável escolha é um valor que não é um booleano. Os casos/ opções (case) são a exata ocorrência do valor da variável passada para a chave
switch (escolha) {
    case "CUPOM VERDE":
        console.log("10%  de desconto")        
        break;

    case "CUPOM AMARELO":
        console.log("20% de desconto")
        break;

    case "CUPOM AZUL":
        console.log("30% de desconto")
        break;

     case "CUPOM VERMELHO":
        console.log("40% de desconto")
        break;

    default:
        console.log("Nenhum desconto foi aplicado")
        break;
}