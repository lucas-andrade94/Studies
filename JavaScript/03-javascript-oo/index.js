import { Cliente } from "./Cliente/Cliente.js"
import { Gerente } from "./Funcionario/Gerente.js"
import { Diretor } from "./Funcionario/Diretor.js"
import { Funcionario } from "./Funcionario/Funcionario.js";
import { SistemaAutenticacao } from "./Sistema/SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12358796547);
diretor.cadastrarSenha("123456789");

const gerente = new Gerente("Flavio", 5000, 78436589752);
gerente.cadastrarSenha("987654321");

const cliente = new Cliente("Lais", 54123687459, "123");

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "987654321");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "123");

console.log(diretorEstaLogado);
console.log(gerenteEstaLogado);
console.log(clienteEstaLogado);
