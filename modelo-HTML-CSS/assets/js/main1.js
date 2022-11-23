// primeira coisa fazer a captura de submit do formulário
const form = document.getElementById('formulario');

    form.addEventListener('submit', function (e){
        e.preventDefault();
        let strPeso= document.getElementById('ipeso').value;
        let strAltura= document.getElementById('ialtura').value;
        let parsePeso = parseFloat(strPeso);
        let parseAltura = parseFloat(strAltura);
        let imc = parsePeso / (parseAltura*parseAltura);
        let imcCon = imc.toFixed(2)// convertido para 2 decimal apos virgula
        let resultado = document.getElementById('resultado')
        function lumiance(hex, luminosity = 0){
            return hex
        };
         if (imc >=1 && imc <= 60){
            resultado.innerHTML = `Você está parfeita gata, nao precisa mudar nada 😉`
            resultado.style.backgroundColor+= 'green';
            resultado.style.color += 'white'
        }

        // if (imc <= 18.5){
        //     resultado.innerHTML = `Você está abaixo do peso ideal, seu IMC é ${imcCon}`
        //     resultado.style.backgroundColor+= 'red';
        //     resultado.style.color += 'white'
        // } else if (imc >= 18.5 && imc <=24.9){
        //     resultado.innerHTML = `Você está com peso ideal, seu IMC é ${imcCon}`
        //     resultado.style.backgroundColor+= 'green';
        //     resultado.style.color += 'white'
        // } else if (imc >=25 && imc <= 29.9){
        //     resultado.innerHTML = `Você está com sobrepeso, seu IMC é ${imcCon}`
        //     resultado.style.backgroundColor+= 'yellow';
        //     resultado.style.color += 'white'
        // } else if (imc >=30 && imc <= 34.9){
        //     resultado.innerHTML = `Você está com obsidade grau 1, seu IMC é ${imcCon}`
        //     resultado.style.backgroundColor+= 'yellow';
        //     resultado.style.color += 'white'
        // } else if (imc >=35 && imc <= 39.9){
        //     resultado.innerHTML = `Você está com obsidade grau 2, seu IMC é ${imcCon}`
        //     resultado.style.backgroundColor+= 'yellow';
        //     resultado.style.color += 'white'
        // } else if (imc >=40){
        //     resultado.innerHTML = `Você está com obesidade grau 3, seu IMC é ${imcCon}`
        //     resultado.style.backgroundColor+= 'red';
        //     resultado.style.color += 'white'
        // }
        
        //alert(`prevenido ok, ${imcCon} `)
    })

