function setup() {
  createCanvas(1200, 1200);
  background(100);
  initProximity(width / 2, height / 2, width / 2);
  angleMode(RADIANS);
}

function draw() {
  //   figureGround();
  // closure(width / 2, height / 2);
  proximity();
}
