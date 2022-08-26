const user = {
    name: "Jhon Doyle Fox",
    savingsBalance: 500,
    cardsInformation: [
        {
          number: "5160 4196 4843 3388",
          creditBalance: 1000,
          ensign: "American Express",
        },
      ],
};

function menu(usuario, contaEscolhida, operacao, valor){
    let valorTratado = (parseInt(valor))
    if (typeof(valor) == "number"){
        if (Number.isInteger(valor) == false){
            alert(`O caixa não aceita decimais, a operação seguirá com R$ ${valorTratado},00`)
        }
        if (valorTratado < 5) {
            return alert(`Valor inválido.
            Movimentação mínima de R$ 5,00`)
        }
    }
    let enviarUsuario = usuario
    console.log(enviarUsuario)
    let enviarContaEscolhida = ""
    if (contaEscolhida == "savingsBalance" || contaEscolhida == "poupança" || contaEscolhida == "savings" || contaEscolhida == "poupanca"){
        enviarContaEscolhida = "savings"
    } else {
        enviarContaEscolhida = "credit"
    }
    
    if (operacao == 1){
        saque(valorTratado, enviarContaEscolhida, enviarUsuario)
    } else if (operacao == 2){
        saldo(enviarContaEscolhida, enviarUsuario)
    } else if (operacao == 3){
        if (valorTratado > 500){
            return `Movimentação máxima de R$ 500,00`
        }
        deposito(valorTratado, enviarUsuario)
    }
    
}

function saque(valor, contaEscolhida, usuario){
    if (contaEscolhida == "savings"){
        if (valor > usuario.savingsBalance){
            return alert(`Saldo da poupança é insuficiente.`)
        }
        usuario.savingsBalance += -(valor)
        return alert(`R$ ${valor},00 retirado.
        Novo saldo R$ ${usuario.savingsBalance},00`)
    }
    if (contaEscolhida == "credit"){
        if (valor > usuario.cardsInformation[0].creditBalance){
            return alert(`Crédito insuficiente.`)
        }
        usuario.cardsInformation[0].creditBalance += -(valor)
        return alert(`R$ ${valor},00 retirado.
        Novo saldo R$ ${usuario.cardsInformation[0].creditBalance},00`)
    }
    return "Operação não reconhecida"
}

function saldo(contaEscolhida, usuario){
    let saldoEscolhido = 0
    if (contaEscolhida == "credit"){
        saldoEscolhido = usuario.cardsInformation[0].creditBalance
        return alert(`Crédito disponível: R$ ${saldoEscolhido},00`)
    }
    if (contaEscolhida == "savings"){
        saldoEscolhido = usuario.savingsBalance
        return alert(`Saldo disponível R$ ${saldoEscolhido},00`)
    }
}

function deposito(valor, usuario){
    usuario.savingsBalance += valor
    return alert(`Valor depositado com sucesso.
    Novo saldo: R$ ${usuario.savingsBalance},00`)
}