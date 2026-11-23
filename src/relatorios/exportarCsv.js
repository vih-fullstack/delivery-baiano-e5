// src/relatorios/exportarCsv.js - os pedidos do arquivo viram planilha
// Rodar na pasta do repositorio: node src/relatorios/exportarCsv.js

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { listar } from "../repositories/pedidoArquivoRepository.js";

const PASTA = path.join(import.meta.dirname, "..", "..", "data");
const ARQUIVO = path.join(PASTA, "relatorio-pedidos.csv");

// Texto com ; ou aspas vai entre aspas, e a aspa de dentro dobra
function campo(valor) {
    const texto = String(valor ?? "");
    if (texto.includes(";") || texto.includes('"') || texto.includes("\n")) {
        return `"${texto.replaceAll('"', '""')}"`;
    }
    return texto;
}

// Converte a data para o formato brasileiro
function dataBr(iso) {
    if (!iso) return "";
    const d = new Date(iso);
    const dia = d.toLocaleDateString("pt-BR");
    const hora = d.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit"
    });
    return `${dia} ${hora}`;
}

// Converte centavos para reais com virgula
function reaisCsv(centavos) {
    return (centavos / 100).toFixed(2).replace(".", ",");
}

const pedidos = await listar();
const linhas = ["id;data;cliente;bairro;total;status"];

for (const p of pedidos) {
    const colunas = [
        p.id,
        dataBr(p.criadoEm),
        p.cliente,
        p.bairro,
        reaisCsv(p.total),
        p.status ?? "recebido",
    ];

    linhas.push(colunas.map(campo).join(";"));
}

await mkdir(PASTA, { recursive: true });
await writeFile(ARQUIVO, "\uFEFF" + linhas.join("\n") + "\n", "utf-8");

console.log(`${pedidos.length} pedido(s) em ${ARQUIVO}`);