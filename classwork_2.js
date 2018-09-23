function setup() {
  createCanvas(400, 400);
  background(0, 20, 80);
}

var fromX;
var fromY;
var toX;
var toY;
var step = 3.5;

function draw() {
  // draw background that fades stars slowly
  background(0, 20, 80, 1);
  
  // draw stars
  if (random() > 0.20) {
    stroke(random(80),180,90);
    point(random(width), random(height));
  }
  
  // create shooting stars
  if (random() > 0.5 && step >= 1.0) {
    fromX = random(width);
    fromY = random(height/2);
    toX = random(fromX+10, width);
    toY = random(fromY+10, height/2);
    step = 0;
  }
  
  // draw shooting stars
  if (step < 2.5) {
    // fade background
    let nextStep = step + 0.02;
    strokeWeight(4);
    stroke(10, 20, 80, 30);
    line(fromX, fromY, toX, toY);
    strokeWeight(1);
    // draw star
    if (step < 1) {
      stroke(255, (1-step) * 200);
      line(lerp(fromX, toX, step),     lerp(fromY, toY, step),
           lerp(fromX, toX, nextStep), lerp(fromY, toY, nextStep));
    }
    step = nextStep;
  }
    
  // draw ground
  noStroke();
  
  fill(0, 10, 20);
  rect(10,200,17,100);
   
  rect(60, 170, 40, 300); 
  
  rect(110, 230, 10, 300);
  ellipse (115, 219, 20, 30);
  
  rect(140,150,30,300);
  
  rect(230, 220, 10, 300);
  ellipse(235,206,25,30); 
  
  noStroke();
  fill(0, 10, 20);
  rect(0, height*0.6, width, height);
  
  // draw lake
  noStroke();
  fill(0, 20, 60);
  ellipse(0, height, width*2.5, height*0.75);
}
