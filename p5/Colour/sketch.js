/*Will
Colour
25-4-2017*/
  var y = 0;
var x = 0;
  var bugSize = 20;
var colour = 0;
  var colour2 = 0;
var colour3 = 0;

  function setup() {
  createCanvas(400, 400);
}

function draw() {
   background(194, 194, 194);
 fill(colour, colour2, colour3);
    rect(100,100,200,200,29);
  textSize(23);
    text("Make Your Favorite Colour",62,66);
}

function keyPressed() {
   if (keyCode == RIGHT_ARROW) {
		colour = colour + 5;
	}
	else if (keyCode == LEFT_ARROW) {
		colour2 = colour2 + 5;
	}
	else if (keyCode == UP_ARROW) {
		colour3 = colour3 + 5;
	}
	else if (keyCode == DOWN_ARROW) {
		 colour = 0;
      colour2 = 0;
      colour3 = 0;  
	}
  return false;
} 
  
/*
if (keyIsPressed && keyCode === 38) {
      colour = colour + 5;
    }
if (keyIsPressed && keyCode === 37) {
      colour2 = colour2 + 5;
    }
if (keyIsPressed && keyCode === 39) {
      colour3 = colour3 + 5;
    }
if (keyIsPressed && keyCode === 40) {
      colour = 0;
      colour2 = 0;
      colour3 = 0;  
    }
