// número divisivel por 3 = Fizz
// número divisível por 5 = Buzz
// numero divisível por 3 e por 5 = FizzBuzz
// número não divisível = number

let number = 30;
for (number = 1; number <= 30; number++) {
    if (number % 3 === 0) {
        if (number % 5 === 0) {
            console.log('FizzBuzz')
        } else {
            console.log('Fizz   ')
        }
    } else if (number % 5 === 0) {
        console.log('Buzz')
    } else {
        console.log('number')
    }
}