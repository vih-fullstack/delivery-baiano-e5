# delivery-baiano-e5

Projeto de desenvolvimento de uma plataforma de pedidos e entregas online. O objetivo é simular o ecossistema completo de um app de delivery, integrando catálogo de produtos, formulário de pedido, regras de negócio, acompanhamento de pedidos e painel administrativo ao longo das sprints.

## Integrantes

| Nome | Usuário no GitHub |
|---|---|
| Victória Gabriela Nunes Dos Santos | vih-fullstack |
| Andressa Santos Nascimento | dressasantosn0708-star |
| Márcio Vinicius Esteves Reis | Kamikazedojapan |

## Como rodar

Requer Node.js 26.

- Abra `public/index.html` no navegador para visualizar o cardápio.
- Use o link **Fazer Pedido** para acessar `public/pedido.html`.
- Execute `node src/calculo.js` para testar o cálculo do pedido no terminal.
- Execute `node bugs.js` para conferir a atividade de depuração.

## Situação

Sprint 1 em andamento. O projeto possui cardápio em HTML, formulário de pedido, validações nativas no formulário, atividade de depuração concluída e lógica inicial de cálculo em JavaScript.

Scrum Master da Sprint 1: Victória Gabriela Nunes Dos Santos.

## Regras da Dona Ju

- O delivery recebe pedidos das 11h às 22h.
- O pedido mínimo é de R$ 30,00 em itens, sem contar a taxa de entrega.
- O cupom `PRIMEIRA10` dá 10% de desconto nos itens na primeira compra.
- Os pagamentos são realizados em dinheiro ou Pix na entrega.
- O cliente pode consultar o cardápio e acompanhar o status do pedido.
- A taxa de entrega depende do bairro atendido.
- A taxa de entrega e o valor total devem ser informados antes da confirmação do pedido.
