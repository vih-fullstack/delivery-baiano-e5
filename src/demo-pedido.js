const Pedido = require("./models/Pedido.js");
const Produto = require("./models/Produto.js");

const acaraje = new Produto(1, "Acarajé", 1500, 10);
const vatapa = new Produto(2, "Vatapá", 2000, 8);

const pedido = new Pedido("Barra", 12);

pedido.adicionarItem(acaraje, 2);
pedido.adicionarItem(vatapa, 1);

console.log("=== DEMONSTRAÇÃO DO PEDIDO ===");

console.log("Cliente: Pedido de demonstração");
console.log("Bairro:", pedido.bairro);

console.log("\nItens do pedido:");

pedido.itens.forEach((item) => {
    console.log(
        `${item.produto.nome} - ${item.qtd} unidade(s) - R$ ${(item.subtotal() / 100).toFixed(2)}`
    );
});

console.log("\nSubtotal: R$", (pedido.subtotal() / 100).toFixed(2));
console.log("Total: R$", (pedido.total() / 100).toFixed(2));