
import Produto from "./models/Produto.js";
import Pedido from "./models/Pedido.js";

const reais = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
});

const acaraje = new Produto(1, "Acarajé", 1200, 30);
const abara = new Produto(2, "Abará", 1000, 20);
const vatapa = new Produto(5, "Vatapá", 1500, 15);
const cocada = new Produto(6, "Cocada", 600, 40);
const bobo = new Produto(4, "Bobó de camarão", 3800, 0, false);

const pedido1 = new Pedido("Barra", 12);
pedido1.adicionarItem(acaraje, 2);
pedido1.adicionarItem(abara, 1);
pedido1.adicionarItem(cocada, 1);

for (const item of pedido1.itens) {
    console.log(`${item.qtd} x ${item.produto.nome}`);
}
console.log(`Total: ${reais.format(pedido1.total() / 100)}`);

const pedido2 = new Pedido("Rio Vermelho", 19, "PRIMEIRA10", true);
pedido2.adicionarItem(vatapa, 2);
console.log(`Pedido 2: ${reais.format(pedido2.total() / 100)}`);

console.assert(pedido1.total() === 4600, "pedido 1: R$ 46,00");
console.assert(pedido2.total() === 3200, "pedido 2: R$ 32,00 como cupom");

// Tire o comentário de uma linha por vez para testar os erros:
// pedido1.adicionarItem(bobo, 1);
// new Pedido("Pituba", 12).total();
// new Produto(7, "Cocada grande", -800, 10);
