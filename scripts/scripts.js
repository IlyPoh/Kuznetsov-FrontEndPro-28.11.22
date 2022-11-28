// 1. Avarage number of elements in array

const exampleArray = ['asd', 1, "24", 1231, {}, 4151, true];


const averageNumber = (array) => {
    let numberFromExampleArray = []

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            numberFromExampleArray.push(array[i])
        }
    }
    return numberFromExampleArray.reduce((a, b) => a + b) / numberFromExampleArray.length
}

console.log(`Average number: ${averageNumber(exampleArray).toFixed(2)}`);



// 2. Math

const OPERATIONS = {
    PLUS: "+",
    MINUS: "-",
    MULTY: "*",
    DIV: "/",
    MODUL: "%",
    DEGREE: "^"
};

function doMath(x, znak, y) {
    switch (znak) {
        case OPERATIONS.PLUS:
            return `Plus: ${x + y}`
        case OPERATIONS.MINUS:
            return `Minus: ${x - y}`
        case OPERATIONS.MULTY:
            return `Multy: ${x * y}`
        case OPERATIONS.DIV:
            if (y == 0) throw Error('Wrong number')
            else return `Div: ${x / y}`
        case OPERATIONS.MODUL:
            return `Modul: ${x % y}`
        case OPERATIONS.DEGREE:
            return `Degree: ${x ^ y}`
        default:
            throw Error('Wrong operation')
    }
}

console.log(doMath(10, OPERATIONS.PLUS, 4))
console.log(doMath(10, OPERATIONS.MINUS, 4))
console.log(doMath(10, OPERATIONS.MULTY, 4))
console.log(doMath(10, OPERATIONS.DIV, 4))
console.log(doMath(10, OPERATIONS.MODUL, 4))
console.log(doMath(10, OPERATIONS.DEGREE, 4))



// 3. Two-dimensional array

const multiArrays = function () {
    let userArray = []
    // let userArraysLength = Number(prompt('Set length of main array'))
    let userArraysLength = 2

    if (userArraysLength <= 0) {
        throw Error("Array length can't be less than or equals to zero")
    } else {
        for (let i = 0; i < userArraysLength; i++) {
            let userArrayInside = []
            // let userArrayInsideLength = Number(prompt("Now length of element"))
            let userArrayInsideLength = 3
            for (let j = 0; j < userArrayInsideLength; j++) {
                // let elementInArray = prompt("Now element")
                let elementInArray = j
                userArrayInside.push(elementInArray);
            }
            userArray.push(userArrayInside);
        }
        console.log(userArray)
    }
}


// 4. Removing symbols

// 1 variant

function symbolRemoving(string, rule) {
    let symbol = rule.join("");
    return string.replace(new RegExp(`[${symbol}]`, "gi"), "");
}
console.log(symbolRemoving("hello world", ['l', 'd']))

// 2 variant

const symbolRemoving = (textToRemove, symbolToRemove) => {

    let result = textToRemove

    for (let i = 0; i < symbolToRemove.length; i++) {
        result = result.replaceAll(`${symbolToRemove[i]}`, "")
    }
    return result
    
}
console.log(symbolRemoving("hello world", ['l', 'd']))



// 5. Degree

let currentDegree = 1
const pow = function(number, degree) {
    if (number === 0) {
        return 0
    }
    if (degree === 1) {
        return number
    }

    if (degree > 0) {
        return number * pow(number, degree - 1)
    } else if (degree < 0) {
        return 1/(number * pow(number, -degree - 1))
    }
}

console.log(`With positive degree: ${pow(4, 5)}`)
console.log(`With negative degree: ${pow(4, -3)}`)