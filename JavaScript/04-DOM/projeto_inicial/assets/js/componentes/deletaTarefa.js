const deletarTarefa = function(atualiza, id) {
    const index = id
    const tarefasCadastradas = JSON.parse(localStorage.getItem("tarefas"));

    tarefasCadastradas.splice(index, 1);
    localStorage.setItem("tarefas", JSON.stringify(tarefasCadastradas));

    atualiza();
}

const BotaoDeleta = function(atualiza, id) {
    const botaoDeletaTarefa = document.createElement("button");
    botaoDeletaTarefa.innerText = "Deletar";

    botaoDeletaTarefa.addEventListener("click", () => deletarTarefa(atualiza, id));

    return botaoDeletaTarefa;
}

export default BotaoDeleta;