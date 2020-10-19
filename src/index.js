const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {

    let count = 0;
    let value = '';
    let buff = '';
    let result = [];
    for (let symbol of expr) {
        value += symbol;
        count++;
        if (count === 10) {
            if(value === '**********') {
                result.push(' ');
            } else {
                buff = value.replace(new RegExp('10', 'g'), '.').replace(new RegExp('11', 'g'), '-').replace(new RegExp('0', 'g'), '').replace('**********', ' ');
                result.push(MORSE_TABLE[buff]);
            }
            count = 0;
            value = '';
        }
    }
    return result.join('');
}

module.exports = {
    decode
}
