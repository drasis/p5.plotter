var plotty = new Plotty();

function setup() {
  makePaper();
}

function draw() {
  background("white");
  noFill();
  stroke("black");
  strokeWeight(1);
  plotty.translate(width/2, height/2.3);
  for (var i = 0; i < 60; i++) {
    plotty.push();
    console.log(plotty.matrix);
    plotty.rotateDeg(6);
    plotty.translate(width/300,0);
    plotty.beginShape();
    plotty.vertex(0, 0);
    plotty.vertex(0, width/4.5);
    plotty.vertex(width/7, width/4.5);
    plotty.vertex(width/7, 0);
    plotty.endShape(CLOSE);
    // plotty.pop();
  }
  plotty.print();
}

