var plotty = new Plotty();

function setup() {
  makePaper();
}

function draw() {
  plotty.grabPen(4);
  plotty.translate(width/2, height/2.3);
  plotty.goToPoint(0, 0);
  plotty.penDown();
  for (var i = 0; i < 60; i++) {
    plotty.rotateDeg(6);
    plotty.translate(width/300,0);
    plotty.beginShape();
    plotty.vertex(0, 0);
    plotty.vertex(0, width/4.5);
    plotty.vertex(width/7, width/4.5);
    plotty.vertex(width/7, 0);
    plotty.endShape(CLOSE);
  }
  plotty.print();
}

