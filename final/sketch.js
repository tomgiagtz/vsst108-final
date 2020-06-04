let maxDist = 0;
function setup() {
  createCanvas(400, 400);
  background(0);
  maxDist = sqrt(width * width + height * height) / 2;
  // initProximity(width / 2, height / 2, width / 2);

  angleMode(RADIANS);
}

function draw() {
  figureGround();
  // closure(width / 2, height / 2, maxDist);
  // proximity();
}
