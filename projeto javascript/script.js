alert("Iremos usar calculos para obter resultados de dois números")

let numberOne = prompt("Digite o primeiro número: ")
let numberTwo = prompt("Digite o segundo número: ")


let sum = (Number(numberOne) + Number(numberTwo))
let subtract = (Number(numberOne) - Number(numberTwo))
let multiply = (Number(numberOne) * Number(numberTwo))
let divide = (Number(numberOne) / Number(numberTwo))
let restDiv = (Number(numberOne) % Number(numberTwo))
let imparOrpar = ((Number(numberOne) + Number(numberTwo)))


alert ("A soma dos dois números: " + sum)
alert ("A subtração dos dois números: " + subtract)
alert ("A multiplicação dos dois números: " + multiply)
alert ("A divisão dos dois números: " + divide)
alert ("O resto da divisão dos dois números: " + restDiv)

let par = imparOrpar === 0

if(par) {
    alert("A soma dos dois números é par: " + imparOrpar  )
} else{ 
    alert("A soma dos dois números é impar: " + imparOrpar)
}
