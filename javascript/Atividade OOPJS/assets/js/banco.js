class ContaBancaria{
    constructor(agencia, numero, saldo, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this.saldo = saldo;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(novoSaldo){
        this._saldo = novoSaldo;
    }

    sacar(valor){
        if (valor > this._saldo){
            return "Operação negada.";
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    };

    depositar(valor){
        this._saldo = this._saldo+valor;
        return this._saldo;
    };

}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, saldo, cartaoCredito){
        super(agencia, numero, saldo);
        this.tipo = "corrente";
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(novoCartao){
        this._cartaoCredito = novoCartao
    }

}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero, saldo){
        super(agencia, numero, saldo);
        this.tipo = "poupanca";
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero, saldo){
        super(agencia, numero, saldo);
        this.tipo = "universitaria";
    }

    sacar(valor){
        if (valor > 500){
            return "Operação negada!";
        }
    }
}

const conta = new ContaBancaria(00, 00, 00, 100);
console.log(conta.saldo);