-- db/consultas.sql - as consultas do dia a dia da Dona Ju
-- No DB Fiddle: 1 a 6 juntas no Query SQL; a 7 sozinha, porque dá erro de propósito.
-- No pgAdmin: selecione uma consulta por vez e aperte F5.
-- 1. O cardápio de hoje, do mais barato para o mais caro
SELECT nome, preco_centavos
FROM produtos
WHERE ativo = true
ORDER BY preco_centavos;
-- 2. O que está sem estoque
SELECT nome FROM produtos WHERE estoque_dia = 0;
-- 3. Chegou camarão: o bobó volta ao cardápio com 10 porções
UPDATE produtos SET estoque_dia = 10, ativo = true WHERE id = 4;
-- 4. A fila da cozinha: cada pedido com o nome do bairro (JOIN)
SELECT p.id, p.cliente, b.nome AS bairro, p.total_centavos, p.status
FROM pedidos p
JOIN bairros b ON b.id = p.bairro_id
ORDER BY p.criado_em;
-- 5. O que vai no pedido 2: os itens com o nome do prato
SELECT pr.nome, i.quantidade, i.preco_unitario_centavos,
i.quantidade * i.preco_unitario_centavos AS subtotal
FROM itens_pedido i
JOIN produtos pr ON pr.id = i.produto_id
WHERE i.pedido_id = 2;
-- 6. A cozinha muda o status do pedido 1
UPDATE pedidos SET status = 'saiu para entrega' WHERE id = 1;
-- 7. Tentar apagar o acarajé: o banco recusa, porque o pedido 1 usa ele
DELETE FROM produtos WHERE id = 1;
-- ERRO: viola a chave estrangeira. Prato não se apaga, desativa:
UPDATE produtos SET ativo = false WHERE id = 1;