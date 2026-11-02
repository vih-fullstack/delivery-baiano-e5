# Depuração do bugs.js

Equipe: E5  
Data: 27/10/2026  
Quem digitou: Victória Gabriela Nunes Dos Santos  
Quem registrou: Victória Gabriela Nunes Dos Santos  
Quem revisou o pull request: Andressa Santos Nascimento (revisão pendente)

## O pedido do bugs.js

2 acarajés de R$ 12,00, 1 cocada de R$ 6,00, bairro Barra (taxa R$ 6,00), cupom PRIMEIRA10.

## Esperado x o que o programa mostrou

| Valor | Esperado (conta na mão) | O programa mostrou antes das correções |
|---|---|---|
| Itens | R$ 30,00 | R$ 30,00 |
| Desconto | R$ 3,00 | R$ 3,00 (aproximadamente) |
| Taxa | R$ 6,00 | R$ 0,06 |
| Total | R$ 33,00 | R$ 27,05 |
| Aceito ou recusado | Pedido aceito | Pedido recusado |

## Hipóteses, testes e resultados

| # | Observação | Hipótese | Teste | Resultado | Linha e correção |
|---|---|---|---|---|---|
| 1 | A taxa da Barra apareceu como R$ 0,06 | A taxa foi registrada como 6 centavos em vez de 600 | Conferir o valor de taxaEntrega na condição do bairro Barra | Confirmada pela leitura do código | Linha 35: `taxaEntrega = 6;` virou `taxaEntrega = 600;` |
| 2 | O desconto era calculado incluindo a taxa | A fórmula do cupom soma a taxa ao subtotal | Conferir a expressão de desconto e comparar com a regra de 10% somente nos itens | Confirmada pela leitura do código | Linha 45: `desconto = (subtotal + taxaEntrega) * 10 / 100;` virou `desconto = subtotal * 10 / 100;` |
| 3 | O pedido de R$ 30,00 foi recusado | A condição exige valor maior, não maior ou igual, ao mínimo | Comparar subtotal e PEDIDO_MINIMO com a condição de aceitação | Confirmada pela leitura do código | Linha 53: `subtotal > PEDIDO_MINIMO` virou `subtotal >= PEDIDO_MINIMO` |

## Saída final, depois das correções

```text
Itens:    R$ 30,00
Desconto: R$ 3,00
Taxa:     R$ 6,00
Total:    R$ 33,00
Pedido aceito
```

Saída esperada após as correções. Confirmar executando `node bugs.js`.

## O que a equipe aprendeu

Aprendemos que os valores em dinheiro precisam ser representados corretamente em centavos e que o desconto deve seguir as regras do cupom. Também aprendemos que uma comparação usando `>` pode recusar um pedido que atende exatamente ao valor mínimo.
