import express from "express";
import path from "node:path";
import rotasProdutos from "./rotas/produtos.js";
import rotasPedidos from "./rotas/pedidos.js";
import { ErroValidacao, ErroNaoEncontrado } from "./erros.js";

const app = express();

// Middleware de log
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Leitura de JSON
app.use(express.json());

// Arquivos estáticos da pasta public
app.use(express.static(path.join(import.meta.dirname, "..", "public")));

// Rotas de produtos
app.use(rotasProdutos);
app.use(rotasPedidos);

// Rota não encontrada
app.use((req, res, next) => {
    next(new ErroNaoEncontrado(`rota ${req.method} ${req.url} não encontrada`));
});

// Central de erros
app.use((err, req, res, next) => {
    if (err instanceof ErroValidacao) {
    return res.status(400).json({ erro: err.message });
    }

    if (err instanceof ErroNaoEncontrado) {
    return res.status(404).json({ erro: err.message });
    }

    if (err.type === "entity.parse.failed") {
    return res.status(400).json({ erro: "JSON inválido" });
    }

    console.error(err);
    res.status(500).json({ erro: "Erro interno do servidor" });
});

export default app;