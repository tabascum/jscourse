// número divisivel por 3 = Fizz
// número divisível por 5 = Buzz
// numero divisível por 3 e por 5 = FizzBuzz
// número não é divisível = entrada
// não é um número = 'não é um número'

let result = FizzBuzz(30);
console.log(result);

function FizzBuzz(entrada) {
    if (typeof entrada !== 'number')
        return 'Not a number!';
    if ((entrada % 3 === 0) && (entrada % 5 === 0))
        return 'FizzBuzz';
    if (entrada % 3 === 0)
        return 'Fizz';
    if (entrada % 5 === 0)
        return 'Buzz';
    return (entrada)
}