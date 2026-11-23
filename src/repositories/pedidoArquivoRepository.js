
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const PASTA = path.join(import.meta.dirname, "..", "..", "data");
const ARQUIVO = path.join(PASTA, "pedidos.json");

// Todos os pedidos gravados; se o arquivo ainda não existe, lista vazia
export async function listar() {
    try {
        const texto = await readFile(ARQUIVO, "utf-8");
        return JSON.parse(texto);
    } catch (erro) {
        if (erro.code === "ENOENT") {
            return [];
        }
        throw erro;
    }
}

// O pedido com esse id, ou undefined
export async function buscarPorId(id) {
    const pedidos = await listar();
    return pedidos.find((pedido) => pedido.id === id);
}

// Dá o próximo id, grava a lista inteira e devolve o pedido com o id
export async function salvar(dados) {
    const pedidos = await listar();
    const maiorId = pedidos.reduce((maior, pedido) => Math.max(maior, pedido.id), 0);
    const novo = {
    id: maiorId + 1,
    criadoEm: new Date().toISOString(),
    status: "recebido",
    ...dados,
};
    pedidos.push(novo);
    await mkdir(PASTA, { recursive: true });
    await writeFile(ARQUIVO, JSON.stringify(pedidos, null, 2), "utf-8");
    return novo;
}
