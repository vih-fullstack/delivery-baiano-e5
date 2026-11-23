import path from "node:path";
import { lerCardapioCsv } from "./importarCardapio.js";

const arquivo = path.join(
  import.meta.dirname,
  "cardapio.csv"
);

const CARDAPIO = await lerCardapioCsv(arquivo);

function buscarProduto(id) {
  return CARDAPIO.find(
    (produto) => produto.id === id
  );
}

function listarAtivos() {
  return CARDAPIO.filter(
    (produto) => produto.ativo
  );
}

export { CARDAPIO, buscarProduto, listarAtivos };