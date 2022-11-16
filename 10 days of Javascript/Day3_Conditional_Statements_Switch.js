let s = "adfgt";

function getLetter(s) {
  let letter;
  // Write your code here
  let alpha1 = ["a", "e", "i", "o", "u"];
  let alpha2 = ["b", "c", "d", "f", "g"];
  let alpha3 = ["h", "k", "j", "l", "m"];
  let alpha4 = ["n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  switch (true) {
    case alpha1.includes(s.charAt(0)):
      letter = "A";
      break;
    case alpha2.includes(s.charAt(0)):
      letter = "B";
      break;
    case alpha3.includes(s.charAt(0)):
      letter = "C";
      break;
    case alpha4.includes(s.charAt(0)):
      letter = "D";
      break;
  }
  return letter;
}

console.log(getLetter(s));
