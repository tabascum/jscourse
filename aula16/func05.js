//RECURSIVIDADE
function fatorial (n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))

/*

5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4!

o fatorial de um número pode ser calculado usando o fatorial de outro

n! = n x (n-1)!
1! = 1

matematicamente o fatorial de 1 é 1

*/