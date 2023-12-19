const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(mixedElements){
    let sum = 0;
    for(let i = 0; i < mixedElements.length; i++){
        let element = mixedElements[i];
        if (typeof element === "number") {
            sum += mixedElements[i];
        } else if (typeof element === "string"){
            sum += mixedElements[i].length;
        } else {
            console.log("error")
        }
    }
    let average = sum / mixedElements.length;
    return average;
}

const result = averageWord(mixedElements);
console.log(result);