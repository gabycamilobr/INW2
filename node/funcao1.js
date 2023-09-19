function escreverNoConsole(){
    console.log("Escrevendo na tela usando função!!!!")
}

// execução da função
escreverNoConsole();

const textoNoConsole = function(){
    console.log("Segundo exemplo, escrevendo no console")
}

textoNoConsole();

const textoPorParametro = function(texto){
    console.log(texto)
}

textoPorParametro("Terceiro exemplo, este texto é o parametro!!!");

// => é a arrow function
const textoUsandoArrow = (texto) => console.log(texto)
textoUsandoArrow("Quarto exemplo usando arrow function")

const mostraParImpar = (numero) => {
    if(numero < 0){
        console.log(numero,"O numero digitado é negativo")
    }
    else if(numero == 0){
        console.log(numero, "O numero é 0")
    }
    else if((numero%2)==0){
        console.log(numero, "O número digitado é par")
    }
    else{
        console.log(numero, "o número é impar")
    }
}

mostraParImpar(0)