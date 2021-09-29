from acesso_cep import BuscaEndereco

cep = "03132020"
objeto_cep = BuscaEndereco(cep)

logradouro, bairro, cidade, uf = objeto_cep.acessa_via_cep()
print(logradouro, bairro, cidade, uf)