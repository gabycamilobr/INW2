// criar promise dentro de uma função

function falarDepoisDE(segundos, frase){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    });
}

//chamada da função

falarDepoisDE(4, "Teste de promise no 2EMIB")
.then(frase => frase.concat(" programando em vscode!!"))
.then(novaFrase => console.log(novaFrase))