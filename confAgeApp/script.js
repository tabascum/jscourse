function check() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERROR] Check your data and try again!')
    } else {
        let radsex = document.getElementsByName('radsex')
        let age = ano - Number(fano.value)
        let gender = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'pic');
        if (radsex[0].checked) {
            gender = 'male'
            if (age >= 0 && age < 10) {
                //child
                img.setAttribute('src', 'littleboy.webp')
            } else if (age < 40) {
                //young
                img.setAttribute('src', 'youngmale.webp')
            } else if (age < 65) {
                //adult
                img.setAttribute('src', 'adultmale.webp')
            } else {
                //old
                img.setAttribute('src', 'oldermale.webp')
            }
        } else if (radsex[1].checked) {
            gender = 'female'
            if (age >= 0 && age < 10) {
                //child
                img.setAttribute('src', 'littlegirl.webp')
            } else if (age < 40) {
                //young
                img.setAttribute('src', 'youngfemale.webp')
            } else if (age < 65) {
                //adult
                img.setAttribute('src', 'adultfemale.webp')
            } else {
                //old
                img.setAttribute('src', 'olderfemale.webp')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `We've detected a ${gender} with ${age} years old.`
        res.appendChild(img)
    }
}