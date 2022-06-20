function load() {
let msg = document.getElementById('msg')
let img = document.getElementById('image')
let date = new Date()
let hour = date.getHours()
let minute = date.getMinutes()
msg.innerHTML = `Current time is ${hour} hours and ${minute} minutes.`
    if (hour >= 0 && hour < 12) {
        //Bom dia 
        img.src = 'images/morning.webp'
        document.body.style.background = '#CEAA6B'
    } else if (hour >= 12 && hour <= 18) {
        //Boa tarde 
        img.src = 'images/afternoon.webp'
        document.body.style.background = '#855030'
    } else {
        //Boa noite
        img.src = 'images/night.webp'
        document.body.style.background = '#002434'
    }
}