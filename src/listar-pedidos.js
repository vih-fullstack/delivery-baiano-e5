
 // src/listar-pedidos.js - lê os pedidos gravados no arquivo
 // Rodar: node src/listar-pedidos.js

import { listar, buscarPorId } from "./repositories/pedidoArquivoRepository.js";

const reais = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
});

const pedidos = await listar();

console.log(`${pedidos.length} pedido(s) no arquivo`);

for (const pedido of pedidos) {
    console.log(`#${pedido.id} ${pedido.bairro}, ${pedido.hora}h: ${reais.format(pedido.total / 100)}`);
}

const primeiro = await buscarPorId(1);

console.log(primeiro ? `O pedido 1 é da ${primeiro.bairro}` : "Ainda não tem o pedido 1");

console.log((await buscarPorId(99)) ?? "O pedido 99 não existe");
