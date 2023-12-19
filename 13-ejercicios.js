const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];

function finderName(name) {
    if (nameFinder.includes(name)){
        return `True, ${nameFinder.indexOf(name)}`;
    } else {
        return null;
    }
}

const result = finderName("Marc")
console.log(result);