let produto1 = {
    nome: "caneta",
    preco: 10,
};
let produto2 = {
nome: "lapis",
preco: 5,
};
let produto3 ={
nome: "caderno",
preco: 15,
};


let produtos = [produto1,produto2,produto3]


let maisCaro = produtos[0]; 

for (let i = 1; i < produtos.length; i++) {
    if (produtos[i].preco > maisCaro.preco) {
        maisCaro = produtos[i];
    }
}

console.log("O produto mais caro é: " + maisCaro.nome);


