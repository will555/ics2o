/*Will
Colour
25-4-2017*/
//The different colours the square will be
var colour = 0;
var colour2 = 0;
var colour3 = 0;

  function setup() {
  createCanvas(400, 400);
}


var draw=function () {
background(194, 194, 194);
//Rises the R of the RBG of the square
if (keyIsDown(38)) {
      colour = colour + 5;
    }
//Rises the G of the RBG of the square
if (keyIsDown(37)) {
      colour2 = colour2 + 5;
    }
//Rises the B of the RBG of the square
if (keyIsDown(39)) {
      colour3 = colour3 + 5;
    }
//Resets the colour of the square bavk to black or (0,0,0)
if (keyIsDown(40)) {
      colour = 0;
      colour2 = 0;
      colour3 = 0;
    }
//lowers the R of the RBG of the square
 if (keyIsDown(87)) {
      colour = colour - 5;
    }
//lowers the G of the RBG of the square 
if (keyIsDown(65)) {
      colour2 = colour2 - 5;
    }
//lowers the B of the RBG of the square
if (keyIsDown(68)) {
      colour3 = colour3 - 5;
    }
//makes the colour of the square white when "S" is pressed
if (keyIsDown(83)) {
      colour = 255;
      colour2 = 255;
      colour3 = 255;
    }
//the colour of the square
fill(colour, colour2, colour3);
//the square
  rect(100,100,200,200,29);
//the size of the text
  textSize(23);
//the text above the square
  text("Make Your Favorite Colour",62,66);
};




