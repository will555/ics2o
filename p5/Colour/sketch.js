/*Will
Colour
25-4-2017*/
var colour = 0;
var colour2 = 0;
var colour3 = 0;

  function setup() {
  createCanvas(400, 400);
}


var draw=function () {
background(194, 194, 194);
if (keyIsDown(38)) {
      colour = colour + 5;
    }
if (keyIsDown(37)) {
      colour2 = colour2 + 5;
    }
if (keyIsDown(39)) {
      colour3 = colour3 + 5;
    }
if (keyIsDown(40)) {
      colour = 0;
      colour2 = 0;
      colour3 = 0;
    }
 if (keyIsDown(87)) {
      colour = colour - 5;
    }
if (keyIsDown(65)) {
      colour2 = colour2 - 5;
    }
if (keyIsDown(68)) {
      colour3 = colour3 - 5;
    }
if (keyIsDown(83)) {
      colour = 255;
      colour2 = 255;
      colour3 = 255;
    }

fill(colour, colour2, colour3);
  rect(100,100,200,200,29);
  textSize(23);
  text("Make Your Favorite Colour",62,66);
};




