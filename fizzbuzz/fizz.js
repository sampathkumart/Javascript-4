var hi = fizzbuzz(79);
console.log(hi);

function fizzbuzz(hello) {
  if (typeof hello !== "number") return "NaN";
  if (hello % 4 === 0 && hello % 7 === 0) return "fizzbuzz";
  if (hello % 4 === 0) return "fizz";
  if (hello % 7 === 0) return "buzz";
  return hello;
}
