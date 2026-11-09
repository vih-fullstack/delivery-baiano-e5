
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

module.exports = {
    calcularSubtotal,
    calcularTotal
};
