// let numeros=[5,8,2,10,3]

// for (let i = 1; i <= 9; i++) {
    
//     if (numero [i]) >maior {

//          maior, numero[i]
//     }
    
// }
// // console.log (" a soma e", soma)

let numeros = [90, 5, 82, 15, 7];
let maior = numeros[0];

for (let i = 0; i <= 4; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i];
    }
}
console.log(maior); 