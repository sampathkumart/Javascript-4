//cloning object
const hello = {
  name: "hi",
  age: 46,
  date() {
    console.log("date");
  }
};

const hi = {};
for (let key in hello) hi[key] = hello[key];
console.log(hi);

const hey = Object.assign({}, hello);
console.log(hey);

const ha = { ...hello };
console.log(ha);
