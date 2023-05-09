class Animal{
    constructor(especie,peso,porte,anoNascimento){
        this.especie = especie
        this.peso = peso;
        this.porte = porte;
        this.anoNascimento = anoNascimento
    }

    fazBarulho(){
        console.log("fazendo barulho...")
    }

    voltaIdade(anoAtual){
        return (anoAtual - this.anoNascimento)
    }
}

class Gato extends Animal{
    constructor(especie,cor,raca){
        super(especie);
        this.cor = cor;
        this.raca = raca
    }
    miar(){
        console.log("miaaaaaaaaaaaaaaaaaaaaaaau...")
    }
}



//programa principal

let animal1 = new Animal("Tigre",200,"grande",2000)
let animal2 = new Animal("Galinha",2,"pequeno",2022)
let animal3 = new Gato("felino","preto","persa")

console.log(animal1.especie)
animal1.fazBarulho()
console.log(animal1.voltaIdade(2023))
console.log(animal3.especie)
animal3.fazBarulho()
animal3.miar()
animal3.anoNascimento = 2020
console.log(animal3.voltaIdade(2023))