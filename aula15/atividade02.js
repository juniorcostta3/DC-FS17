/*A03-Q03 */

let limite = parseInt(prompt("Digite o número limite:"));
let numero = 0;

if (!isNaN(limite) && limite >= 0) {
    console.log(`Números pares de 0 até ${limite}:`);
    while (numero <= limite) {
        console.log(numero);
        numero += 2; 
    }
} else {
    alert("Por favor, digite um número inteiro maior ou igual a zero!");
}
