
const regras = require("./regras.js");

console.log("Testando as regras...");

// Testes das funções
console.assert(
    regras.calcularSubtotal([1200, 600], [2, 1]) === 3000,
    "subtotal: 2 x 1200 + 1 x 600 = 3000"
);

console.assert(
    regras.calcularTaxa("Lua") === 0,
    "bairro fora da área não tem taxa"
);

console.assert(
    regras.calcularDesconto(3000, "PRIMEIRA10", true) === 300,
    "PRIMEIRA10 dá 10% na primeira compra"
);

console.assert(
    regras.calcularDesconto(3000, "PRIMEIRA10", false) === 0,
    "PRIMEIRA10 só vale na primeira compra"
);

console.assert(
    regras.dentroDoHorario(11) === true,
    "11h em ponto aceita"
);

console.assert(
    regras.dentroDoHorario(22) === false,
    "22h em ponto recusa"
);

// Teste novo da Aula 11
console.assert(
    regras.subtotalDosItens([
        { id: 1, qtd: 2 },
        { id: 6, qtd: 1 }
    ]) === 6080,
    "itens: 2 Acarajés + 1 Xinxim de Galinha"
);

// Cenário 1: pedido comum na Barra, às 12h
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

// Cenário 2: cupom na primeira compra
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

// Cenário 5: pedido fora da área
const pedido5 = {
    itens: [
        { id: 4, qtd: 1 }
    ],
    bairro: "Liberdade",
    hora: 13,
    primeiraCompra: false,
    cupom: ""
};

// Verificações dos cinco cenários

// Pedido 1: 2580 + 3890 + 3500 + 600 = 10570
console.assert(
    regras.motivoDaRecusa(pedido1) === "",
    "1: pedido comum aceito"
);

console.assert(
    regras.calcularTotal(pedido1) === 10570,
    "1: total R$ 105,70"
);

// Pedido 2: 5600 - 560 + 500 = 5540
console.assert(
    regras.motivoDaRecusa(pedido2) === "",
    "2: pedido com cupom aceito"
);

console.assert(
    regras.calcularTotal(pedido2) === 5540,
    "2: total R$ 55,40"
);

// Pedido 3: abaixo do mínimo
console.assert(
    regras.motivoDaRecusa(pedido3) ===
        "abaixo do mínimo de R$ 30,00 em itens",
    "3: abaixo do mínimo"
);

// Pedido 4: fora do horário
console.assert(
    regras.motivoDaRecusa(pedido4) ===
        "pedidos só das 11h às 22h",
    "4: fora do horário"
);

// Pedido 5: bairro não atendido
console.assert(
    regras.motivoDaRecusa(pedido5) ===
        "não entregamos em Liberdade",
    "5: fora da área"
);

console.log(
    "Fim. Se nenhum Assertion failed apareceu acima, tudo passou."
);
