//for
/*
for (let i = 1; i <= 5; i++){
    if (i % 2 !== 0){
        console.log(i);
    }
}


//while

let i = 5;
while (i >= 1) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i--;
}


//do...while

let i = 0;
do {
    console.log('a digitar!');
    i++
} while (i < 10)


//for...in

const pessoa = {
    nome: "Vasco",
    idade: 25
}

for (let chave in pessoa) {
    console.log(chave,pessoa.nome);
  //console.log(chave,pessoa['nome']);  
}

const cores = ["red","blue","green"];

for (let indice in cores) {
    console.log(indice, cores[indice])
}

*/

//for...of

const cores = ["red","blue","green"];

for (let cor of cores) {
    console.log(cor);
}