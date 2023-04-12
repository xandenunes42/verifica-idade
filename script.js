function verifica(){
    var ano = new Date()
    var ano_1 = ano.getFullYear()
    var tn_ano = document.getElementById('nas')
    var tn_result = document.getElementById('result')
    var sex = ''
    var tn_sex = document.getElementsByName('sexo')
    
    var idade = ano_1 - Number(tn_ano.value)

    var img = document.createElement('img')

    img.setAttribute('id', 'foto')

    if(tn_sex[0].checked){
        sex = 'Homem'

        if(idade >= 0 && idade <= 2){
            img.setAttribute('src', 'foto-bbm.jpg')
            sex = 'um bebê'
        }else if(idade <= 10){
            img.setAttribute('src', 'foto-c.jpg')
            sex = 'uma criança'
        }else if(idade <= 19){
            img.setAttribute('src', 'foto-adm.jpg')
            sex = 'um jovem'
        }else if(idade <= 59){
            img.setAttribute('src', 'foto-adulto.jpg')
            sex = 'um adulto'
        }else{
            img.setAttribute('src', 'foto-sr.jpg')
            sex = 'um senhor'
        }
    }else{
        sex = 'Mulher'

        if(idade >= 0 && idade <= 2){
            img.setAttribute('src', 'foto-bbf.jpg')
            sex = 'um bebê'
        }else if(idade <= 10){
            img.setAttribute('src', 'foto-c.jpg')
            sex = 'uma criança'
        }else if(idade <= 19){
            img.setAttribute('src', 'foto-adf.jpg')
            sex = 'uma jovem'
        }else if(idade <= 59){
            img.setAttribute('src', 'foto-adulta.jpg')
            sex = 'uma adulta'
        }else{
            img.setAttribute('src', 'foto-sra.jpg')
            sex = 'uma senhora'
        }
    }

    tn_result.style.textAlign = 'center'
    tn_result.innerHTML = `Detectamos ${sex} de ${idade} ano(s)`
    tn_result.appendChild(img)
    
}