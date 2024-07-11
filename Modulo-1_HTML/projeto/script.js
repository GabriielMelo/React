const produtos = [
  {
    produto: "bola",
    preco: 5.5,
    quantidade: 3,
  },
  {
    produto: "caderno",
    preco: 19.9,
    quantidade: 2,
  },
  {
    produto: "caneta",
    preco: 1.2,
    quantidade: 10,
  },
  {
    produto: "calculadora",
    preco: 9.9,
    quantidade: 2,
  },
];

produtosTotal = produtos.map((item) => {
  return {
    ...item,
    total: item.preco * item.quantidade,
  };
});

console.log(produtosTotal);
