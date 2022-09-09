const array = [-2, -12, 1, 3]

let answer = false;
for (let i =0; i<array.length; i++){
    for (let j = 0; j<array.length; j++){
        if (i !== j){
            if (array[i] + array[j] === 0){
                answer = true;
            }
        }
    }
}
console.log(answer)

//Should be a runtime of O(1)


function uniqueCharacters(word) {
    let uniqueChars = new Set([])
    for (let i = 0; i<word.length; i++){
        uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
    console.log(uniqueChars('words'));
}

//Should be a runtime of 0(1)


