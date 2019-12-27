function Box(gun, bullet) {
  this.gun = gun;
  this.bullet = bullet;
  this.jungle = function() {
    console.log("jungle");
  };
}

Box.call({}, 1);
Box.apply({});

const another = new Box(1);
