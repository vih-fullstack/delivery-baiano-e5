// Cardápio da Delivery dona Ju
// Preços em centavos.

const CARDAPIO = [
    { id: 1, nome: "Acarajé", preco: 1290, estoque: 30, ativo: true },
    { id: 2, nome: "Bobó de camarão", preco: 3890, estoque: 20, ativo: true },
    { id: 3, nome: "Moqueca de banana", preco: 2800, estoque: 15, ativo: true },
    { id: 4, nome: "Caruru Baiano", preco: 2800, estoque: 10, ativo: true },
    { id: 5, nome: "Moqueca Baiana de Peixe", preco: 2800, estoque: 0, ativo: false },
    { id: 6, nome: "Xinxim de Galinha", preco: 3500, estoque: 12, ativo: true },
];

// Busca um produto pelo id
function buscarProduto(id) {
    return CARDAPIO.find((produto) => produto.id === id);
}

// Lista somente os produtos ativos
function listarAtivos() {
    return CARDAPIO.filter((produto) => produto.ativo);
}

module.exports = {
    CARDAPIO,
    buscarProduto,
    listarAtivos
};