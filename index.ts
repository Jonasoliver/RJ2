class Telefone {
    constructor(private ddd: string, private numero: string) {}

    get DDD(): string {
        return this.ddd;
    }

    get Numero(): string {
        return this.numero;
    }

    getDescricao(): string {
        return `Telefone: \nDDD: ${this.ddd} \nNúmero: ${this.numero}`;
    }
}

class Endereco {
    constructor(
        private estado: string,
        private cidade: string,
        private rua: string,
        private numero: string
    ) {}

    get Estado(): string {
        return this.estado;
    }

    get Cidade(): string {
        return this.cidade;
    }

    get Rua(): string {
        return this.rua;
    }

    get Numero(): string {
        return this.numero;
    }

    getDescricao(): string {
        return `Endereço: \nEstado: ${this.estado} \nCidade: ${this.cidade} \nRua: ${this.rua} \nNúmero: ${this.numero}`;
    }
}

class Cliente {
    constructor(
        private nome: string,
        private telefone: Telefone,
        private email: string,
        private endereco: Endereco
    ) {}

    get Nome(): string {
        return this.nome;
    }

    get NomeMaiusculo(): string {
        return this.nome.toUpperCase();
    }

    get NomeMinusculo(): string {
        return this.nome.toLowerCase();
    }

    getDescricao(): string {
        return `------------------ 
Informações do cliente:
Nome: ${this.Nome}
--------------------
${this.telefone.getDescricao()}
--------------------
${this.endereco.getDescricao()}`;
    }
}

function ordenarClientesNome(clientes: Cliente[]): Cliente[] {
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
