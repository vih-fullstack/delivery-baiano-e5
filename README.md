# delivery-baiano-e5

Projeto de desenvolvimento de uma plataforma de pedidos e entregas online. O objetivo é simular o ecossistema completo de um app de delivery, integrando catálogo de produtos, formulário de pedido, regras de negócio, acompanhamento de pedidos e painel administrativo ao longo das sprints.

## Integrantes

| Nome | Usuário no GitHub |
|---|---|
| Victória Gabriela Nunes Dos Santos | vih-fullstack |
| Andressa Santos Nascimento | dressasantosn0708-star |
| Márcio Vinicius Esteves Reis | kamikazedojapan |

## Como rodar

Requer Node.js 26.

- Abra `public/index.html` no navegador para visualizar o cardápio.
- Use o link **Fazer Pedido** para acessar `public/pedido.html`.
- Execute `node src/calculo.js` para testar o cálculo do pedido no terminal.
- Execute `node bugs.js` para conferir a atividade de depuração.

## Situação

Sprint 1 concluída. Sprint 2 em andamento, com as regras de negócio implementadas em JavaScript e os testes automatizados passando.

Scrum Master da Sprint 1: Victória Gabriela Nunes Dos Santos.
Scrum Master da Sprint 2: Andressa Santos Nascimento.

## Regras da Dona Ju

- O delivery recebe pedidos das 11h às 22h.
- O pedido mínimo é de R$ 30,00 em itens, sem contar a taxa de entrega.
- O cupom `PRIMEIRA10` dá 10% de desconto nos itens na primeira compra.
- Os pagamentos são realizados em dinheiro ou Pix na entrega.
- O cliente pode consultar o cardápio e acompanhar o status do pedido.
- A taxa de entrega depende do bairro atendido.
- A taxa de entrega e o valor total devem ser informados antes da confirmação do pedido.

## Como contribuir

1. Faça um fork ou clone do repositório.
2. Atualize sua branch `main` com as alterações mais recentes.
3. Crie uma branch para sua tarefa, seguindo o padrão `feat/nome-da-funcionalidade` ou `fix/nome-da-correcao`.
4. Realize as alterações necessárias no código.
5. Faça commits com mensagens claras e padronizadas.
6. Envie sua branch para o GitHub com `git push`.
7. Abra um Pull Request direcionado à branch `main`.
8. Solicite a revisão de outro integrante da equipe.
9. Após a aprovação, faça o merge do Pull Request.
