function setup() {
  createCanvas(640, 480);
}

// position of the ball
var y = 0;
var x = 0;
// how far the ball moves every time
var speed = 2;

 function draw() {
    background(127, 204, 255);
    
    fill(66, 66, 66);
    ellipse(x, y, 50, 50);

    // move the ball
    y = y + speed;
    x = x + speed;
    
    if (y > 400) {
        speed =-2;
    }
    if (y < 0) {
        speed = 3;
    }
    if (x < 0) {
        speed = 3;
    }
    if (x > 400) {
        speed = -2;
    }
};

