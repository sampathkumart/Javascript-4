//finding elements (reference types)

const hello = [{ name: "john" }, { name: "ben" }, { name: "stokes" }];

const hi = hello.findIndex(function(good) {
  return good.name === "john";
  //return good.name === "kohli";
});
console.log(hi);
