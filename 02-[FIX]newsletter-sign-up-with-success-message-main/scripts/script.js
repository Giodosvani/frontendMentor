//cards da tela
let home = document.querySelector(".home")
let sucesso = document.querySelector(".success")


function validar() {
    
    // validação de dados
    let emailUsuario = document.querySelector("#inputemail").value

    let searchArrouba = emailUsuario.search('@')
    var inputUsuario = document.querySelector("#inputemail")
    let emailInvalido = document.querySelector(".invalid")

    let mensagem = document.querySelector(".confirmation")

    if(searchArrouba == -1) {
        inputUsuario.style = "border: 1px solid var(--Tomato); color: var(--Tomato);"
        emailInvalido.style = "display: block;"
    } else {
        home.style = "display: none;"
        sucesso.style = "display: flex;"

        mensagem.innerHTML = `A confirmation email has been sent to <strong>${emailUsuario}</strong>. Please open it and click the button inside to confirm your subscription.`

        inputUsuario.value = ""
        inputUsuario.style = "border: 1px solid #000000; color: #000000;"
        emailInvalido.style = "display: none"
    }

}

function voltar() {
    home.style = "display: flex;"
    sucesso.style = "display: none;"
}