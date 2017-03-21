function setup() {
  createCanvas(640, 480);
}

function draw() {
// The ground
background(84, 229, 255);
fill(99, 255, 104);
rect(0, 300, 400, 100);  

// The sun
fill(247, 255, 10);
ellipse(80, 64, 100, 100);  

// The snowman
fill(255, 255, 255);
ellipse(200, 300, 150, 150);
ellipse(200, 200, 100, 100);
ellipse(200, 120, 75, 75);
line(151,193,65,122);
line(249,204,332,283);
}
