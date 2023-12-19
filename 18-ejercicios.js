const placesToTravel = [
    {id: 5, name: 'Japan'}, 
    {id: 11, name: 'Venecia'}, 
    {id: 23, name: 'Murcia'}, 
    {id: 40, name: 'Santander'}, 
    {id: 44, name: 'Filipinas'}, 
    {id: 59, name: 'Madagascar'}
];

function eliminateId(placesToTravel) {

    const newPlacesToTravel = [];

    for(let i = 0; i < placesToTravel.length; i++){
        let placeToTravel = placesToTravel[i];
        if(placeToTravel.id !== 11 && placeToTravel.id !== 40){
            newPlacesToTravel.push(placeToTravel);
        } 
    }   
    return newPlacesToTravel;
};

let result = eliminateId(placesToTravel);
console.log(result);