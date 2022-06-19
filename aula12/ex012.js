var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exactamente ${hora} horas.`)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde')
} else {
    console.log('Boa noite!')
}

//This kind of condition allows to use variable values