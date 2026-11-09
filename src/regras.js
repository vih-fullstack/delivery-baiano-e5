
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

module.exports = {
    calcularSubtotal,
    calcularTotal,
    calcularTaxa,
    dentroDoHorario
};
