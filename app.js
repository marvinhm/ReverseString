function reverseString(str) {
  let reversedString = "";
  if (typeof str === "string") {
      let newString = [];
      str.split('').forEach(element => {
        newString.unshift(element);
        reversedString = newString.join('');
      });
  }


  return reversedString;
}

module.exports = reverseString;