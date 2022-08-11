function carregar(){


    var msg = window.document.getElementById('msg')
    var image = window.document.getElementById('image')
    var data = new Date()
    var hora = data.getHours()
   
    msg.innerHTML = `Agora sao ${hora} horas.`

    if(hora >= 0 && hora < 12){
        //BOM DIA!
        img.src = "Meditad.png"
        document.body.style.background = '#eec3e5'
    } else if (hora >=12 && hora < 18){
        //BOA TARDE!
        img.src = 'tardeedit.png'
        document.body.style.background = '#814118'
    } else {
        //BOA NOITE!!
        img.src = 'noite.png'
        document.body.style.background = '#011c3a'
    }
}

