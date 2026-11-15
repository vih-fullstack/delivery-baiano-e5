const Produto = require("./models/Produto.js");
const Pedido = require("./models/Pedido.js");
const { CARDAPIO } = require("./dados/cardapio.js");

const reais = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL"
});

// Cria objetos Produtos com dados reais do cardapio
const produtos = CARDAPIO.map((p) => new Produto(p.id, p.nome, p.preco, p.estoque, p.ativo));

const porId = (id) => produtos.find((p) => p.id === id);

// Pedido 1 - Compra sem cupom
const pedido1 = new Pedido("Barra", 12);

pedido1.adicionarItem(porId(1), 2);
pedido1.adicionarItem(porId(2), 1);
pedido1.adicionarItem(porId(6), 1);

console.log("=== Pedido 1: sem cupom ===");

for (const item of pedido1.itens) {
  console.log(`${item.qtd} x ${item.produto.nome}`);
}

console.log(`Total: ${reais.format(pedido1.total() / 100)}`);

// Pedido 2 - Primeira compra com cupom
const pedido2 = new Pedido(
  "Rio Vermelho",
  19,
  "PRIMEIRA10",
  true
);

pedido2.adicionarItem(porId(3), 2);

console.log("\n=== Pedido 2: primeira compra ===");

for (const item of pedido2.itens) {
  console.log(`${item.qtd} x ${item.produto.nome}`);
}

console.log(`Total: ${reais.format(pedido2.total() / 100)}`);

// Testes de valores de estoque
console.assert(pedido1.total() === 10570, "Total pedido 1");
console.assert(pedido2.total() === 5540, "Total pedido 2");
console.assert(
  !porId(5).temEstoque(1),
  "Produto esgotado não deve ser aceito"
);

// Testes de erro: descomente uma linha por vez

// pedido1.adicionarItem(porId(5), 1); // Sem estoque
// new Pedido("Pituba", 12).total(); // Abaixo do mínimo
// new Produto(7, "Cocada gigante", -800, 10); // Preço inválido