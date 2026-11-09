
function calcularSubtotal(quantidades, precos) {
    let subtotal = 0;

    for (let i = 0; i < precos.length; i++) {
        subtotal += quantidades[i] * precos[i];
    }

    return subtotal;
}

function calcularTotal(subtotal, desconto, taxa) {
    return subtotal - desconto + taxa;
}

module.exports = {
    calcularSubtotal,
    calcularTotal
};

