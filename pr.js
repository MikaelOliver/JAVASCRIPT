const pedido = {
    nomeDoCliente: 'Nome do cliente',
    itens: [],
    adicionarItem(nome, preco, quantidade) {
        this.itens.push({ nome, preco, quantidade });
    },
    calcularTotal() {
        let total = 0;
        for (let item of this.itens) {
            total += item.preco * item.quantidade;
        }
        return total; 
    },
    exibirDetalhes() {
        console.log("Cliente: " + this.nomeDoCliente);
        console.log("Pedido:");
        this.itens.forEach(item => {
            console.log(item.quantidade + "x " + item.nome + ": R$" + item.preco.toFixed(2));
        });
        console.log("Total: R$" + this.calcularTotal().toFixed(2));
    }
};

// Exemplo de uso
pedido.adicionarItem("Pizza", 15, 2);
pedido.adicionarItem("Refrigerante", 5, 1);
pedido.exibirDetalhes();