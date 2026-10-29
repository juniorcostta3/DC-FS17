const nome = prompt("Digite seu nome")
let nota1 = prompt("Digite primeira nota")
let nota2 = prompt("Digite segunda nota")
let nota3 = prompt("Digite terceira nota")

let resultadoNota = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3

if(resultadoNota >= 7){
    console.log(`O aluno ${nome} está aprovado.`);
}

else{
    console.log(`O aluno ${nome} está reprovado.`);
}