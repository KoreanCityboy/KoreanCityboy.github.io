let myNum = 30;
console.log(myNum);
console.log(myNum + 50);
myNum = myNum + 30
console.log(myNum); 

const yourNum = 20;
console.log (yourNum);
console.log(yourNum-1);
console.log(yourNum-2);

function setup() {
  createCanvas(300, 300);
  console.log("Hello, World!");
}

function draw() {
  background(0);
  ellipse(150, 150, myNum, myNum);
}
