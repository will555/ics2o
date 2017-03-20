

function setup() {
  createCanvas(400, 400);
}

function draw() {
var houseHight=134;

var houseWidth=134;

var houseY=100;
  
var houseX=100;

fill(71, 169, 255);
rect(houseX+39,houseY+109,houseWidth,houseHight);
fill(0, 0, 0);
rect(houseX+96,houseY+198,houseWidth-111,houseHight-91);
fill(255, 255, 255);
rect(houseX+100,houseY+203,houseWidth-121,houseHight-121);
rect(houseX+60,houseY+140,houseWidth-104,houseHight-104);
rect(houseX+119,houseY+141,houseWidth-104,houseHight-104);
fill(130, 0, 0);
triangle(houseX+205,houseY+110,houseX+107,houseY+26,houseX+8,houseY+110);
fill(32, 201, 52);
ellipse(207,419,679,160);
fill(255, 242, 0);
ellipse(35,26,110,110);
}
