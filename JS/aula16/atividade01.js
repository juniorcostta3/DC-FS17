let numeroMaximo = parseInt(prompt("Digite o número máximo:"));

for (let i = 1; i <= numeroMaximo; i++) {
    if (i % 2 === 0 && i % 5 === 0) {
        console.log(i + " é divisível por 2 e 5");
    }

}