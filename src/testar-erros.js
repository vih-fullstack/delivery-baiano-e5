
import Produto from "./models/Produto.js";
import Pedido from "./models/Pedido.js";
import { buscarPorId } from "./repositories/pedidoArquivoRepository.js";
import { ErroValidacao, ErroNaoEncontrado } from "./erros.js";

async function tentar(descricao, acao) {
    try {
        await acao();
        console.log(`${descricao}: ok`);
    } catch (erro) {
        if (erro instanceof ErroValidacao) {
            console.log(`${descricao}: recusado, ${erro.message}`);
        } else if (erro instanceof ErroNaoEncontrado) {
            console.log(`${descricao}: não encontrado, ${erro.message}`);
        } else {
            console.error(`${descricao}: erro inesperado`);
            throw erro;
        }
    }
}

const acaraje = new Produto(1, "Acarajé", 1200, 30);

await tentar("Pedido da Barra", () => {
    const pedido = new Pedido("Barra", 12);
    pedido.adicionarItem(acaraje, 3);
    pedido.total();
});

await tentar("Pedido abaixo do mínimo", () => {
    const pedido = new Pedido("Pituba", 12);
    pedido.adicionarItem(acaraje, 1);
    pedido.total();
});

await tentar("Preço negativo", () => {
    new Produto(7, "Cocada grande", -800, 10);
});

await tentar("Pedido 99", async () => {
    const pedido = await buscarPorId(99);

    if (!pedido) {
        throw new ErroNaoEncontrado("o pedido 99 não existe");
    }
});
