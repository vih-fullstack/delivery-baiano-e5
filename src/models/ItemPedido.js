import { ErroValidacao } from "../erros.js";

class ItemPedido {
  constructor(produto, qtd) {
    if (!Number.isInteger(qtd) || qtd < 1) {
      throw new ErroValidacao(`quantidade inválida: ${qtd}`);
    }

    this.produto = produto;
    this.qtd = qtd;
    this.precoUnitario = produto.preco;
  }

  subtotal() {
    return this.precoUnitario * this.qtd;
  }
}

export default ItemPedido;