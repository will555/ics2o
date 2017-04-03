function setup() {
  createCanvas(400, 400);
}

function draw() {
var houseHight=134;

var houseWidth=134;
var houseY=100;
var houseX=100;

function house() {
  fill(71, 169, 255);
rect(houseX+38,houseY+109,houseWidth,houseHight);
fill(0, 0, 0);
rect(houseX+95,houseY+198,houseWidth-111,houseHight-91);//door
fill(255, 255, 255);
rect(houseX+100,houseY+204,houseWidth-121,houseHight-121);
rect(houseX+60,houseY+140,houseWidth-104,houseHight-104);
rect(houseX+119,houseY+141,houseWidth-104,houseHight-104);
fill(130, 0, 0);
triangle(houseX+205,houseY+110,houseX+107,houseY+26,houseX+8,houseY+110);
};

fill(32, 201, 52);
ellipse(207,419,679,160);
fill(255, 242, 0);
ellipse(35,26,110,110);

house();

fill(71, 169, 255);
rect(houseX+-72,houseY+194,houseWidth*0.45,houseHight*0.45);
fill(0, 0, 0);
rect(houseX+-49,houseY+231,houseWidth-122,houseHight-111);//door
fill(255, 255, 255);
rect(houseX+-47,houseY+234,houseWidth-127,houseHight-126);
rect(houseX+-63,houseY+208,houseWidth-122,houseHight-122);
rect(houseX+-35,houseY+208,houseWidth-122,houseHight-122);
fill(130, 0, 0);
triangle(houseX+2,houseY+194,houseX+-44,houseY+162,houseX+-86,houseY+195);
}
