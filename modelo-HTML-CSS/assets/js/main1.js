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
        let res2 = document.getElementById('resultado2')
        function lumiance(hex, luminosity = 0){
            return hex
        };
         if (imc >=1 && imc <= 60){
            resultado.innerHTML = `Você é perfeita gata, eu não mudaria nada em você 😉`
            resultado.style.backgroundColor+= 'green';
            resultado.style.color += 'white'
            
            res2.innerHTML="<img src='https://media4.giphy.com/media/26FLdmIp6wJr91JAI/giphy.gif?cid=ecf05e47nci71r3i5bnrfpims9tbada7wz4diwg1ucg9hlon&rid=giphy.gif&ct=g'>"

            res2.innerHTML+= "<img src='https://media2.giphy.com/media/USDLzEBaDObgWuWywy/200w.webp?cid=ecf05e47amrh8e4itu2io3uqs87j6uz3qxfs14s955ht2ctu&rid=200w.webp&ct=g' width='480' height='270'/> "
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

