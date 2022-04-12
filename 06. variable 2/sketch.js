//let x = 30, y = 30;
//let velocity_x = 1, velocity_y = 1;
//let accel_x = 0.2, accel_y = 0.2;
//let friction = 0.99;

//function setup() {
//  createCanvas(400, 400);
//  frameRate(60); // try to change
  
//}

//function draw() {
//  background(200);
//  ellipse(x, y, 30, 30);

  //velocity_x += accel_x;
  //velocity_y += accel_y;

//  velocity_x *= friction;
//  velocity_y = friction;

//  x += velocity_x;
//  y += velocity_y;
//
//  textSize(15);
//  text(frameCount + " : " + frameRate(), 10, 30);
//}

//let x = 150, y = 150;
//let theta = 0.0;

//function setup() {
//  createCanvas(400, 400);
//  frameRate(60);
//}
//function draw() {
//  background(200);

//  //map(value, start1, stop1, start2, stop2, [withinBounds])
//  let y = map(sin(theta), -1, 1, 0, height); 
//  //height/2 + height/2 * sin(theta);

//  ellipse(x, y, 30, 30);
//  theta += 0.1;

//}

//let x = 200, y = 200;
//let d = 30
//let theta = 0.0;

//function setup() {
//  createCanvas(400, 400);
//  frameRate(60);

//}
//function draw() {
//  background(200);

  //map(value, start1, stop1, start2, stop2, [withinBounds])
//  let d = map(sin(theta), -1, 1, 0, height); 
  //height/2 + height/2 * sin(theta);

//  ellipse(x, y, d, d);
//  strokeWeight(10);
//  fill(255, 255, 0);
//  theta += 0.1;

//}

//let x = 150, y = 150;
//let d = 39;
//let degree = 30;
//function setup() {
//    createCanvas(400, 400);
//    frameRate(60);
//}

//function draw() {
//  background(200);
//  let theta = radians(degree);
//  let y = height/2 + height/2 * sin(theta);
//  line(x, y-d, x, y+d);
//  strokeWeight(20);
//  ellipse(x, y, d, d);
//  degree += 6;
  
//}

//function setup() {
  //  createCanvas(500, 500);
  //  background(0);
//}

//function draw() {
  //strokeWeight(random(50));
  //stroke(random(255), random(255), random(255));
  //print(random(255));
  //point(mouseX, mouseY); // the sistem variable

  //print(mouseX, mouseY);
  //ellipse(mouseX, mouseY, 100, 100);
//}

//function setup(){

//  createCanvas(500, 500);
//  background(0);

//}

//function draw() {

//  stroke(255, 255, 255);
//  line(pmouseX, pmouseY, mouseX, mouseY);
//}

let theta = 0.0 , r = 150.0; //r = 0; 

function setup(){

  createCanvas(300,300);
  background(0);

}

function draw(){

  let x = width/2 + r * cos(theta);
  let y = height/2 + r * sin(theta);
  
  ellipse(x, y, 30, 30);

  theta += 0.05;
  //r +=0.1;
  
}
