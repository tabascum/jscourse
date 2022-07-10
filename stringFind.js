// Criar método para ler propriedades de um objecto
// e exibir só as propriedades do tipo 'string' que estão no objecto

const filme = {
    titulo : 'Star Wars',
    ano : 1977,
    diretor : 'George Lucas',
    personagem : 'Jar Jar Binks'
}

exibirPropriedades(filme);
function exibirPropriedades(obj) {
    for (prop in obj) {
        if (typeof obj[prop] === 'string')
        console.log(prop,obj[prop])
    }
}