//call stack
//setTime out
console.log("1");
setTimeout(() => {
  console.log("2");
}, 1000);
setTimeout(() => {
  console.log("4");
}, 200);
console.log(3);

//call stack

//web api

//callback queue

//event loop
