class ProdutoEsportes {
    constructor(id, descricao, ativo, estoque, preco, cor, categoria){
        this.id = id;
        this.descricao = descricao;
        this.ativo = ativo;
        this.estoque = estoque;
        this.preco = preco;
        this.cor = cor;
        this.categoria = categoria
    }
    ativar(){
        this.ativo = true
    }

    retirarEstoque(estoque) {
        if (this.ativo) {
            if(valor<0){
                console.log("Impossível realizar, não há estoque")
            }
            else if(valor==0){
                console.log("Impossível realizar, estoque zerado")
            }
            else{
                this.estoque += estoque
            }
            this.estoque += estoque
        }
        else{
            console.log("Estoque indisponíveç...")
        }
    }

    incluirEstoque(estoque){
        if (this.ativo) {
            if(valor<0){
                console.log("Impossível realizar, estoque indisponível")
            }
            else if(valor==0){
                console.log("Impossível realizar, estoque zerado")
            }
            else{
                this.estoque += estoque
            }
            this.estoque += estoque
    }
        else{
            console.log("Conta inativa...")
        }
    }
}


const leia = require("prompt-sync")()
let opcao = ""


do{
    console.log("Esportes da Gabs")
    console.log("Supere seus limites com estilo e paixão.")
    opcao = leia("Deseja fazer compras S/N: ")
    if(opcao =="S"){
        console.log("Cadastro inicial do produto:")
        let id = leia("Digite o id do produto: ")
        let descricao = leia("Digite o id do produto: ")
        let preco = leia("Digite o preço do produto:")
        let cor = leia("Digite a cor do produto")
        let categoria = leia("Digite a categoria do produto")
        let produto1 = new ProdutoEsportes(id, descricao, false, 10, preco, cor, categoria)
    } 
}
while(opcao != "N")
console.log("Fim de programa volte sempre")
