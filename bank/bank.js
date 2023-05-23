// CLASSSES
class Conta{
    constructor(numero,cpf,saldo,ativo){
        this.numero = numero;
        this.cpf = cpf; 
        this.saldo = saldo;
        this.ativo = ativo
    }

    ativar(){
        this.ativo = true
    }

    credito(valor){
        if (this.ativo){
            if(valor<0){
                console.log("Impossível realizar, valor negativo")
            }
            else if(valor==0){
                console.log("Impossível realizar, valor zerado")
            }
            else{
                this.saldo+= saldo
            }
        }
    
        else {
            console.log("Conta inativa...")
        }
    }

    debito(valor){
        if (this.ativo){
            if(valor<0){
                console.log("Impossível realizar, valor negativo")
            } 
            else if(valor == 0){
                console.log("Impossível realizar, valor zerado")
            }
            else if(valor>this.saldo){
                console.log("Impossível realizar, saldo indisponível")
            } 
            else {
                this.saldo -= valor
            }
        } 
        else {
            console.log("Conta inativa...")
        }
    }
}

//SUB-CLASSE CONTA POUPANÇA
class Poupança extends Conta {
    constructor(numero,cpf,saldo,ativo,diaAniversarioConta){
        super(numero,cpf,saldo,ativo);
        this.diaAniversarioConta = diaAniversarioConta
    }

    correcao(dia){
        console.log("Aplicando correção")
        }
    }


//SUB-CLASSE CONTA CORRENTE
class Corrente extends Conta {
    constructor(numero,cpf,saldo,ativo,contadorTalao){
        super(numero,cpf,saldo,ativo);
        this.contadorTalao = contadorTalao
    }

    pedirTalao(qtde){
        console.log("Pedindo talão")
    }
}


//SUB-CLASSE CONTA ESPECIAL
class Especial extends Conta {
    constructor(numero,cpf,saldo,ativo,limite){
        super(numero,cpf,saldo,ativo);
        this.limite = limite
    }

    usarLimite(valor){
        console.log("Usando limite")
    }
}

//SUBCLASSE ESTUDANTIL
class Estudantil extends Conta{

    constructor(numero, cpf, saldo,ativo, limiteEstudantil){
        super(numero,cpf,saldo,ativo);
        this.limiteEstudantil = limiteEstudantil
    }
    
    usarEstudantil(valor){
        if (valor <0) {
            console.log("Impossível realizar, valor negativo")
        }
    
        else if (valor ==0) {
            console.log("Impossível realizar, valor zerado")
        }
    
        else if(valor >(this.saldo + this.limiteEstudantil)){
            console.log("Impossível realizar, sem valor no limite e saldo...")
        }
    
        else{
            this.valor.limiteEstudantil = this.limiteEstudantil - valor
            credito(valor)
        }
    }
}

// PROGRAMA PRINCIPAL

// const leia = require("prompt-sync")()
// let numero = parseInt(leia("Digite o número da conta: "))
// let cpf = leia("Digite o cpf da conta: ")
// let c1 = new Conta(numero,cpf,0,false)
// let op=""

let op=""
//montando o menu
do{
    console.log("")
    console.log("1 - CONTA POUPANÇA")
    console.log("2 - CONTA CORRENTE")
    console.log("3 - CONTA ESPECIAL")
    console.log("4 - CONTA ESTUDANTIL")
    console.log("5 - SAIR")
    opcao = leia("Digite o número da sua opção: ")
    if (opcao == "1"){
        console.log("CONTA POUPANÇA")
        let numero = leia("Digite o numero da conta: ")
        let cpf = leia("Digite o cpf da conta: ")
        let diaAniversarioConta = leia("Digite o dia do aniversário da conta:")
        let cp1 = new Poupanca(numero,cpf,0,false,diaAniversarioConta)
        let op=""
        for (let x=1; x<10; x++){
            valor = leia("Digite o valor: ")
            op = ("Digite D para débito e C para crédito: ")
            if (op=="D"){
                cp1.debito(valor)
            } else if (op=="C"){
                cp1.credito(valor)
            }
            console.log("Slado atual R$: "+cp1.saldo)
        }
    }
    else if (opcao == "2"){
        console.log("Testando conta corrente")
    }
    else if (opcao == "3"){
        console.log("Testando conta especial")
    }
    else if (opcao == "4"){
        console.log("CONTA ESTUDANTIL")
        let numero = leia("Digite o número da conta")
        let cpf = leia("Digite o cpf: ")
        //0, false, 5000
        let cee1 = new Estudantil(numero,cpf,0,false,5000)
        let op=""
        for (let x=1; x<10; x++){
            valor = leia("Digite o valor: ")
            op = ("Digite D para débito e C para crédito: ")
            if (op=="D"){
                cee1.debito(valor)
            } else if (op=="C"){
                cee1.credito(valor)
            }
            console.log("Slado atual R$: "+cee1.saldo)
        }
        valor = leia("Usar limit ? Valor: ")
        cee1.usarEstudantil(valor)
        console.log("Salso final: "+cee1.saldo)
    }
    else if (opcao == "5"){
        console.log("Saindo do programa...")
    }
    else {
        console.log("Digitação inválida")
    }
} while(opcao != "5")

console.log("Fim de programa volte sempre")

// c1.ativar() 
// for (let x=1; x<=10; x++){
//     console.log("Movimento: "+x)
//     console.log("Saldo atual da conta:"+c1.saldo)
//     op = leia("Digite D - debito ou C para credito: ")

//     if(op=="D"){
//         valor = parseInt(leia("Digite o valor para debito:"))
//         c1.debito(valor)
//     }
//     else if(op=="C"){
//         valor = parseInt(leia("Digite o valor para crédito: "))
//         c1.credito(valor)
//     }
// }

console.log("Saldo final da conta "+c1.saldo)