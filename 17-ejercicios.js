const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
};

for (const alien1 in alien) {
    console.log(`${alien1}: ${alien[alien1]}`);
};


