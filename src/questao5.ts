// Crie uma função que receba a idade de uma pessoa e informe se ela é maior de idade.
function maiorIdade(){
    let idade:number=Number(prompt("qual a sua idade: "))
    if(idade>=18){
        alert("você é maior de idade")
    }else if((idade>0)&&(idade<18)){
        alert("você é menor de idade")
    }else{
        alert("idade invalida")
    }
}
maiorIdade()