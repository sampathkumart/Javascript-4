function hi(name, age) {
  return {
    name,
    age,
    hello() {
      console.log("Good night");
    }
  };
}
const hello = hi("kohli", 32);
console.log(hello);
