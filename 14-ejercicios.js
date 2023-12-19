const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  
function repeatCounter(counterWords) {
    let counter= [];

    for(let i = 0; i < counterWords.length; i++){
        let word = counterWords[i];
        if (counter[word]){
            counter[word]++;
        } else {
            counter[word] = 1;
        }
    }
    return counter;
};

const result = repeatCounter(counterWords);
console.log(result);


