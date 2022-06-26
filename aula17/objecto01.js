let amigo = {nome: 'Vasco',
    sexo: 'M', 
    peso: 65,
    engordar(p) {
        console.log('Engordou')
        this.peso += p
    }}
amigo.engordar(2)
console.log(`${amigo.nome}'s weight is ${amigo.peso} Kg`)