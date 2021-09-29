import { handleNovoItem } from "./componentes/criaTarefa.js";
import { carregaTarefa } from "./componentes/carregaTarefa.js";

const botao = document.querySelector("[data-form-button]");

botao.addEventListener("click", handleNovoItem);

carregaTarefa();