//Create a rectangle Object

a = 4;
b = 5;

function Rectangle(a, b) {
  let rectangle = {
    length: a,
    width: b,
    perimeter: 2 * (a + b),
    area: a * b,
  };
  return rectangle;
}

console.log(Rectangle(a, b));
