// QQ 1
//new Set([1,1,2,2,3,4])
//const result = new Set([1,1,2,2,3,4])
//console.log(result)

// It returns {1, 2, 3, 4}


// QQ 2

//[...new Set("referee")].join("")
//const result = new Set("referee")
//console.log(result)

// It returns {'r', 'e', 'f'}

// QQ 3
//let m = new Map();
//m.set([1,2,3], true);
//m.set([1,2,3], false);

//const result = m.set([1,2,3])
//console.log(result)

// It returns: 0: {Array(3) => true} 1: {Array(3) => falst}

// hasDuplicate

//const hasDuplicate = arr => new Set(arr).size !== arr.length

//const result = hasDuplicate([1,3,2,1])
//console.log(result)

//const result = hasDuplicate([1,5,-1,4])
//console.log(result)

// first return: true / second return: false

// vowelCount


function isVowel(char) {
    return "aeiou".includes(char);
}

function vowelCount(str) {
    const vowelMap = new Map();
    for(let char of str) {
        let lowerCaseChar = char.toLowerCase()
        if(isVowel(lowerCaseChar)) {
            if(vowelMap.has(lowerCaseChar)) {
                vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
            } else {
                vowelMap.set(lowerCaseChar, 1);
            }
        }
    }
    return vowelMap;
}

//const result = vowelCount('awesome')
//console.log(result)

const result = vowelCount('Colt')
console.log(result)

// result 1: {'a' => 1, 'e' => 2, 'o' => 1}
// result 2: {'o' => 1}