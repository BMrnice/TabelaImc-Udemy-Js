const form = document.getElementById('formulario');
const element= document.getElementById('resultado3')

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
        
        
         if (imc >=1 && imc <= 1000){
            resultado.innerHTML = ` Você é perfeita gata, eu não mudaria nada em você 😉`
            resultado.style.backgroundColor+= 'green';
            resultado.style.color += 'white'
            element.style.visibility = "visible"
            
            res2.innerHTML="<img src='https://media4.giphy.com/media/26FLdmIp6wJr91JAI/giphy.gif?cid=ecf05e47nci71r3i5bnrfpims9tbada7wz4diwg1ucg9hlon&rid=giphy.gif&ct=g'>"

            res2.innerHTML+= "<img src='https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGowb2dsem8zd242aHN6ZzM0Z2lsbDZiZzU2N3A5bjg4bWlsc3QxbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8vIFcjvg5JbNsiggeR/giphy.gif'>"

                  
        }
    });