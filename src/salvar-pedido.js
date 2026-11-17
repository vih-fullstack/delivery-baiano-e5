
 // src/salvar-pedido.js - monta um pedido e grava no arquivo
 import Produto from "./models/Produto.js";
 import Pedido from "./models/Pedido.js";
 import { salvar } from "./repositories/pedidoArquivoRepository.js";

 const reais = new Intl.NumberFormat("pt-BR", {
     style: "currency",
     currency: "BRL"
 });

 const acaraje = new Produto(1, "Acarajé", 1200, 30);
 const abara = new Produto(2, "Abará", 1000, 20);
 const cocada = new Produto(6, "Cocada", 600, 40);

 const pedido = new Pedido("Barra", 12);

 pedido.adicionarItem(acaraje, 2);
 pedido.adicionarItem(abara, 1);
 pedido.adicionarItem(cocada, 1);

 const gravado = await salvar(pedido.paraObjeto());

 console.log(
     `Pedido ${gravado.id} gravado: ${gravado.itens.length} pratos, ${reais.format(gravado.total / 100)}`
 );
