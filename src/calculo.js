
// src/calculo.js - mostra os pedidos na tela usando as regras do regras.js

const regras = require("./regras.js");
const { buscarProduto } = require("./dados/cardapio.js");

const reais = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
});

function mostrarPedido(pedido) {
    console.log(`\n${pedido.bairro}, ${pedido.hora}h`);

    for (const item of pedido.itens) {
        console.log(`   ${item.qtd} x ${buscarProduto(item.id).nome}`);
    }

    const motivo = regras.motivoDaRecusa(pedido);

    if (motivo === "") {
        const total = regras.calcularTotal(pedido);
        console.log(`Total: ${reais.format(total / 100)}`);
    } else {
        console.log(`Recusado: ${motivo}.`);
    }
}

// Cenário 1: pedido comum na Barra
const pedido1 = {
    itens: [
        { id: 1, qtd: 2 },
        { id: 2, qtd: 1 },
        { id: 6, qtd: 1 }
    ],
    bairro: "Barra",
    hora: 12,
    primeiraCompra: false,
    cupom: ""
};

// Cenário 2: primeira compra com cupom
const pedido2 = {
    itens: [
        { id: 3, qtd: 2 }
    ],
    bairro: "Rio Vermelho",
    hora: 19,
    primeiraCompra: true,
    cupom: "PRIMEIRA10"
};

// Cenário 3: pedido abaixo do mínimo
const pedido3 = {
    itens: [
        { id: 1, qtd: 1 }
    ],
    bairro: "Pituba",
    hora: 12,
    primeiraCompra: false,
    cupom: ""
};

// Cenário 4: pedido às 22h
const pedido4 = {
    itens: [
        { id: 3, qtd: 1 }
    ],
    bairro: "Itapuã",
    hora: 22,
    primeiraCompra: false,
    cupom: ""
};

// Cenário 5: bairro fora da área
const pedido5 = {
    itens: [
        { id: 4, qtd: 1 }
    ],
    bairro: "Liberdade",
    hora: 13,
    primeiraCompra: false,
    cupom: ""
};

// Exibir os cinco pedidos
mostrarPedido(pedido1);
mostrarPedido(pedido2);
mostrarPedido(pedido3);
mostrarPedido(pedido4);
mostrarPedido(pedido5);
