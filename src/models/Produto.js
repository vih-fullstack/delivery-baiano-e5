// src/models/Produto.js - um prato do cardápio da Dona Ju
class Produto {
    constructor(id, nome, preco, estoque, ativo = true) {
        if (!Number.isInteger(preco) || preco <= 0) {
            throw new Error(`preço inválido para ${nome}: ${preco}`);
        }
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
        this.ativo = ativo;
    }

    // true se está no cardápio hoje e tem a quantidade pedida
    temEstoque(qtd) {
        return this.ativo && this.estoque >= qtd;
    }
}

module.exports = Produto;