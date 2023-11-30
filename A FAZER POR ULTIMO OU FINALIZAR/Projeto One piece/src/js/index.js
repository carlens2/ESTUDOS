const botoes = document.querySelectorAll(".botao"); //botoes para o JS

const personagens = document.querySelectorAll(".personagem"); //personagens para o JS

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        desselecionarBotao();
        desselecionarPersonagem();

        botao.classList.add("selecionado"); //adiciona seleção
        personagens[indice].classList.add("selecionado"); //adiciona seleção
    });
});

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado"); //remove a seleção
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado"); //remove a seleção
}




