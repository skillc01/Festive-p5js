
let sketch2 = function(p) {
    p.setup = function() {
      p.createCanvas(400, 400);
      p.background(500);
    }
  
     p.draw = function() {
        p.fill(255,255,255); //white
        p.circle(200, 320, 120);
        p.circle(200, 202, 120);
        p.circle(200, 94, 100);
        p.point(220, 80);
        p.point(180, 80);
        p.stroke('black'); // Change the color
        p.strokeWeight(10);
        p.line(110, 130, 150, 170);
        p.line(290, 130, 250, 170);
        p.circle(200, 190, 12);//button 1
        p.circle(200, 220, 12);//button 2
        p.circle(220, 111,1);
        p.circle(180, 111,1);
        p.circle(201, 125,1);
        p.circle(189, 120,1);
        p.circle(212, 120,1);
  
       //p.mousePressed();
     }
    p.mousePressed = function() {
      let c = p.mouseX;
      let y = p.mouseY;
      p.strokeWeight(8);
      p.fill(255,255,255); //christmas tree green
      p.circle(p.mouseX, p.mouseY, 30);
    }
  };
  new p5(sketch2, window.document.getElementById('canv2'));
  