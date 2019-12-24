const sports = {
  name: "dhoni",
  game: "cricket",
  runs: 10000,
  age: 35,
  fours: 350
};

showProperties(sports);

function showProperties(pro) {
  for (var key in pro)
    if (typeof pro[key] === "string") console.log(key, pro[key]);
}
