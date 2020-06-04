const colors = {
  blue: "#00A8A8",
  orange: "#D46111",
  black: "black",
  white: "white",
};
class Quadlet extends Shape {
  constructor(x, y, radius, range) {
    super(x, y);
    this.circleRadius = radius;
    this.range = range;
    this.vMargin = this.range;
    this.hMargin = this.range;
    this.frame = 0;
    this.endFrame = 240;
    this.hover = false;
    this.fillColor = colors.blue;
    this.hoverFrame = 0;
    this.hoverLength = 240;
  }
  handleHover = () => {
    if (this.hover) {
      this.fillColor = colors.orange;
      this.hoverFrame++;
      if (this.hoverFrame > this.hoverLength) {
        this.hoverFrame = 0;
        this.hover = false;
        this.fillColor = colors.blue;
      }
    }
  };
  setHoverTrue = () => {
    this.hover = true;
  };
  drawUI = () => {
    let ui = uxRect(
      this.x - this.hMargin - this.circleRadius / 2,
      this.y - this.vMargin - this.circleRadius / 2,
      2 * this.hMargin + this.circleRadius,
      2 * this.vMargin + this.circleRadius
    );
    ui.uxEvent("hover", this.setHoverTrue);
  };
  draw = () => {
    // console.log("draw");
    fill(this.fillColor);
    this.handleHover();
    // push();
    // rotate(PI / 4);
    //top left
    ellipse(this.x - this.hMargin, this.y - this.vMargin, this.circleRadius);
    //top right
    ellipse(this.x + this.hMargin, this.y - this.vMargin, this.circleRadius);
    //bottom left
    ellipse(this.x - this.hMargin, this.y + this.vMargin, this.circleRadius);
    //bottom right
    ellipse(this.x + this.hMargin, this.y + this.vMargin, this.circleRadius);
    // rotate(-PI / 4);
    // pop();
    fill(colors.black);
  };

  animate = () => {
    let delta = 1 / this.endFrame;

    // console.log(delta);
    if (this.frame < 0.25 * this.endFrame) {
      //horizontal increasing
      this.hMargin += 2 * this.range * delta;
    } else if (this.frame < 0.5 * this.endFrame) {
      //vertical increasing
      this.vMargin += 2 * this.range * delta;
    } else if (this.frame < 0.75 * this.endFrame) {
      //horizontal decreasing
      this.hMargin -= 2 * this.range * delta;
    } else if (this.frame < this.endFrame) {
      //vertical decreasing
      this.vMargin -= 2 * this.range * delta;
    } else if (this.frame > this.endFrame) {
      this.frame = 0;
      this.vMargin = this.range;
      this.hMargin = this.range;
    }

    this.draw();
    this.frame++;
    if (this.frame % 239 === 0) {
      // console.log("h", this.hMargin, "v", this.vMargin);
    }
  };
}

let test = new Quadlet(50, 50, 50, 25);
let quadlets = [];
let size = 0;
const proximity = () => {
  //   test.animate();
  background(0);
  noStroke();
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let ql = quadlets[i][j];
      if (ql.hover) {
        ql.draw();
      } else {
        ql.animate();
      }
    }
  }
};

const initProximity = (x, y, width, s = 8) => {
  uxNoStroke();
  uxNoFill();
  size = s;
  quadlets.length = 4;
  let spacing = width / size - 1;
  for (let i = 0; i < size; i++) {
    quadlets[i] = [];
    for (let j = 0; j < size; j++) {
      let iCoo = -size / 2 + i;
      let jCoo = -size / 2 + j;

      let currX = x + spacing + iCoo * spacing * 2;
      let currY = y + spacing + jCoo * spacing * 2;

      point(currX, currY);
      quadlets[i][j] = new Quadlet(currX, currY, spacing / 2, spacing / 3);
      quadlets[i][j].drawUI();
    }
  }
};
