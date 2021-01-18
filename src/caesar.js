function caesar(input, shift, encode = true) {
  if (!shift || shift === 0 || shift < -25 || shift > 25) {
    return false;
  };
  let result = "";
  if (encode === false) {
    shift = shift * (-1);
  };
  input = input.toLowerCase();
    
  for (let i = 0; i < input.length; i++) {
    let char = input.charCodeAt(i);
    if (char >= 97 && char <= 122) {
      let newChar = char + shift
      if (newChar > 122) {
        char = 96 + ((char + shift) - 122);
        result += String.fromCharCode(char);
      } else {
        if (newChar < 97) {
          char = 122 - (96 - (char + shift));
          result += String.fromCharCode(char);
        } else {
          result += String.fromCharCode(newChar);
        }};
    } else {
      result += input[i];
    };
  };
  return result;
};

module.exports = { caesar };
