
-- db/schema.sql - as tabelas do Delivery da Dona Ju
-- Pode rodar de novo: apaga as tabelas e cria tudo do zero.
-- Dinheiro sempre em centavos inteiros.

SET client_encoding TO 'UTF8';

DROP TABLE IF EXISTS itens_pedido, pedidos, cupons, produtos, bairros;

-- Bairros onde a Dona Ju entrega
CREATE TABLE bairros (
    id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nome varchar(60) NOT NULL UNIQUE,
    taxa_entrega integer NOT NULL CHECK (taxa_entrega >= 0)
);

-- Cardápio
CREATE TABLE produtos (
    id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nome varchar(80) NOT NULL UNIQUE,
    descricao text,
    preco_centavos integer NOT NULL CHECK (preco_centavos > 0),
    estoque_dia integer NOT NULL DEFAULT 0 CHECK (estoque_dia >= 0),
    ativo boolean NOT NULL DEFAULT true
);

-- Cupons de desconto
CREATE TABLE cupons (
    id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    codigo varchar(20) NOT NULL UNIQUE,
    percentual integer NOT NULL CHECK (percentual BETWEEN 1 AND 100),
    apenas_primeira_compra boolean NOT NULL DEFAULT false,
    ativo boolean NOT NULL DEFAULT true
);

-- Pedidos
CREATE TABLE pedidos (
    id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    cliente varchar(80) NOT NULL,
    telefone varchar(11),
    bairro_id integer NOT NULL REFERENCES bairros (id),
    endereco text,
    forma_pagamento varchar(8) CHECK (forma_pagamento IN ('dinheiro', 'pix')),
    cupom_id integer REFERENCES cupons (id),
    subtotal_centavos integer NOT NULL CHECK (subtotal_centavos >= 0),
    desconto_centavos integer NOT NULL DEFAULT 0 CHECK (desconto_centavos >= 0),
    taxa_entrega_centavos integer NOT NULL CHECK (taxa_entrega_centavos >= 0),
    total_centavos integer NOT NULL CHECK (total_centavos >= 0),
    status varchar(20) NOT NULL DEFAULT 'recebido'
        CHECK (status IN ('recebido', 'em preparo', 'saiu para entrega', 'entregue', 'cancelado')),
    criado_em timestamptz NOT NULL DEFAULT now()
);

-- Itens de cada pedido
CREATE TABLE itens_pedido (
    id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    pedido_id integer NOT NULL REFERENCES pedidos (id) ON DELETE CASCADE,
    produto_id integer NOT NULL REFERENCES produtos (id),
    quantidade integer NOT NULL CHECK (quantidade > 0),
    preco_unitario_centavos integer NOT NULL CHECK (preco_unitario_centavos > 0)
);
