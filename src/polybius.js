const alphabet = [
  ["A", "B", "C", "D", "E"],
  ["F", "G", "H", "I/J", "K"],
  ["L", "M", "N", "O", "P"],
  ["Q", "R", "S", "T", "U"],
  ["V", "W", "X", "Y", "Z"]
];

// console.log(alphabet[1][3]);
// console.log(alphabet[3].indexOf("T"))

function polybiusEncode(input) {
  let result = "";
  for(let inputChar = 0; inputChar < input.length; inputChar++) {
    if(input[inputChar].includes(" ")){
      result += input[inputChar];
    };
    for(let alphArr = 0; alphArr < alphabet.length; alphArr++) {
      let match = alphabet[alphArr];
      for(let alphLett = 0; alphLett < match.length; alphLett++){
        if(match[alphLett].toLowerCase().includes(input[inputChar].toLowerCase())) {
          result += alphLett + 1;
          result += alphArr + 1;
          // console.log(alphLett+1, alphArr+1)
        } 
      }
    }
  }
  return result;
}
  
function polybiusDecode(input) {
  let result = "";
  for(let i = 0; i < input.length -1; i+=2) {
    if(input[i].includes(" ")){
      result += input[i];
      i--;
    } else {
      let newChar = alphabet[(input[i+1]-1)][(input[i]-1)];
      if(newChar === "I/J") { 
        newChar = "(" + newChar + ")";
        result += newChar
      } else {
        result += newChar;
      }
      // console.log(input[1], input[0])
      // console.log(alphabet[(input[1]-1)][(input[0]-1)])
    }
  }
  return result.toLowerCase();
}
  
function polybius(input, encode = true) { //parent function
    
  if(encode === true){
    return polybiusEncode(input);
  } else {
    let counter = 0;
    for(let i = 0; i < input.length; i++) {
      if(input[i] === " "){
        counter += 1;
      };
    }
    if((input.length - counter) % 2 === 1) {
      return false;
    }
    return polybiusDecode(input);
  };
}

module.exports = { polybius };
