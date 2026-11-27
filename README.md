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

## Como rodar

Na pasta do repositório:

    npm install
    npm start
    npm run dev
    npm test
    node src/pedido-agora.js

## Bibliotecas

| Biblioteca | Versão | Para quê | Licença |
|---|---|---|---|
| dayjs | ^1.11.23 | data e hora do pedido em português | MIT |

## npm audit

Rodado em 17/11/2026: `found 0 vulnerabilities`.

## Pedidos em arquivo

Os pedidos ficam em `data/pedidos.json` (fora do Git: cada máquina tem os seus).

Para salvar e listar os pedidos:

```bash
node src/salvar-pedido.js
node src/listar-pedidos.js
```

## Testes manuais (Aula 14)

| # | O que fiz | Esperado | Deu certo? |
|---|---|---|---|
| 1 | Apaguei a pasta data e rodei node src/listar-pedidos.js | 0 pedido(s) no arquivo | Sim |
| 2 | Rodei node src/salvar-pedido.js | Pedido 1 gravado: 3 pratos, R$ 46,00 | Sim |
| 3 | Rodei node src/salvar-pedido.js novamente | Pedido 2 gravado: 3 pratos, R$ 46,00 | Sim |
| 4 | Fechei o terminal, abri outro e rodei node src/listar-pedidos.js | 2 pedido(s) no arquivo, #1 e #2 | Sim |
| 5 | Busquei o pedido 99 | O pedido 99 não existe | Sim |

## Banco de dados - PostgreSQL (Aula 17)
Para testar sem instalar nada: db-fiddle.com, Database PostgreSQL 17.
Cole o `db/schema.sql` e, embaixo, o `db/seed.sql` no painel Schema SQL,
as consultas do `db/consultas.sql` no Query SQL, e clique em Run.
Na máquina, precisa do PostgreSQL 16 ou mais novo e do pgAdmin 4.
1. No pgAdmin: Databases > Create > Database, nome `delivery`.
2. Botão direito no `delivery` > Query Tool > Open File > `db/schema.sql` > F5.
3. Open File > `db/seed.sql` > F5.
4. Para conferir: `db/consultas.sql`, uma consulta por vez.
Para recomeçar do zero, rode o `schema.sql` e o `seed.sql` de novo.
Pelo psql (SQL Shell, no Windows), as barras do caminho são `/`:
\c delivery
\i 'D:/projetos/delivery-baiano-eN/db/schema.sql'
\i 'D:/projetos/delivery-baiano-eN/db/seed.sql'