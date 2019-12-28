const runs = [46, 42, 55, 456];
console.log(runs);

//End
runs.push(100, 45);
console.log(runs);

//Beginning
runs.unshift(150, 48);
console.log(runs);

//Middle
runs.splice(2, 0, 12, "wide");
console.log(runs);
