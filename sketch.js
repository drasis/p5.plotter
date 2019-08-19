var plotty = new Plotty();

function setup() {
  makePaper();
}

function draw() {
  plotty.grabPen(4);
  plotty.goToPoint(20, 20);
  plotty.penDown();
  plotty.ellipse(50, 50, 100, 100);
  plotty.line(width/2, height/2, width/2 + 200, height/2 + 200);
  plotty.print();
}

