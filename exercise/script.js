let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valor = []

//check if number is between 1 and 100

function isNum(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}   

//check if the number is already part on the list

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

//get the received number at 'num' and display it at 'valor'

function addNum() {
    if(isNum(num.value) && !inLista(num.value, valor)) {
        valor.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Value ${num.value} added.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert(`Invalid value or already in the list.`)
    }
    num.value = '' // lines 37 and 38 auto empties 'num.value'
    num.focus()
}

function check() {
    if (valor.length == 0) {
        window.alert('Add values before you check!')
    } else {
        let tot = valor.length
        let higher = valor[0]
        let lower = valor[0]
        let sum = 0
        let ave = 0
        for (let pos in valor) { //in array course
            sum += valor[pos]
            if (valor[pos] > higher)
                higher = valor[pos]
            if (valor[pos] < lower)
                lower = valor[pos]
        }
        ave = sum / tot
        res.innerHTML = ''
        res.innerHTML += `<p>In total we got ${tot} numbers registered.</p>`
        res.innerHTML += `<p>The highest number registered was ${higher}.</p>`
        res.innerHTML += `<p>The lowest number registered was ${lower}.</p>`
        res.innerHTML += `<p>The sum of all numbers result in ${sum}.</p>`
        res.innerHTML += `<p>The average is ${ave}.</p>`
    }
}
