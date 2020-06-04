const circColors = [
  "#B7005D",
  "#00965D",
  "#DFCF00",
  "#E70779",
  "#06D386",
  "#FFED07",
  "#005937",
  "#6D0037",
  "#B3A600",
];
class GrowingCircle {
  constructor(black) {
    this.frame = 0;
    this.black = black;
    this.color = circColors[floor(random() * circColors.length)];
  }

  getFrame = () => this.frame;

  draw = () => {
    if (this.black) {
      fill(0);
    } else {
      fill(this.color);
    }
    ellipse(0, 0, this.frame);
    if (grow) {
      this.frame++;
    } else {
      this.frame--;
    }
  };
}
let totalFrames = 400;
let frm1 = 0;
let circs = [];
let grow = true;
mouseClicked = () => {
  grow = !grow;
};
const figureGround = () => {
  //   let localFrame1 = frameCount % fg.totalFrames;
  //   let localFrame2 = (frameCount - fg.BUFFER) % fg.totalFrames;
  translate(width / 2, height / 2);
  if (frameCount % totalFrames === 1) {
    circs.push(new GrowingCircle(false));
  }

  if (frameCount % totalFrames === totalFrames / 4) {
    circs.push(new GrowingCircle(true));
  }

  if (frameCount % totalFrames === totalFrames / 2) {
    circs.push(new GrowingCircle(false));
  }
  if (frameCount % totalFrames === (3 * totalFrames) / 4) {
    circs.push(new GrowingCircle(true));
  }

  circs.forEach((c) => c.draw());
  if (circs.length > 20) {
    circs.shift();
  }
  //   //   drawCircle();
  //   if (localFrame2 === 0) {
  //     // drawCircle(true);
  //     //   fg.fillBlack = !fg.fillBlack;
  //   }

  //   circ.draw();
  //   localFrame2 > 0 ? drawCircle(localFrame2, fg.fillBlack) : null;
  //   drawCircle(localFrame1, !fg.fillBlack);

  //big circle

  //little circle
};
