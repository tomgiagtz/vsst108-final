class Triangle extends Shape {
  constructor(x, y, radius, height = radius, color) {
    super(x, y);
    this.radius = radius;
    this.frame = 0;
    this.height = height;
    this.color = color;
  }

  draw() {
    fill(this.color);
    let point1 = [this.x + -0.866 * this.radius, this.y + -0.5 * this.radius];
    let point2 = [this.x + 0.866 * this.radius, this.y + -0.5 * this.radius];
    let point3 = [this.x, this.y + this.height];
    triangle(...point1, ...point2, ...point3);
  }

  rotateToOrigin() {
    let ang = calcAngleToOrigin([this.x, this.y]);
    // console.log(ang);
    this.rotate(ang);
  }

  rotate(angle) {
    let point1 = [this.x + -0.866 * this.radius, this.y + -0.5 * this.radius];
    let point2 = [this.x + 0.866 * this.radius, this.y + -0.5 * this.radius];
    let point3 = [this.x, this.y + this.height];

    // point1 = this.rotatePoint(point1, PI / 2);
    // point2 = this.rotatePoint(point2, PI / 2);
    // point3 = this.rotatePoint(point3, PI / 2);
    rotate(angle);

    ellipse(...point3, 4);
    triangle(...point1, ...point2, ...point3);

    rotate(-angle);
  }
}
let t = [new Triangle(0, 0, 1, 50), new Triangle(0, 0, 1, 50), new Triangle(0, 0, 1, 50)];
const closure = (centerX, centerY, maxDist) => {
  noStroke();
  translate(centerX, centerY);
  triCircle(100, 16, centerX, centerY);
  animatedTriCircle({ maxDist });
  //   triangle(centerX - 10, centerY - 10, centerX, centerY + 10, centerX + 10, centerY - 10);
  //   t.draw();
  //   t.forEach(tri => tri.rotate());
};

const animatedTriCircle = ({ radius = 150, minHeight = -25, width = 40, maxDist = 100 }) => {
  let numFrames = 800;
  let currFrame = frameCount % numFrames;
  getHeight();
  background(0);
  push();
  let angle = (TWO_PI * currFrame) / numFrames;
  rotate(angle);
  let height = getHeight(angle, minHeight, radius, maxDist);
  let stdWidth = height < width ? height : width;
  triCircle(radius, 16, stdWidth, height);
  pop();
};

const getHeight = (angle, min, max, maxDist) => {
  let mouse = { x: mouseX, y: mouseY };
  if (mouse.x > 0 && mouse.x < width && mouse.y > 0 && mouse.y < height) {
    let distance = sqrt((200 - mouse.x) * (200 - mouse.x) + (200 - mouse.y) * (200 - mouse.y));

    let res = maxDist - max / 2 - 10 - distance;
    if (res < min) res = min;
    if (res > max) res = max;
    return res;
  }
  let dist = (max - min) / 2;
  let mean = min + dist;
  return cos(angle) * dist + mean;
};
const triColors = ["#71898E", "#778794", "#75948D"];

const triCircle = (radius = 100, numTris = 3, triWidth, triHeight, maxDist) => {
  //   fill(0);
  let tris = [];
  for (let i = 0; i < numTris; i++) {
    tris[i] = new Triangle(0, -radius, triWidth, triHeight, triColors[i % triColors.length]);
  }
  tris.forEach((t, i) => {
    // fill((255 / numTris) * i);
    fill(255);
    push();
    rotate(TWO_PI * (i / numTris));
    t.draw();
    pop();
  });
};

// function setup() {
//   createCanvas(400, 400);
//   background(0);
// }

// function draw() {
//   closure(width / 2, height / 2);
// }
