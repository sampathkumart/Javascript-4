number(10);

function number() {
  for (let p = 0; p <= 15; p++) {
    // if (p % 2 === 0) console.log(p, "Even");
    // else console.log(p, "Odd");
    //ternary operator
    const display = p % 2 === 0 ? "Even" : "Odd";
    console.log(p, display);
  }
}
