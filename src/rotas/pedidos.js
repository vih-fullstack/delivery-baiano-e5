// src/rotas/pedidos.js - fazer, ver e acompanhar pedidos
import { Router } from "express";
import Produto from "../models/Produto.js";
import Pedido from "../models/Pedido.js";
import { buscarProduto } from "../dados/cardapio.js";
import * as repositorio from "../repositories/pedidoArquivoRepository.js";
import { ErroValidacao, ErroNaoEncontrado } from "../erros.js";

const rotas = Router();

// O prato do cardápio vira um Produto, que sabe conferir o estoque
function produtoDoCardapio(id) {
    const dados = buscarProduto(Number(id));
    if (!dados) {
        throw new ErroValidacao(`prato ${id} não existe`);
    }
    return new Produto(dados.id, dados.nome, dados.preco, dados.estoque, dados.ativo);
}

// POST /pedidos: cria o pedido, valida e grava
rotas.post("/pedidos", async (req, res) => {
    const { cliente, bairro, hora, itens } = req.body ?? {};
    if (!cliente) {
        throw new ErroValidacao("informe o nome do cliente");
    }
    if (!Array.isArray(itens) || itens.length === 0) {
        throw new ErroValidacao("o pedido precisa de pelo menos um item");
    }
    const pedido = new Pedido(bairro, hora);
    for (const item of itens) {
        pedido.adicionarItem(produtoDoCardapio(item.id), item.qtd);
    }
    const gravado = await repositorio.salvar({ cliente, ...pedido.paraObjeto() });
    res.status(201).json(gravado);
});

// GET /pedidos/7: um pedido pelo número
rotas.get("/pedidos/:id", async (req, res) => {
    const pedido = await repositorio.buscarPorId(Number(req.params.id));
    if (!pedido) {
        throw new ErroNaoEncontrado(`pedido ${req.params.id} não existe`);
    }
    res.json(pedido);
});

// Os status que um pedido pode ter, na ordem
const STATUS = ["recebido", "em preparo", "saiu para a entrega", "entregue", "cancelado"];

// PATCH /pedidos/7/status: a cozinha muda só o status
rotas.patch("/pedidos/:id/status", async (req, res) => {
  const { status } = req.body ?? {};
  if (!STATUS.includes(status)) {
    throw new ErroValidacao(`status inválido. Use um destes: ${STATUS.join(", ")}`);
  }
  const pedido = await repositorio.atualizarStatus(Number(req.params.id), status);
  if (!pedido) {
    throw new ErroNaoEncontrado(`pedido ${req.params.id} não existe`);
  }
  res.json(pedido);
});

export default rotas;