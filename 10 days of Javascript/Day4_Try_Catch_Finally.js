// Try,Catch and Finally Method

s = Number(1234);
let message = "s.split is not a function";

function reverseString(s) {
  try {
    var s = s.split("").reverse().join("");
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log(s);
  }
}

reverseString(s);
