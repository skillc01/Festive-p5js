// Constants
const yaxis = 1;
const xaxis = 2;
let b1, b2, c1, c2;
let snowflakes = [];
let canv;
let lights = [];

class snow {
  constructor() {
    this.x = Math.floor(Math.random() * 1500)
    this.y = -10;
    this.size = Math.random();
    this.xMove = Math.random() - 0.5;
    this.speed = (Math.random() * 0.5) + 1;
  }
  
  snowDraw() {
    this.y += this.speed;
    this.x += this.xMove;
    
    fill(256, 256, 256, 55 + this.size*200)
    stroke(256, 256, 256, 55 + this.size*200)
  
    circle(this.x,this.y,4+(this.size*8))
    if(this.y > window.innerHeight + 10) {
      return true;
    }
    return false;
  }
}

class lightsClass {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    
    lightDraw() {
      
    }
  }

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  b1 = color(91, 41, 110); //background top colour
  b2 = color(237, 184, 242); //background bottom colour
  canvas.id = "bgCanvas";
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  if (axis === yaxis) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === xaxis) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}

function flicker(num) {
  let opacity;
  let currentdate = new Date(); 
  if (currentdate.getSeconds() == num) {
    opacity = 100;
  }
  else{
    opacity = 256;
  }
  return opacity;
}

function drawLights() {
  for (let i = 0; i < window.innerWidth; i++) {
    if ((i % 30) == 0) {
      let ifReturn = ((i/30)%5) == 0 ? [color(0, 256, 0), 15, 0]
        : ((i/30)%5) == 1 ? [color(256, 0, 0), 25, 1]
        : ((i/30)%5) == 2 ? [color(51, 256, 256), 30, 2]
        : ((i/30)%5) == 3 ? [color(256, 256, 0), 25, 3]
        : [color(255, 165, 0), 15, 4];

      let opacity = flicker(ifReturn[2]);
      fill(ifReturn[0], opacity)
      stroke(ifReturn[0], opacity)
      ellipse(i, ifReturn[1], 10, 10);
      //circle(i, ifReturn[1], 10);
    }
  }
}

function draw() {
  setGradient(0, 0, window.innerWidth, window.innerHeight, b1, b2, yaxis);
  
  drawLights();
  
  if(Math.floor(Math.random()*20) == 10) {
    snowflakes.push(new snow());
  }

  for(let i = 0; i < snowflakes.length; i++) {
    let bin = snowflakes[i].snowDraw();
    if (bin) {
      snowflakes.splice(i, 1);
    }
  }
}
  