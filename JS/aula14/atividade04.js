let numero1 = Number(prompt("Digite o primeiro numero"));
let numero2 = Number(prompt("Digite o segundo numero"));
let numero3 = Number(prompt("Digite o terceiro numero"));

somaLetras = numero1 + numero2

if(somaLetras > numero3){
    console.log(`A soma dos numeros ${numero1} e ${numero2} é maior que o numero ${numero3}.`);
}

else if(somaLetras < numero3){
    console.log(`A soma dos numeros ${numero1} e ${numero2} é menor que o numero ${numero3}.`);
}

else{
    console.log(`A soma dos numeros ${numero1} e ${numero2} é igual ao numero ${numero3}.`);
}