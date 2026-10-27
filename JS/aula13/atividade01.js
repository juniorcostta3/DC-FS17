const nomeProduto = "controle";
const precoProduto = 49.90;
const quantidadeProduto = 25;
const estoque = true;
const imagem = "https://placehold.co/600x400?text=Hello\nWorld";
const corProduto = "Preto";

console.log(nomeProduto, typeof nomeProduto);
console.log(precoProduto, typeof precoProduto);
console.log(quantidadeProduto, typeof quantidadeProduto);
console.log(estoque, typeof estoque);
console.log(imagem, typeof imagem);
console.log(corProduto, typeof corProduto);

// concatenação de texto: pode utilizar valores de variáveis mais texto definido pelo desenvolvedor para criar um novo texto ou uma exibição melhor da informação

console.log("O produto " + nomeProduto + " custa R$" + precoProduto + " e temos " + quantidadeProduto + " unidades em estoque.");

// pode-se usar o tamplate string ou literal para criar uma concatenação de texto mais legível e fácil de escrever

console.log(`O produto ${nomeProduto} custa R$${precoProduto} e temos ${quantidadeProduto-20} unidades em estoque.`);