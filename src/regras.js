const PRECOS = [1290, 3890, 2800, 2800, 2800, 3500];
const PEDIDO_MINIMO = 3000;

function calcularSubtotal(precos, qtds) {
    let subtotal = 0;

    for (let i = 0; i < precos.length; i++) {
        subtotal += precos[i] * qtds[i];
    }

    return subtotal;
}

function calcularTotal(pedido) {
    const subtotal = calcularSubtotal(PRECOS, pedido.qtds);
    const desconto = calcularDesconto(
        subtotal,
        pedido.cupom,
        pedido.primeiraCompra
    );
    const taxa = calcularTaxa(pedido.bairro);

    return subtotal - desconto + taxa;
}

function calcularTaxa(bairro) {
    switch (bairro) {
        case "Rio Vermelho":
            return 500;
        case "Barra":
            return 600;
        case "Pituba":
            return 700;
        case "Itapuã":
            return 900;
        default:
            return 0;
    }
}

function dentroDoHorario(hora) {
    return hora >= 11 && hora < 22;
}

function calcularDesconto(subtotal, cupom, primeiraCompra) {
    const valeCupom = cupom === "PRIMEIRA10" && primeiraCompra;
    return valeCupom ? Math.round((subtotal * 10) / 100) : 0;
}

function motivoDaRecusa(pedido) {

  // 1. Verificar se o bairro é atendido
  if (calcularTaxa(pedido.bairro) === 0) {
    return `não entregamos em ${pedido.bairro}`;
  }

  // 2. Verificar o horário
  if (!dentroDoHorario(pedido.hora)) {
    return "pedidos só das 11h às 22h";
  }

  // 3. Verificar o pedido mínimo
  if (calcularSubtotal(PRECOS, pedido.qtds) < PEDIDO_MINIMO) {
    return "abaixo do mínimo de R$ 30,00 em itens";
  }

  // Nenhum motivo para recusar
  return "";
}

module.exports = {
    calcularSubtotal,
    calcularTotal,
    calcularTaxa,
    dentroDoHorario,
    calcularDesconto,
    motivoDaRecusa
};