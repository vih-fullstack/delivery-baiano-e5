
 // src/calculo.js - o total de um pedido do delivery
 // Dinheiro sempre em centavos inteiros. R$ só na hora de mostrar.
//(VICTORIA)
 const reais = new Intl.NumberFormat("pt-BR", {
   style: "currency",
   currency: "BRL"
 });

 // Preços do cardápio, em centavos
 const PRECO_ACARAJE = 1200;
 const PRECO_ABARA = 1000;
 const PRECO_COCADA = 600;

 // O pedido: quantas unidades de cada prato
 const qtdAcaraje = 2;
 const qtdAbara = 1;
 const qtdCocada = 1;

 // Subtotal dos itens
 const subtotal =
   PRECO_ACARAJE * qtdAcaraje +
   PRECO_ABARA * qtdAbara +
   PRECO_COCADA * qtdCocada;

 console.log(`Itens: ${reais.format(subtotal / 100)}`);

  // Taxa de entrega e total (Victória)
 const TAXA_ENTREGA = 600;
 const total = subtotal + TAXA_ENTREGA;

 console.log(`Taxa: ${reais.format(TAXA_ENTREGA / 100)}`);
 console.log(`Total: ${reais.format(total / 100)}`);

 // Regras do pedido (Victória)
 const PEDIDO_MINIMO = 3000;
 const HORA_ABERTURA = 11;
 const HORA_FECHAMENTO = 22;

 const horaAtual = new Date().getHours();

 const pedidoMinimoAtingido = subtotal >= PEDIDO_MINIMO;
 const dentroDoHorario =
   horaAtual >= HORA_ABERTURA && horaAtual < HORA_FECHAMENTO;

 const pedidoPodeSerFeito =
   pedidoMinimoAtingido && dentroDoHorario;

 console.log(`Pedido mínimo atingido: ${pedidoMinimoAtingido}`);
 console.log(`Dentro do horário: ${dentroDoHorario}`);
 console.log(`Pedido pode ser feito: ${pedidoPodeSerFeito}`);