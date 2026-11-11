const { CARDAPIO, buscarProduto, listarAtivos } = require("./dados/cardapio.js");

console.log("Testando o cardápio...");

console.assert(CARDAPIO.length >= 6, "o cardápio tem pelo menos 6 produtos");
console.assert(buscarProduto(1).nome === "Acarajé", "o id 1 é o Acarajé");
console.assert(buscarProduto(99) === undefined, "id que não existe devolve undefined");
console.assert(listarAtivos().length === 5, "5 produtos ativos hoje");

console.log(listarAtivos().map((produto) => produto.nome));
console.log("Fim. Se nenhum Assertion failed apareceu acima, tudo passou.");