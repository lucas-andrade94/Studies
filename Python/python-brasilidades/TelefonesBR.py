import re

class TelefonesBR:

    def __init__(self, telefone):
        if self.valida_telefone(telefone):
            self.numero = telefone
        else:
            raise ValueError("Telefone inválido")

    def __str__(self):
        return self.format_numero()


    def valida_telefone(self, telefone):
        padrao = "([0-9]{2})?([0-9]{2})([9]{1})?([0-9]{4})([0-9]{4})"
        resposta = re.findall(padrao, telefone)
        if resposta:
            return True
        else:
            return False

    def format_numero(self):
        padrao = "([0-9]{2})?([0-9]{2})([9]{1})?([0-9]{4})([0-9]{4})"
        resposta = re.search(padrao,self.numero)
        if (resposta.group(1) == None) and (resposta.group(3) == None):
            numero_formatado = "({}){}-{}".format(
                resposta.group(2),
                resposta.group(4),
                resposta.group(5)
            )
            return numero_formatado
        elif(resposta.group(1) == None):
            numero_formatado = "({}){}{}-{}".format(
                resposta.group(2),
                resposta.group(3),
                resposta.group(4),
                resposta.group(5)
            )
            return numero_formatado
        elif (resposta.group(3) == None):
            numero_formatado = "+{}({}){}-{}".format(
                resposta.group(1),
                resposta.group(2),
                resposta.group(4),
                resposta.group(5)
            )
            return numero_formatado
        else:
            numero_formatado = "+{}({}){}{}-{}".format(
                resposta.group(1),
                resposta.group(2),
                resposta.group(3),
                resposta.group(4),
                resposta.group(5)
            )
            return numero_formatado
