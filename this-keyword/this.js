var hello = {
  name: "sachin",
  age: 40,
  tons: [50, 49, 12],
  runs() {
    this.tons.forEach(function(tons) {
      console.log(this.name, tons);
    }, this);
  }
};
hello.runs();

// hello.singles = function() {
//   console.log(this);
// };

// hello.fours = function() {
//   console.log(this);
// };

// function sixers(title) {
//   this.title = title;
//   console.log(this);
// }

// var hi = new sixers("cricket");
