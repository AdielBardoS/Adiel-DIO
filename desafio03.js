//Escrevendo as classes de um Jogo
//
// O Que deve ser utilizado**
//- Variáveis
//- Operadores
//- Laços de repetição
//- Estruturas de decisões
//- Funções
//- Classes e Objetos
//
//## Objetivo:
//
//Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:
//
//- nome
//- idade
//- tipo (ex: guerreiro, mago, monge, ninja )
//
//além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:
//
//- exibir a mensagem: "o {tipo} atacou usando {ataque}")
//- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
//- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:
//
//se mago -> no ataque exibir (usou magia)
//se guerreiro -> no ataque exibir (usou espada)
//se monge -> no ataque exibir (usou artes marciais)
//se ninja -> no ataque exibir (usou shuriken)
//
//## Saída
//
//Ao final deve se exibir uma mensagem:
//
//- "o {tipo} atacou usando {ataque}"
//  ex: mago atacou usando magia
//  guerreiro atacou usando espada 

class heroi {
    constructor(nome, idade, tipo, ataque) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = ataque = ["Magia", "Espada", "Artes Marciais", "Shuriken"];
    }
    
    atacar() {

        for (let index in this.ataque) {
            index + this.ataque[0,1,2,3]
            }

         if (this.tipo == "Mago") {
            console.log("O " + this.tipo + " atacou usando " + this.ataque[0])
         }
         else if(this.tipo == "Guerreiro") {
            console.log("O " + this.tipo + " atacou usando " + this.ataque[1])
         }
         else if (this.tipo == "Monge") {
            console.log("O " + this.tipo + " atacou usando " + this.ataque[2])
         }
         else if (this.tipo == "Ninja") {
            console.log("O " + this.tipo + " atacou usando " + this.ataque[3])
         }
        
    }

}

let hero = new heroi("Adiel", 27, "Mago");

console.log(hero.atacar());