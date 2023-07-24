var systemDate = new Date()

var anoAtual = systemDate.getFullYear()
var mesAtual = systemDate.getMonth() + 1
var diaAtual = systemDate.getDate()


var anoResultado = document.querySelector("#resultYear")
var mesResultado = document.querySelector("#resultMonth")
var diaResultado = document.querySelector("#resultDay")

function enviar() {

    var diabox = document.querySelector("#dayInp")
    var mesbox = document.querySelector("#monthInp")
    var anobox = document.querySelector("#yearInp")

    var labelDay = document.querySelector('#dayLabel')
    var labelMonth = document.querySelector('#monthLabel')
    var labelYear = document.querySelector('#yearLabel')

    var inputDia = diabox.value
    var inputMes = mesbox.value
    var inputAno = anobox.value


    // validação
    // validation 
    if (inputDia > 31 || inputDia < 1 || inputDia == 0) {
        diabox.style = "border: 1px solid var(--LightRed);"
        labelDay.style= "color: var(--LightRed);"

        document.querySelector("#dayadvice").style = "display: block;"

        diaResultado.innerHTML = "0"
    } else {
        labelDay.style= ""
        diabox.style = ""
        document.querySelector("#dayadvice").style = "display: none;"
    }
    
    if (inputAno == 0) {
        anobox.style = "border: 1px solid var(--LightRed);"
        labelYear.style= "color: var(--LightRed);"

        document.querySelector("#yearadvice").style = "display: block;"
        document.querySelector("#yearadvice").innerHTML = "Must be a valid Year"
    } else if (inputAno > anoAtual) {
        anobox.style = "border: 1px solid var(--LightRed);"
        labelYear.style= "color: var(--LightRed);"

        document.querySelector("#yearadvice").style = "display: block;"
        document.querySelector("#yearadvice").innerHTML = "Must be in the past"
    } 
    else {
        labelYear.style= ""
        anobox.style = ""
        document.querySelector("#yearadvice").style = "display: none;"
    }

    if (inputMes == 4 ||inputMes == 6 ||inputMes == 9 ||inputMes == 11) {
        if (inputDia > 30) {
            labelMonth.style = "color: var(--LightRed);"
            mesbox.style = "border: 1px solid var(--LightRed);"
            mesResultado = 0
            document.querySelector("#monthadvice").style = "display: block;"
            document.querySelector("#monthadvice").innerHTML = "This month has 30 days"
            
            anoResultado.innerHTML = "--"
            mesResultado.innerHTML = "--"
            diaResultado.innerHTML = "--"
        }
    }

    if (inputAno % 4 == 0) {
        var bisexto = 1
    } else {
        var bisexto = 0
    }


    if (inputMes <= mesAtual) {
        mesResultado.innerHTML = mesAtual - inputMes     
    } else {                                            
        mesResultado.innerHTML = 12 - inputMes + mesAtual
    }


    if (inputDia <= diaAtual) {
        diaResultado.innerHTML = diaAtual - inputDia
    } else {
        diaResultado.innerHTML = inputDia - diaAtual
    }    


    if (inputAno > anoAtual){
        anoResultado.innerHTML = "--"
        mesResultado.innerHTML = "--"
        diaResultado.innerHTML = "--"

    } else if (mesAtual >= inputMes) {
        anoResultado.innerHTML = anoAtual - inputAno

    } else {
        anoResultado.innerHTML = anoAtual - inputAno - 1
    }


    if (inputMes > 12 || inputMes < 1 || inputMes == 0) {
        mesbox.style = "border: 1px solid var(--LightRed);"
        labelMonth.style= "color: var(--LightRed);"

        document.querySelector("#monthadvice").style = "display: block;"

        anoResultado.innerHTML = "--"
        mesResultado.innerHTML = "--"
        diaResultado.innerHTML = "--"
    } else {
        labelMonth.style= ""
        mesbox.style = ""
        document.querySelector("#monthadvice").style = "display: none;"
    }
    

    if (inputMes == 2 && bisexto == 1 && inputDia > 29) {
        diabox.style = "border: 1px solid var(--LightRed);"
        labelDay.style= "color: var(--LightRed);"
        mesbox.style = "border: 1px solid var(--LightRed);"
        labelMonth.style= "color: var(--LightRed);"
        document.querySelector("#monthadvice").style = "display: block;"
        document.querySelector("#monthadvice").innerHTML = "This month had 29 days"
        
        document.querySelector("#dayadvice").style = "display: block;"

        anoResultado.innerHTML = "--"
        mesResultado.innerHTML = "--"
        diaResultado.innerHTML = "--"

    }  else if (inputMes == 2 && bisexto == 0 && inputDia > 28) {
        diabox.style = "border: 1px solid var(--LightRed);"
        labelDay.style= "color: var(--LightRed);"
        mesbox.style = "border: 1px solid var(--LightRed);"
        labelMonth.style= "color: var(--LightRed);"
        document.querySelector("#monthadvice").style = "display: block;"
        document.querySelector("#monthadvice").innerHTML = "This month has 28 days"
        
        document.querySelector("#dayadvice").style = "display: block;"
        anoResultado.innerHTML = "--"
        mesResultado.innerHTML = "--"
        diaResultado.innerHTML = "--"
    }
}