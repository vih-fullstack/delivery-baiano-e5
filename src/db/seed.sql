-- db/seed.sql - Dados iniciais do Delivery Baiano E5
-- Rodar depois do schema.sql

SET client_encoding TO 'UTF8';

-- Bairros e taxas de entrega
INSERT INTO bairros (nome, taxa_entrega) VALUES
    ('Rio Vermelho', 500),
    ('Barra', 600),
    ('Pituba', 700),
    ('Itapuã', 900);

-- Produtos do cardápio da equipe E5
INSERT INTO produtos (nome, descricao, preco_centavos, estoque_dia, ativo) VALUES
    ('Acarajé', 'Bolinho de feijão-fradinho frito no dendê.', 1290, 30, true),
    ('Bobó de camarão', 'Creme de aipim com camarão.', 3890, 20, true),
    ('Moqueca de banana', 'Moqueca preparada com banana-da-terra.', 2800, 15, true),
    ('Caruru Baiano', 'Prato tradicional preparado com quiabo.', 2800, 10, true),
    ('Moqueca Baiana de Peixe', 'Peixe preparado com leite de coco e dendê.', 2800, 0, false),
    ('Xinxim de Galinha', 'Prato tradicional baiano preparado com galinha.', 3500, 12, true);

-- Cupom de desconto
INSERT INTO cupons (codigo, percentual, apenas_primeira_compra) VALUES
    ('PRIMEIRA10', 10, true);

-- Pedido 1: Joana, 3 acarajés para a Barra
INSERT INTO pedidos (cliente, telefone, bairro_id, endereco, forma_pagamento,
                     subtotal_centavos, taxa_entrega_centavos, total_centavos)
VALUES ('Joana', '71999990000', 2, 'Rua das Flores, 10', 'pix', 3870, 600, 4470);

INSERT INTO itens_pedido (pedido_id, produto_id, quantidade, preco_unitario_centavos)
VALUES (1, 1, 3, 1290);

-- Pedido 2: Carlos, moqueca de banana e xinxim para Itapuã
INSERT INTO pedidos (cliente, telefone, bairro_id, endereco, forma_pagamento,
                     subtotal_centavos, taxa_entrega_centavos, total_centavos, status)
VALUES ('Carlos', '71988887777', 4, 'Rua do Farol, 200', 'dinheiro', 6300, 900, 7200, 'em preparo');

INSERT INTO itens_pedido (pedido_id, produto_id, quantidade, preco_unitario_centavos)
VALUES
    (2, 3, 1, 2800),
    (2, 6, 1, 3500);