//Hoisting

//function declaration
bag();

function bag() {
  console.log("pencil");
}

//function expression
out();

const out = function() {
  console.log("bowled");
};
out();
