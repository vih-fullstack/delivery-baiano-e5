# Requisições da API (Aula 16)
Ligar o servidor: `npm run api`. Testar em outro terminal, no Git Bash.
| # | Requisição | Esperado | Deu certo? |
|---|---|---|---|
| 1 | `curl -i localhost:3000/produtos` | 200, os 5 pratos ativos | sim |
| 2 | `curl -i localhost:3000/produtos/3` | 200, a moqueca | sim |
| 3 | `curl -i localhost:3000/produtos/50` | 404, prato 50 não existe | sim |
| 4 | `POST /pedidos` com 3 acarajés para a Barra às 12h | 201, total 4200 | sim |
| 5 | `POST /pedidos` para Liberdade | 400, não entregamos em Liberdade | sim |
| 6 | `POST /pedidos` com o prato 99 | 400, prato 99 não existe | sim |
| 7 | `curl -i localhost:3000/pedidos/1` | 200, o pedido 1 | sim |
| 8 | `curl -i localhost:3000/pedidos/999` | 404, pedido 999 não existe | sim |
| 9 | `PATCH /pedidos/1/status` com "saiu para entrega" | 200, o pedido com o status novo | sim |
| 10 | `PATCH /pedidos/1/status` com "voando" | 400, status inválido | sim |
| 11 | `PATCH /pedidos/999/status` com "entregue" | 404, pedido 999 não existe | sim |
## Os comandos completos
```bash
curl -i -X POST localhost:3000/pedidos \
-H "Content-Type: application/json" \
-d '{"cliente":"Joana","bairro":"Barra","hora":12,"itens":[{"id":1,"qtd":3}]}'
curl -i -X PATCH localhost:3000/pedidos/1/status \
-H "Content-Type: application/json" \
-d '{"status":"saiu para entrega"}'