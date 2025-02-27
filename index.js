"use strict";
class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd;
        this.numero = numero;
    }
    get DDD() {
        return this.ddd;
    }
    get Numero() {
        return this.numero;
    }
    getDescricao() {
        return `Telefone: \nDDD: ${this.ddd} \nNúmero: ${this.numero}`;
    }
}
class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado;
        this.cidade = cidade;
        this.rua = rua;
        this.numero = numero;
    }
    get Estado() {
        return this.estado;
    }
    get Cidade() {
        return this.cidade;
    }
    get Rua() {
        return this.rua;
    }
    get Numero() {
        return this.numero;
    }
    getDescricao() {
        return `Endereço: \nEstado: ${this.estado} \nCidade: ${this.cidade} \nRua: ${this.rua} \nNúmero: ${this.numero}`;
    }
}
class Cliente {
    constructor(nome, telefone, email, endereco) {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
        this.endereco = endereco;
    }
    get Nome() {
        return this.nome;
    }
    get NomeMaiusculo() {
        return this.nome.toUpperCase();
    }
    get NomeMinusculo() {
        return this.nome.toLowerCase();
    }
    getDescricao() {
        return `------------------ 
Informações do cliente:
Nome: ${this.Nome}
--------------------
${this.telefone.getDescricao()}
--------------------
${this.endereco.getDescricao()}`;
    }
}
function ordenarClientesNome(clientes) {
    return clientes.sort((a, b) => a.Nome.localeCompare(b.Nome));
}
let telefone1 = new Telefone('12', '40028922');
let endereco1 = new Endereco('SP', 'São José dos Campos', 'Matricula Especial Please', '12');
let cliente1 = new Cliente('Jonas', telefone1, 'jonas@gmail.com', endereco1);
let telefone2 = new Telefone('11', '123456778');
let endereco2 = new Endereco('SP', 'São José dos Campos', 'Av. Flores', '12');
let cliente2 = new Cliente('Pedro', telefone2, 'pedro@gmail.com', endereco2);
let telefone3 = new Telefone('13', '1234546755');
let endereco3 = new Endereco('SP', 'São José dos Campos', 'Imaculada', '12');
let cliente3 = new Cliente('Maria', telefone3, 'maria@gmail.com', endereco3);
let clientes = [cliente1, cliente2, cliente3];
let clientesOrdenados = ordenarClientesNome(clientes);
console.log(cliente1.getDescricao());
console.log(`\nClientes ordenados por nome:`);
clientesOrdenados.forEach(cliente => console.log(cliente.Nome));
