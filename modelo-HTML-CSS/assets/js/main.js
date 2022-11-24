// primeira coisa fazer a captura de submit do formulário
const form = document.getElementById('formulario');

    form.addEventListener('submit', function (e){
        e.preventDefault();
        let strPeso= document.getElementById('ipeso').value; //string
        let strAltura= document.getElementById('ialtura').value; //string
        let parsePeso = parseFloat(strPeso); // NUmber
        let parseAltura = parseFloat(strAltura); // NUmber
        let imc = getImc(parsePeso, parseAltura);//esta tem a formula de cal do IMC
        let nivelImc = getIndiceDaTabelaImc(imc)//esta tras de um array a msg de acordo com o IMC da tabela  
        let msg =  nivelImc ;
        console.log(msg) 
        
        if (!parsePeso && !parseAltura){
            setResultado('Por favor inserir somente numeros', false, imc)
            return relload()             
        }; //validado se input tem numeros

        setResultado(msg, true, imc); // essa e a funcao que imprimi na tela o resultado
    });

    function getImc(x,y){
        let imc = x / (y*y)
        return imc.toFixed(2) // convertido para 2 decimal apos virgula
    };

    function getIndiceDaTabelaImc(imc){
        const nivel = [`Você está com obesidade grau 3, seu IMC é ${imc}`,`Você está com obsidade grau 2, seu IMC é ${imc}`,`Você está com obsidade grau 1, seu IMC é ${imc}`,`Você está com sobrepeso, seu IMC é ${imc}`,`Você está com peso ideal, seu IMC é ${imc}`,`Você está abaixo do peso ideal, seu IMC é ${imc}`];

        if (imc >=40) return nivel[0] //negativo
        if (imc >=35 && imc <= 39.9) return nivel[1]// alerta
        if (imc >=30 && imc <= 34.9) return nivel[2]// alerta
        if (imc >=25 && imc <= 29.9) return nivel[3]// alerta
        if (imc >= 18.5 && imc <=24.9) return nivel[4] //positivo
        if (imc <=18.5) return nivel[5] //negativo
    };

    function relload(){
         
        addEventListener("click", function() { location.reload(); });
    };

    function criaP(){
        let p = document.createElement('p');
        return p;
        
    };

    function setResultado (msg, isValid, imc){
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = '';
        const p = criaP();
        if(isValid && imc >= 18.5 && imc <=24.9  ) {
            p.classList.add('positivo')
            console.log('positivo')
        } else if(isValid && imc >=25 && imc <=39.9){
            p.classList.add('alerta')
            console.log('alerta')
        } else if (!isValid || imc <=18.5 || imc >=40 ){
            p.classList.add('negativo')
            console.log('negativo')
        }
            
        p.innerHTML = msg;
        resultado.appendChild(p);
    };
 
      // if (imc <= 18.5){
        //     resultado.innerHTML = `Você está abaixo do peso ideal, seu IMC é ${imc}`
        //     resultado.style.backgroundColor= 'red';
        //     resultado.style.color = 'white'
        // } else if (imc >= 18.5 && imc <=24.9){
        //     resultado.innerHTML = `Você está com peso ideal, seu IMC é ${imc}`
        //     resultado.style.backgroundColor= 'green';
        //     resultado.style.color = 'white'
        // } else if (imc >=25 && imc <= 29.9){
        //     resultado.innerHTML = `Você está com sobrepeso, seu IMC é ${imc}`
        //     resultado.style.backgroundColor= 'yellow';
        //     resultado.style.color = 'white'
        // } else if (imc >=30 && imc <= 34.9){
        //     resultado.innerHTML = `Você está com obsidade grau 1, seu IMC é ${imc}`
        //     resultado.style.backgroundColor= 'yellow';
        //     resultado.style.color = 'black'
        // } else if (imc >=35 && imc <= 39.9){
        //     resultado.innerHTML = `Você está com obsidade grau 2, seu IMC é ${imc}`
        //     resultado.style.backgroundColor= 'yellow';
        //     resultado.style.color = 'white'
        // } else if (imc >=40){
        //     resultado.innerHTML = `Você está com obesidade grau 3, seu IMC é ${imc}`
        //     resultado.style.backgroundColor= 'red';
        //     resultado.style.color = 'white'
        
    
