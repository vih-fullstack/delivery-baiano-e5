import { readFile } from "node:fs/promises";
import { ErroValidacao } from "../erros.js";

function centavos(texto) {
  return Math.round(Number(texto.replace(",", ".")) * 100);
}

export async function lerCardapioCsv(arquivo) {
const texto = (await readFile(arquivo, "utf-8"))
.replace(/^\uFEFF/, "");

const [cabecalho, ...linhas] = texto.trim().split(/\r?\n/);

if (cabecalho.trim() !== "id;nome;preco;estoque;ativo") {
throw new ErroValidacao("cabeçalho inválido no cardápio CSV");
}

return linhas
.filter((linha) => linha.trim() !== "")
.map((linha, i) => {
    const [id, nome, preco, estoque, ativo] = linha.split(";");

    const valorEmCentavos = preco
    ? centavos(preco.trim())
    : NaN;

    if (
    !Number.isInteger(valorEmCentavos) ||
    valorEmCentavos <= 0
    ) {
    throw new ErroValidacao(
        `preço inválido na linha ${i + 2} do cardápio: ${preco ?? ""}`
    );
    }

    const produto = {
    id: Number(id),
    nome: nome?.trim(),
    preco: valorEmCentavos,
    estoque: Number(estoque),
    ativo: ativo?.trim().toLowerCase() === "sim"
    };

    if (
    !Number.isInteger(produto.id) ||
    produto.id <= 0 ||
    !produto.nome ||
    !Number.isInteger(produto.estoque) ||
    produto.estoque < 0
    ) {
    throw new ErroValidacao(
        `dados inválidos na linha ${i + 2} do cardápio`
    );
    }

    return produto;
});
}