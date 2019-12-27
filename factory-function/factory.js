//factory function
function hi(name, age) {
  return {
    name,
    age,
    haha() {
      console.log("Good night");
    }
  };
}
const hello = hi("kohli", 32);
console.log(hello);

const good = hi("dhoni", 38);
console.log(good);
