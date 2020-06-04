const calcAngleToOrigin = point => {
  return atan(point[1] / point[0]);
};

class Triangle extends Shape {
  constructor(x, y, radius, height = radius) {
    super(x, y);
    this.radius = radius;
    this.frame = 0;
    this.height = height;
  }

  draw() {
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
const closure = (centerX, centerY) => {
  noStroke();
  translate(centerX, centerY);
  triCircle(100, 16, centerX, centerY);
  animatedTriCircle();
  //   triangle(centerX - 10, centerY - 10, centerX, centerY + 10, centerX + 10, centerY - 10);
  //   t.draw();
  //   t.forEach(tri => tri.rotate());
};

const animatedTriCircle = (radius = 150, minHeight = -25, width = 40) => {
  let numFrames = 800;
  let currFrame = frameCount % numFrames;
  getHeight();
  background(0);
  push();
  let angle = (TWO_PI * currFrame) / numFrames;
  rotate(angle);
  let height = getHeight(angle, minHeight, radius);
  let stdWidth = height < width ? height : width;
  triCircle(radius, 16, stdWidth, height);
  pop();
};

const getHeight = (angle, min, max) => {
  let dist = (max - min) / 2;
  let mean = min + dist;

  return cos(angle) * dist + mean;
};

const triCircle = (radius = 100, numTris = 3, triWidth, triHeight) => {
  //   fill(0);
  let tris = [];
  for (let i = 0; i < numTris; i++) {
    tris[i] = new Triangle(0, -radius, triWidth, triHeight);
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

//assumes circle at 0,0
const calcPointsAroundCircle = (radius, numPoints) => {
  let points = [];
  for (let i = 0; i < numPoints; i++) {
    points[i] = [];
    points[i][0] = radius * cos((i * 2 * PI) / numPoints - PI / 2);
    points[i][1] = radius * sin((i * PI * 2) / numPoints - PI / 2);
  }
  return points;
};
