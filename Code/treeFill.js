
let sketch = function(p) {
  p.setup = function() {
    p.createCanvas(400, 400);
    p.background(500);
  }

  p.draw = function() {
    p.strokeWeight(12);
    p.stroke('green'); // Change the color
    p.point(200, 80);
    p.line(200, 80,130,150);//top point
    p.line(200, 80,270,150);//top point
    p.line(130,150,160,150);
    p.line(270,150,240,150);
    p.line(160,150,120,200);//middle
    p.line(240,150,280,200);//middle
    p.line(280,200,240,200);
    p.line(120,200,160,200);
    p.line(160,200,120,250);//bottom tree
    p.line(240,200,280,250);//bottom tree
    p.line(280,250,120,250);
    p.strokeWeight(0);
    
    p.fill(165,42,42); //fill brown
    p.rect(175,256,50,40);
    p.fill(220,20,60); //crimson
    p.circle(130,150, 20);
    p.fill(123,104,238); //purple
    p.circle(270,150, 20);
    p.fill(135,206,250); //blue
    p.circle(285,250, 20);
    p.fill(255,182,193); //pink
    p.circle(280,200, 20);
    p.fill(255,165,0); //orange
    p.circle(120,200, 20);
    p.fill(255,255,51);//yellow
    p.circle(120,250, 20);

    p.mousePressed();
  }
  p.mousePressed = function() {
    let c = p.mouseX;
    let y = p.mouseY;
    p.fill(c,y,113); //christmas tree green
    p.circle(p.mouseX, p.mouseY, 30);
  }
};
new p5(sketch, window.document.getElementById('canv'));
