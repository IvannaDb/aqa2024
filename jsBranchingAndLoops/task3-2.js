const number = Math.round(Math.random() * 9) + 1 
console.log ('The number is', number)
let index = 1
while (index <=10) {
    let multiplicationOfNumbers = number*index
    let mathExpression = `${number} x ${index} = ${multiplicationOfNumbers}`
    console.log (mathExpression)
    index++
}