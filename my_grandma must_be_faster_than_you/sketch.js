let grandma;

let hurdles = [];

let gImg;
let hImg;
let bImg;
let eImg;
let lImg;

let JumpMusic;
 
let SCORE = 0;
let playcheck = 0;

let button; 

let hitsCheck = false;

function preload()
{

  gImg = loadImage('image/grandma.png');
  hImg = loadImage('image/hurdles.png');
  bImg = loadImage('image/BackGround.png');
  eImg = loadImage('image/EndBackGround.jpg');
  lImg = loadImage('image/Logo.png');
  
  StartMusic = loadSound('media/OpeningBgm.mp3');
  InGameMusic = loadSound('media/GameBgm.mp3');
  JumpMusic = loadSound('media/JumpSound.mp3');
  DeadMusic = loadSound('media/YouDied.mp3');
}


function setup()
{
  button = createButton("Game start")
  button.mousePressed(reset);

  createCanvas(800, 450);

  grandma = new Grandma();

  frameRate(60);

  StartMusic.loop();
  StartMusic.setVolume(0.1);
}

function keyPressed() //jump
{
  if (key == ' ')
  {
    grandma.jump();
  }

  if(hitsCheck== true)
  {
    if(key == "r")
    {
      print(key);
      button.show();
      resetAgain();
    }
  }
}

function Score() // SCORE 
{
 if(playcheck != 0)
 {
  push();
  fill(0);
  textSize(20);
  text("SCORE : "+SCORE, 10, 20);
  pop();
  SCORE += 1
 }
}

function draw() 
{

  if (random(1) < 0.01)
  {
    hurdles.push(new Hurdles());
  }

  background(bImg);

  for (let h of hurdles)
  {

    h.move();
    h.show();

    if (grandma.hits(h)) // End
    {

      background(eImg);
  
      hitsCheck = true;

      noLoop();
      print(hitsCheck);
      
      if (grandma.hits(h))
      {
       DeadMusic.play();
       DeadMusic.setVolume(0.1); 
       InGameMusic.pause();
      }
    }
    if(playcheck==0) // Start Background
    {

      background(bImg);
      
      print("here")
      push();
      image(lImg, width/11, height/50 - 70);
      imageMode(CENTER);
      pop();

      button.center();
      button.position(width/2-40, height/2+30);
      
    }  
  }

  grandma.show();
  grandma.move();

  Score();
}

function reset() // Start
{

  background(bImg);
  print("reset");
  playcheck++;
  hitsCheck = false;
  button.hide();
  SCORE = 0;
  hurdles = [];
  grandma = new Grandma();
  frameRate(60);

  if(playcheck>0)
  {
    StartMusic.pause();
    InGameMusic.loop();
    InGameMusic.setVolume(0.1)
  }
}

function resetAgain()
{

  playcheck=0;
  hitsCheck = false;
  SCORE = 0;
  hurdles = [];
  grandma = new Grandma();
  loop();
  StartMusic.loop();
  StartMusic.setVolume(0.1);
} 