const STEP = Math.PI / 16;

class Shape {
  constructor(x, y, scale = 1) {
    this.x = x;
    this.y = y;
    this.scale = scale;

    this.drawing = true;
    this.angle = 0;
  }
}

// draw() {
// 	// debugger
// 	stroke(255);
// 	let started = this.angle !== 0;
// 	let finished = this.angle >= PI

// 	if (started) {

// 		if (this.forward && this.positive) {
// 			arc(this.x, this.y, this.w, this.h, -PI,  -PI + this.angle);
// 		} else if (this.forward && !this.positive) {
// 			arc(this.x, this.y, this.w, this.h, -PI - this.angle, -PI);
// 		} else if (!this.forward && this.positive) {
// 			arc(this.x, this.y, this.w, this.h, -this.angle, 0);
// 		} else if (!this.forward && !this.positive) {
// 			arc(this.x, this.y, this.w, this.h,  0, this.angle);
// 		}
// 	} else {
// 		console.log(this.forward, this.positive)
// 		this.angle += STEP;
// 		return true;
// 	}
// 	// if backward, start at 0
// 	// if (this.angle !== -PI && this.angle !== 0) {
// 	// 	if (!this.positive) {
// 	// 		//backward and negative
// 	// 		// arc(this.x, this.y, this.w, this.h, 0, this.angle);
// 	// 	} else {
// 	// 		//forward and positive
// 	// 		// arc(this.x, this.y, this.w, this.h, -PI, this.angle);
// 	// 	}
// 	// } else {
// 	// 	this.angle += STEP;
// 	// 	return true;
// 	// }
// 	if (!finished) {
// 		this.angle += STEP;
// 		return true;
// 	} else {
// 		console.log("done !");
// 		this.drawing = false;
// 		return false;
// 	}
// }
