const regras = require("./regras.js");

console.log("Testando as regras...");

// Cada regra sozinha, com dados de exemplo
console.assert(regras.calcularSubtotal([1200, 600], [2, 1]) === 3000, "subtotal: 2 x R$ 12,00 + 1 x R$ 6,00");

console.assert(regras.calcularTaxa("Lua") === 0, "bairro fora da área não tem taxa");

// Testes das funções que serão adicionadas pelo integrante 3
// console.assert(regras.calcularDesconto(3000, "PRIMEIRA10", true) === 300, "PRIMEIRA10 dá 10% na primeira compra");
// console.assert(regras.calcularDesconto(3000, "PRIMEIRA10", false) === 0, "PRIMEIRA10 só vale na primeira compra");

console.assert(regras.dentroDoHorario(11) === true, "11h em ponto aceita");
console.assert(regras.dentroDoHorario(22) === false, "22h em ponto recusa");

// Os 5 cenários do pedido

// Cenário 1: pedido comum na Barra, às 12h
const pedido1 = {
    qtds: [1, 1, 0, 0, 0, 0],
    bairro: "Barra",
    hora: 12,
    primeiraCompra: false,
    cupom: ""
};

// Cenário 2: cupom na primeira compra, Rio Vermelho, 19h
const pedido2 = {
    qtds: [0, 0, 0, 0, 0, 1],
    bairro: "Rio Vermelho",
    hora: 19,
    primeiraCompra: true,
    cupom: "PRIMEIRA10"
};

// Cenário 3: pedido abaixo do mínimo, Pituba
const pedido3 = {
    qtds: [1, 0, 0, 0, 0, 0],
    bairro: "Pituba",
    hora: 12,
    primeiraCompra: false,
    cupom: ""
};

// Cenário 4: pedido às 22h, Itapuã
const pedido4 = {
    qtds: [0, 1, 0, 0, 0, 0],
    bairro: "Itapuã",
    hora: 22,
    primeiraCompra: false,
    cupom: ""
};

// Cenário 5: pedido fora da área, Liberdade
const pedido5 = {
    qtds: [0, 0, 0, 0, 0, 1],
    bairro: "Liberdade",
    hora: 13,
    primeiraCompra: false,
    cupom: ""
};

// Verificações
console.assert(regras.motivoDaRecusa(pedido1) === "", "1: pedido comum aceito");
console.assert(regras.calcularTotal(pedido1) === 5780, "1: total R$ 57,80");

console.assert(regras.motivoDaRecusa(pedido2) === "", "2: pedido com cupom aceito");
console.assert(regras.calcularTotal(pedido2) === 3650, "2: total R$ 36,50");

console.assert(regras.motivoDaRecusa(pedido3) === "abaixo do mínimo de R$ 30,00 em itens", "3: abaixo do mínimo");

console.assert(regras.motivoDaRecusa(pedido4) === "pedidos só das 11h às 22h", "4: fora do horário");

console.assert(regras.motivoDaRecusa(pedido5) === "não entregamos em Liberdade", "5: fora da área");

console.log("Fim. Se nenhum Assertion failed apareceu acima, tudo passou.");
