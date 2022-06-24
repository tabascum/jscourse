let num = [5, 8, 2, 9, 3]
num.sort()
num.push(1)
console.log(num)
console.log(`The Array has ${num.length} positions.`)
console.log(`The first value of the Array is ${num[0]}`)
let pos = num.indexOf(4)
if (pos == -1) {
    console.log(`The value hasn't been found!`)
} else {
console.log(`The value is in position ${pos}`)
}
