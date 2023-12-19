const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];

function findTshirt(products) {
    let tshirtProducts = [];
    for(let i = 0; i < products.length; i++){
        let product = products[i];
        if (product.includes("Camiseta")){
        tshirtProducts.push(product)}
    }

    return tshirtProducts;
};

const result = findTshirt(products);
console.log(result);