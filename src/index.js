const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arrWords = []
    let count = 0;
    let countNull = 0;
    let outputArr = []
    let output = ''

    for (let i = 0; i < expr.length; i++) {
        if (!(Array.isArray(arrWords[count]))) arrWords[count] = []
        
        if (countNull === 0 && expr[i] === '1') countNull = 1;
        if (countNull === 1) arrWords[count].push(expr[i])
        if (expr[i] === '*') arrWords[count] = [' ', ' ']
        
        if (((i + 1) % 10 === 0) && (i !== 0)) {
            count++; 
            countNull = 0;
        }  
    }

    // 10 stands for dot(.), 11 stands for dash(-)

    for (let i = 0; i < arrWords.length; i++) {
        for (let j = 0; j < arrWords[i].length; j++) {
            if (!(Array.isArray(outputArr[i]))) outputArr[i] = []
                if (arrWords[i][j] + arrWords[i][j+1] === '11') outputArr[i].push('-')  
                if (arrWords[i][j] + arrWords[i][j+1] === '10') outputArr[i].push('.') 
                if (arrWords[i][j] + arrWords[i][j+1] === '  ') outputArr[i].push(' ') 
            j++
        }
    }


    for (let i = 0; i < outputArr.length; i++) {
        output += outputArr[i] == ' ' ? ' ' : MORSE_TABLE[outputArr[i].reduce((sum, current) => sum + current, '')];
        console.log(MORSE_TABLE['.'])
    }

    return output;   
}

module.exports = {
    decode
}