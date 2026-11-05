
// src/calculo.js - o total de um pedido do delivery
// Dinheiro sempre em centavos inteiros. R$ só na hora de mostrar.

const reais = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL"
});

const PRATOS = [
  "Acarajé",
  "Bobó de camarão",
  "Moqueca de banana",
  "Caruru Baiano",
  "Moqueca Baiana de peixe",
  "Xinxim de galinha"
];

const PRECOS = [1290, 3890, 2800, 2800, 2800, 3500];

const PEDIDO_MINIMO = 3000;

const QUANTIDADES = [
  [2, 1, 0, 0, 0, 0], // 1. pedido comum
  [0, 0, 0, 0, 0, 1], // 2. primeira compra com cupom
  [1, 0, 0, 0, 0, 0], // 3. abaixo do mínimo
  [0, 1, 0, 0, 0, 0], // 4. 22:00 em ponto
  [0, 1, 0, 0, 0, 0], // 5. bairro fora da área
];

const BAIRROS = [
  "Barra",
  "Rio Vermelho",
  "Pituba",
  "Itapuã",
  "Liberdade"
];

const HORAS = [12, 19, 12, 22, 13];

const PRIMEIRA_COMPRA = [
  false, true, false, false, false
];

const CUPONS = ["", "PRIMEIRA10", "", "", ""];

// MELHORIA DA ANDRESSA:
// Validação das quantidades dos produtos
function validarQuantidades(qtds) {
  if (!Array.isArray(qtds) || qtds.length !== PRATOS.length) {
    return false;
  }

  return qtds.every(
    quantidade =>
      Number.isInteger(quantidade) &&
      quantidade >= 0
  );
}

for (let c = 0; c < QUANTIDADES.length; c++) {
  const qtds = QUANTIDADES[c];
  const bairro = BAIRROS[c];
  const hora = HORAS[c];

  console.log(`\nCenário ${c + 1}: ${bairro}, ${hora}h`);

  // MELHORIA DA ANDRESSA:
  // Verifica as quantidades antes de calcular
  if (!validarQuantidades(qtds)) {
    console.log("Recusado: quantidades inválidas no pedido.");
    continue;
  }

  let subtotal = 0;
  let totalItens = 0;

  for (let i = 0; i < PRECOS.length; i++) {
    if (qtds[i] === 0) {
      continue;
    }

    subtotal += PRECOS[i] * qtds[i];
    totalItens += qtds[i];

    console.log(`  ${qtds[i]} x ${PRATOS[i]}`);
  }

  const palavra = totalItens === 1 ? "item" : "itens";

  console.log(
    `${totalItens} ${palavra}: ${reais.format(subtotal / 100)}`
  );

  let taxa = 0;

  switch (bairro) {
    case "Rio Vermelho":
      taxa = 500;
      break;

    case "Barra":
      taxa = 600;
      break;

    case "Pituba":
      taxa = 700;
      break;

    case "Itapuã":
      taxa = 900;
      break;
  }

  if (taxa === 0) {
    console.log(`Recusado: não entregamos em ${bairro}.`);

  } else if (hora < 11 || hora >= 22) {
    console.log("Recusado: pedidos só das 11h às 22h.");

  } else if (subtotal < PEDIDO_MINIMO) {
    const falta = PEDIDO_MINIMO - subtotal;

    console.log(
      `Recusado: faltam ${reais.format(falta / 100)} para o mínimo de ${reais.format(PEDIDO_MINIMO / 100)}.`
    );

  } else {
    const temDesconto =
      PRIMEIRA_COMPRA[c] &&
      CUPONS[c] === "PRIMEIRA10";

    const desconto = temDesconto
      ? Math.round((subtotal * 10) / 100)
      : 0;

    const total = subtotal - desconto + taxa;

    if (desconto > 0) {
      console.log(
        `Desconto: ${reais.format(-desconto / 100)}`
      );
    }

    console.log(`Taxa:  ${reais.format(taxa / 100)}`);
    console.log(`Total: ${reais.format(total / 100)}`);
  }
}
