const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];

function removeDuplicates(duplicates) {

    let noDuplicates = [];
    for(let i = 0; i < duplicates.length; i++){
        let duplicate = duplicates[i];
        if(!noDuplicates.includes(duplicate)){
            noDuplicates.push(duplicate);
        }
    }

    return noDuplicates;
  
}

const result = removeDuplicates(duplicates);
console.log(result);