function verificar(){
    var data = new Date()
    var ano = data.getFullYear()

    var fano = document.getElementById('txtano')

    var res = document.getElementById('res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verique os dados e tente novamente!')
    } else {

        var fsex = document.getElementsByName('radsex')

        var idade = ano - Number(fano.value)

        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 10) {
                //criaca
                img.setAttribute('src', 'menino-bebe.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'menino-jovem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'menino-adulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'menino-idoso.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                //criaca
                img.setAttribute('src', 'menina-bebe.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'menina-jovem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'menina-adulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'menina-idoso.png')
            }

        }

        res.style.textAlign = 'center'

        res.innerHTML = `Detectamos ${genero} com ${idade} anos`

        res.appendChild(img)  
    }
}