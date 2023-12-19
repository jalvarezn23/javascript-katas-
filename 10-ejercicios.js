const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numbers) {
    let averageResult = 0;
    for (let i = 0; i < numbers.length; i++) {
        averageResult += numbers[i];
    }
    return averageResult / numbers.length;
}

const result = average(numbers);
console.log(result);