const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
]

function eliminateCat(toys){
    const newToys =[];

    for(let i = 0; i < toys.length; i++){ 
        const toy = toys[i];
        if(!toy.name.includes("gato")){
            newToys.push(toy);
        }
    }
    return newToys;
};

const result = eliminateCat(toys);
console.log(result);


