var details = {
  name: "sachin",
  age: 40,
  isMarried: true,
  players: ["kohli", "dhoni", "aswin"]
};

delete details.isMarried;

// Dot notation
details.age = 45;
console.log(details);

// Bracket Notation
let change = "age";
details[change] = 46;

console.log(details.age);
