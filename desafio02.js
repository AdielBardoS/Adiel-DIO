//Calculadora de partidas Rankeadas
//**O Que deve ser utilizado**
//
//- Variáveis
//- Operadores
//- Laços de repetição
//- Estruturas de decisões
//- Funções
//
//## Objetivo:
//
//Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
//depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)
//
//Se vitórias for menor do que 10 = Ferro
//Se vitórias for entre 11 e 20 = Bronze
//Se vitórias for entre 21 e 50 = Prata
//Se vitórias for entre 51 e 80 = Ouro
//Se vitórias for entre 81 e 90 = Diamante
//Se vitórias for entre 91 e 100= Lendário
//Se vitórias for maior ou igual a 101 = Imortal
//
//## Saída
//
//Ao final deve se exibir uma mensagem:
//"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

let ranking = calcularMMR(50, 5);

function calcularMMR(vitorias, derrotas) {
    calcularMMR = vitorias - derrotas
    return calcularMMR
}

if (ranking < 10){
        console.log("O Herói tem de saldo de " + ranking + " vitórias e está no nível Ferro");
    } else if (ranking >= 11 && ranking <= 20) { 
        console.log("O Herói tem de saldo de " + ranking + " vitórias e está no nível Bronze");  
    } else if (ranking >= 21 && ranking <= 50) {
        console.log("O Herói tem de saldo de " + ranking + " vitórias e está no nível Prata");
    } else if (ranking >= 51 && ranking <= 80) {
        console.log("O Herói tem de saldo de " + ranking + " vitórias e está no nível Ouro");
    } else if (ranking >= 81 && ranking <= 90) {
        console.log("O Herói tem de saldo de " + ranking + " vitórias e está no nível Diamante");
    } else if (ranking >= 91 && ranking <= 100) {
        console.log("O Herói tem de saldo de " + ranking + " vitórias e está no nível Lendário");
    } else if (ranking > 101) {
        console.log("O Herói tem de saldo de " + ranking + " vitórias e está no nível Imortal");
    }

