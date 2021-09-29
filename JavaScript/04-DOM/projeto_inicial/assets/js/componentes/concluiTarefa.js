const concluirTarefa = function(atualiza, id) {
    const tarefasCadastradas = JSON.parse(localStorage.getItem("tarefas"));

    tarefasCadastradas[id].concluida = !tarefasCadastradas[id].concluida;
    localStorage.setItem("tarefas", JSON.stringify(tarefasCadastradas));

    atualiza();
}

const BotaoConclui = function(atualiza, id) {
    const botaoConcluirTarefa = document.createElement("button");
    botaoConcluirTarefa.innerText = "Concluir";
    botaoConcluirTarefa.classList.add("check-button");

    botaoConcluirTarefa.addEventListener("click", () => {
        concluirTarefa(atualiza, id);
    })

    return botaoConcluirTarefa;
}

export default BotaoConclui;