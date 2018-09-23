var x = 230;
var y = [220,240,260,280,300, 320,340,360,380,400,410,420,440,460,800];

function setup() {
  createCanvas(400, 400);
  for (var i = 0; i < 10; i = i + 1) {
  print(i);
}
}
  
function draw() {
  background(0);
  noStroke();

  // draw pipe
  rect(0, 200, x, 20);
  
  for (var i = 0; i < y.length; i = i + 1) {
    // draw drip
    ellipse(x, y[i], 10);

    // down 3 pixels each frame
    y[i] = y[i] + 3;

    // if invisible for a full “height” amount, reset
    if (y[i] > height*2) {
      y[i] = 220;
    }
  }
}
