import { Router } from "express";
import { listarAtivos, buscarProduto } from "../dados/cardapio.js";
import { ErroNaoEncontrado } from "../erros.js";

const rotas = Router();

rotas.get("/produtos", (req, res) => {
    res.json(listarAtivos());
});

rotas.get("/produtos/:id", (req, res) => {
    const produto = buscarProduto(Number(req.params.id));

    if (!produto) {
    throw new ErroNaoEncontrado(`prato ${req.params.id} não existe`);
    }

    res.json(produto);
});

export default rotas;