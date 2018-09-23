function setup() {
  createCanvas(400, 400);
}

// track the circle to draw next frame
let x = 25;
let y = 25;
let h= 0;

function draw() {
  colorMode(HSB);
  stroke(255);
  
  // draw circle with random hue
  fill(h, 100, 100);
  ellipse(x, y, 20);
  
  // set up next circle
  x = x + 25;
  h=h+1;
  
  // if we hit the right edge, go down a line
  if (x > width-25) {
    x = 25;
    y = y + 25;
  
  }
  
  // if we hit the bottom edge, reset to top
  if (y > height-25) {
    y = 25;
    if (h >360) {
      h=0
    }
    
  }
}
