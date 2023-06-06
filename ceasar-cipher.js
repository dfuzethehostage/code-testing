function ceasarCipher(str, shiftFactor) {
  let alphabet =
    "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return str
    .split("")
    .map((letter) => {
      return alphabet[alphabet.search(letter) + shiftFactor];
    })
    .join("");
}

module.exports = ceasarCipher;
