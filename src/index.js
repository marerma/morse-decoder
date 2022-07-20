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
  MORSE_TABLE['**********'] = ' '
 
  let decodedWord
  
  const arrayDigit = []
  let aArray = Array.from(expr)
  
  while (aArray.length != 0) {
    arrayDigit.push(aArray.splice(0, 10))
  }
  
  let letter = []
  arrayDigit.forEach(function(item) {
    letter.push(item.join(''))})
  
  let dotsWord = []
    for (let j = 0; j < letter.length; j++) {
     let str = letter[j]
     str.includes('10')? str = str.replace(/10/g, '.') : str
     str.includes('11')? str = str.replace(/11/g, '-') : str
     str.includes('0')? str = str.replace(/0/g, '') : str
     dotsWord.push(str) 
  }
  
  let result = []
  dotsWord.map((item) => {
    for (let symbol in MORSE_TABLE) {
      s = MORSE_TABLE[symbol] 
      if (item === symbol) {
       result.push(s)
      
    } 
  }
  })
  
decodedWord = result.join('')
return decodedWord
}

module.exports = {
    decode
}
