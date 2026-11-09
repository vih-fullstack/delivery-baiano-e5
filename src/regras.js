
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
    return 0;
}

function motivoDaRecusa(pedido) {
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