const decoder = "abcdefghijklmnopqrstuvwxyz";

function substitution(input, alphabet, encode = true) {
  // your solution code here
  let finalString = "";
  input = input.toLowerCase();
  
  //check if alphabet is not over 26 characters
  if(alphabet.length !== 26) {
    // console.log("worked1");//my check
    return false;
  } else {
    for(let i = 0; i < alphabet.length-1; i++) {
      
      //check for repeated characters
      if(alphabet.includes(alphabet[i], i+1)){
        // console.log("worked2"); //my check
        return false;
      }
    }
    for(let j = 0; j < input.length; j++) {
      
      //check for empty spaces and do not cipher it
      if (input[j] === " ") {
        finalString += input[j];
      };
      for(let k = 0; k < decoder.length; k++) {
        //ciphering normal words with encode = true
        if(encode === true) {
          if(input[j] == decoder[k]) {
            finalString += alphabet[k];
          }
          // deciphering secret codes to normal words with encode = false
        } else if(encode === false) {
          if(input[j] === alphabet[k]) {
              finalString += decoder[k];
          }
        }
      } 
    } 
  } 
  // console.log(finalString);
  return finalString;
}


module.exports = { substitution };
