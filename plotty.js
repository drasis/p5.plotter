function makePaper() {
  mycanv = createCanvas(1030, 765);
  mycanv.position(0,0);
  blendMode(HARD_LIGHT);
  noFill();
  noStroke();
}

function deepcopy(o) {
  return JSON.parse(JSON.stringify(o));
}

class Plotty {
  constructor() {
    this.matrices = [new Matrix()];
    this.matrix = this.matrices.pop();
    this.hpgl = ["PU;"];
    this.colors = ["", "black", "pink", "orange", "green", "red", "blue", "yellow", "brown"];
    this.drawingShape = false;
    this.startingVertex = null;
    this.penIsUp = true;
  }
  line(x1, y1, x2, y2) {
    var t1 = this.matrix.applyToPoint(x1, y1);
    var t2 = this.matrix.applyToPoint(x2, y2);
    line(t1.x, t1.y, t2.x, t2.y);
  }
  beginShape(n = null) {
    beginShape(n);
    
  }
  endShape(n = null) {
    if (n === CLOSE) {
      `PA ${startingVertex.x}, ${startingVertex.y};`
    }
    endShape(n);
  }
  vertex(x, y) {
    var t = this.matrix.applyToPoint(x, y);
    if (this.startingVertex === null) {
      this.startingVertex = t;
    }
    vertex(t.x, t.y);
  }
  rotateDeg(deg) {
    console.log(this.matrix)
    this.matrix.rotateDeg(deg);
  }
  translate(x, y) {
    this.matrix.translate(x, y);
  }
  // push() {
  //   this.matrices.push(this.matrix);
  //   this.matrix = deepcopy(this.matrix);
  //   // console.log(this.matrices)
  // }
  // pop() {
  //   this.matrix = this.matrices.pop();
  // }
  print() {
    console.log(this.hpgl);
    noLoop();
  }
  penUp() {
    
  }
  penDown() {
    
  }
}
