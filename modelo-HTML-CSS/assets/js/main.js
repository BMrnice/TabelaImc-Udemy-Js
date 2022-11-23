const tabelaImc = [
    {imc:function(x){if(x <=18.5 ){return tabelaImc[0].resultado}}, resultado:'abaixo do peso'},
    {imc:function(x){if(x >=18.5 && x <=24.9){return tabelaImc[1].resultado}} , resultado:'Peso Normal'},
    {imc:function(x){if(x >=25 && x <=29.9){return tabelaImc[2].resultado}} , resultado:'Sobre peso'},
    {imc:function(x){if(x >=30 && x <=34.9){return tabelaImc[3].resultado}} , resultado:'Obsidade grau 1'},
    {imc:function(x){if(x >=35 && x <=39.9){return tabelaImc[4].resultado}} , resultado:'Obsidade grau 2'},
    {imc:function(x){if(x >=40 ){return tabelaImc[5].resultado}} , resultado:'Obsidade grau 3'},
];

const resultadoImc = document.getElementById('resultado')

function calcularImc(){
    const peso = document.getElementById('ipeso').value;
    const altura = document.getElementById('ialtura').value;
    let numberPeso = parseFloat(peso);
    let numberAltura = parseFloat(altura);
    let PxA = numberAltura * numberPeso;
    for(c=0;retornoDaTabela !== true;c++){ // talvez eu deva tentar com do while para testar a condicao apos fazer a let 
        let retornoDaTabela = tabelaImc[c].imc(PxA) 
        console.log(retornoDaTabela.resultado)
        //resultadoImc.innerText += `${retornoDaTabela.resultado}`
    }
    // falta desenvolver o restante que vai pegar o valor multiplicado
    // e passar por referencia para funcao dentro do array iterando em cada obejeto para achar o range do valor passado com o valor dentro do array da funcao. 

   console.log(numberAltura , numberPeso )
   resultadoImc.innerHTML = `altura :${numberAltura} Peso: ${numberPeso}`
};




// let imc = 25.8
// function cal(x){
//     if (x >18.5 && x < 24.9) {
//         return 'normal'
//     } 
//     return 'gordao'
// }

console.log(tabelaImc.length) // quantidade de arrays

console.log(tabelaImc[4].imc(37.9)) //aqui o valor passado por argumento é executado dentro do objeto do array