function makePaper() {
  mycanv = createCanvas(1030, 765);
  mycanv.position(0,0);
  background("white");
  blendMode(MULTIPLY);
  noFill();
  noStroke();
}

class Plotty {
  constructor() {
    this.matrices = [new Matrix()];
    this.matrix = this.matrices.pop();
    this.hpgl = [];
    this.colors = ["", "black", "pink", "orange", "green", "red", "blue", "yellow", "brown"];
    this.currentColor = 0;
    this.startingVertex = null;
    this.penIsUp = true;
  }

  line(x1, y1, x2, y2) { // need to test
    this.beginShape();
    this.vertex(x1, y1);
    this.vertex(x2, y2);
    this.endShape();
  }

  beginShape(n = null) {
    beginShape(n);
  }

  endShape(n = null) {
    if (n === CLOSE) {
      this.hpgl.push(`PA ${int(this.startingVertex.x) * 10}, ${int(this.startingVertex.y) * 10};`)
    }
    endShape(n);
  }

  vertex(x, y) {
    var t = this.matrix.applyToPoint(x, y);
    if (this.startingVertex === null) {
      this.startingVertex = t;
    }
    this.hpgl.push(`PA ${int(t.x) * 10}, ${int(t.y) * 10};`)
    vertex(t.x, t.y);
  }

  rotateDeg(deg) {
    this.matrix.rotateDeg(deg);
  }

  translate(x, y) {
    this.matrix.translate(x, y);
  }

  print() {
    this.hpgl.push("PU;");
    this.hpgl.push("");
    console.log(this.hpgl.join("\n"));
    noLoop();
  }

  penUp() {
    noStroke();
    this.hpgl.push("PU;");
    this.penIsUp = true;
  }

  penDown() {
    if (this.currentColor === 0) {
      throw "cannot draw if not holding a pen.";
    }
    this.hpgl.push("PD;");
    stroke(this.colors[this.currentColor]);
    strokeWeight(2);
    this.penIsUp = false;
  }

  grabPen(n) {
    this.hpgl.push(`SP${n};`)
    this.penUp();
    this.currentColor = n;
  }

  setPenColor(n, c) {
    this.colors[n] = c;
  }

  goToPoint(x, y) {
    if (!this.penIsUp) {
      this.penUp();
    }
    var t = this.matrix.applyToPoint(x, y);
    this.hpgl.push(`PA ${int(t.x) * 10}, ${int(t.y) * 10};`)
  }

  ellipse(x, y, w, h) {
    push();
    this.beginShape();
    angleMode(DEGREES);
    for (var i = 0; i < 360; i++) {
      this.vertex(x + (w/2 * sin(i)), y + (h/2 * cos(i)));
    }
    this.endShape(CLOSE);
    pop();
  }

  triangle(x1, y1, x2, y2, x3, y3) {
    this.beginShape();
    this.vertex(x1, y1);
    this.vertex(x2, y2);
    this.vertex(x3, y3);
    this.endShape(CLOSE);
  }

  quad(x1, y1, x2, y2, x3, y3, x4, y4) {
    this.beginShape();
    this.vertex(x1, y1);
    this.vertex(x2, y2);
    this.vertex(x3, y3);
    this.vertex(x4, y4);
    this.endShape(CLOSE);
  }
  
  // push() {
  //   this.matrices.push(this.matrix);
  //   this.matrix = deepcopy(this.matrix);
  //   // console.log(this.matrices)
  // }
  // pop() {
  //   this.matrix = this.matrices.pop();
  // }
}