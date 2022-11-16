// Throw method
//The throw statement allows you to create a custom error.
//The throw statement throws (generates) an error.
//The technical term for this is:
//The throw statement throws an exception.

a = [3, -1, 0, 3];

function isPositive(a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] > 0) {
      console.log("Yes");
    }
    if (a[i] === 0) throw "Zero Error";
    if (a[i] < 0) throw "Negative Error";
  }
}

console.log(isPositive(a));
