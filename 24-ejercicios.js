const products = [
    { name: "Funko Dr. Strange", sellCount: 10 },
    { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
    { name: "Sable laser FX", sellCount: 23 },
    { name: "Varita de Voldemort", sellCount: 6 },
  ];

  const sumSellCount = (products) => {
        sumOfAll = 0;

    for(let i = 0; i < products.length; i++) {
        sumOfAll += products[i].sellCount;
        
    }
    return sumOfAll;
  };

  const result = sumSellCount(products);
  console.log(result);