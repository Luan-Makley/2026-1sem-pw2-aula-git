function apresentar(pessoa) {
return ` ${pessoa.nome} tem ${pessoa.idade} anos e mora em ${pessoa.cidade}.`;
}

let pessoa = {
 nome: "leandro",
 idade: 22,
cidade: "itapevi"
};
console.log(apresentar(pessoa));