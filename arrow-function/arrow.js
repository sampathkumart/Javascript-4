//Arrow function
const hello = [{ name: "john" }, { name: "ben" }, { name: "stokes" }];

const hi = hello.findIndex(good => good.name === "john");
console.log(hi);
