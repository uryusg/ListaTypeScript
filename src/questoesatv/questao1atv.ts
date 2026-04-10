// 1. Crie um programa que leia um número e informe se ele é:
// Par ou Ímpar
// Positivo ou Negativo

let numero1:number=Number(prompt("digite um numero: "))
if(numero1 % 2===0){
alert("numero é par")
}else{
    alert("numero é impar")
}
if (numero1<0){
    alert("numero negativo")
}else{
    alert("numero positivo")
}