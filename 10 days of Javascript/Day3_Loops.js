// Print vowels first and then consonant

s = "javascriptloops";

function vowelsAndConsonants(s) {
  let consonant = "";
  for (let i = 0; i < s.length; i++) {
    if ("aeiou".includes(s[i])) {
      console.log(s[i]);
    } else {
      consonant = consonant + s[i] + "\n";
    }
  }
  console.log(consonant);
}

console.log(vowelsAndConsonants(s));
