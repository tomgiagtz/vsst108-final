class GrowingCircle {
  constructor(black) {
    this.frame = 0;
    this.black = black;
  }

  getFrame = () => this.frame;

  draw = () => {
    this.black ? fill(0) : fill(255);
    ellipse(0, 0, this.frame);
    this.frame++;
  };
}
let totalFrames = 800;
let frm1 = 0;
let circs = [];
const figureGround = () => {
  //   let localFrame1 = frameCount % fg.totalFrames;
  //   let localFrame2 = (frameCount - fg.BUFFER) % fg.totalFrames;

  translate(width / 2, height / 2);
  if (frameCount % totalFrames === 1) {
    circs.push(new GrowingCircle(false));
  }

  if (frameCount % totalFrames === totalFrames / 2) {
    circs.push(new GrowingCircle(true));
  }

  circs.forEach(c => c.draw());
  if (circs.length > 3) {
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

// const drawCircle = (fillBlack = false) => {
//   if (fillBlack) {
//     fill(0);
//   } else {
//     fill(255);
//   }
//   ellipse(0, 0, frm1);
//   frm1++;

//   //   if (localFrame === fg.BUFFER || localFrame - fg.totalFrames > 0) {
//   //     if (fg.fillBlack) {
//   //       fill(255);
//   //     } else {
//   //       fill(0);
//   //     }
//   //
//   //   }
// };
