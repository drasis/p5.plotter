var plotty = new Plotty();

function setup() {
  makePaper();
}

function draw() {
  plotty.grabPen(4);
  // plotty.translate(50, 50);
  plotty.goToPoint(20, 20);
  plotty.penDown();
  plotty.ellipse(50, 50, 100, 100);
  // for (var i = 0; i < 60; i++) {
    // plotty.line(0, 0, 5, 5);
    // plotty.translate(5,5);
    // plotty.rotateDeg(4);
    // plotty.rotateDeg(6);
    // plotty.translate(width/300,0);
    // plotty.beginShape();
    // plotty.vertex(0, 0);
    // plotty.vertex(0, width/4.5);
    // plotty.vertex(width/7, width/4.5);
    // plotty.vertex(width/7, 0);
    // plotty.endShape();
  // }
  plotty.print();
}

