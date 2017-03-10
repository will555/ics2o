

function setup() {
  createCanvas(400, 400);
}

function draw() {
var roof= 41;

var wall=133;
  
var houseWidth=100;

fill(houseWidth+56,houseWidth*2, houseWidth+155);
rect(139,houseWidth*2+9,wall,wall);
fill(0, 0, 0);
rect(houseWidth+96,houseWidth*3,23,43);
fill(255, 255, 255);
rect(houseWidth*2,houseWidth*3,13,13);
rect(houseWidth+60,houseWidth*2+40,30,30);
rect(houseWidth*2+19,houseWidth*2+40,30,30);
fill(130, 0, 0);
triangle(300,212,205,124,110,211);
fill(255, 255, 255);
fill(42, 189, 51);
line(207,302,207,315);
line(215,309,201,309);
fill(28, 201, 49);
ellipse(215,408,679,160);

}
