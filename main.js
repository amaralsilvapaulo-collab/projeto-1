    botoes = document.querySelectorAll("button")
    console.log(botoes)

        botoes.forEach(fuction (botao)) {
    let curtiu = false;
    botao.addEventListener("click" , botaoClicado)

    function botaoClicado(){
          console.log("botao clicado")
          let texto = botao.querySelector("span")
          if (curtiu == false){
            texto.textConten++
    }
  }
})