// bugs.js - CBE164, Aula 4 (27/10/2026)
// Calcula UM pedido do Delivery Baiano. O programa roda, mas o
// resultado está errado: tem 3 defeitos de cálculo escondidos.
// Não reescreva o arquivo. Ache cada defeito com console.log ou com
// o depurador do VS Code, corrija só a linha errada e anote tudo no
// docs/depuracao.md da equipe.
//
// Regras da Dona Ju:
// - dinheiro sempre em centavos inteiros (1200 = R$ 12,00)
// - pedido mínimo de R$ 30,00 nos itens, sem contar a taxa
// - cupom PRIMEIRA10: 10% de desconto só nos itens
// - cada bairro tem a sua taxa de entrega (valores de exemplo)

const PEDIDO_MINIMO = 3000;

// O pedido do cliente
const itens = [
  { nome: "Acarajé", precoCentavos: 1200, quantidade: 2 },
  { nome: "Cocada", precoCentavos: 600, quantidade: 1 }
];
const bairro = "Barra";
const cupom = "PRIMEIRA10";

// 1. Soma dos itens
let subtotal = 0;
for (let i = 0; i < itens.length; i++) {
  subtotal = subtotal + itens[i].precoCentavos * itens[i].quantidade;
}

// 2. Taxa de entrega do bairro
let taxaEntrega = 0;
if (bairro === "Rio Vermelho") {
  taxaEntrega = 500;
} else if (bairro === "Barra") {
  taxaEntrega = 600;
} else if (bairro === "Pituba") {
  taxaEntrega = 700;
} else if (bairro === "Itapuã") {
  taxaEntrega = 900;
}

// 3. Desconto do cupom
let desconto = 0;
if (cupom === "PRIMEIRA10") {
  desconto = subtotal * 10 / 100;
}

// 4. Total do pedido
const total = subtotal - desconto + taxaEntrega;

// 5. Pedido mínimo
let aceito = false;
if (subtotal >= PEDIDO_MINIMO) {
  aceito = true;
}

// Resultado. O R$ aparece só aqui, na hora de mostrar.
console.log("Itens:    R$ " + (subtotal / 100).toFixed(2).replace(".", ","));
console.log("Desconto: R$ " + (desconto / 100).toFixed(2).replace(".", ","));
console.log("Taxa:     R$ " + (taxaEntrega / 100).toFixed(2).replace(".", ","));
console.log("Total:    R$ " + (total / 100).toFixed(2).replace(".", ","));
if (aceito) {
  console.log("Pedido aceito");
} else {
  console.log("Pedido recusado: o mínimo é R$ 30,00 em itens");
}
