
/*

1. Add a background image for your snow animation.
2. Create characters as sprites if you want to add it.
3. Make the characters jump or walk in the snow.
4. Create a blueprint for snow.
5. Add an image for snow and scale it.
6. You can add properties like friction, density etc. for making snowfall.
7. You can add sound effects also in your animation.
8. Check if the code works as you expected before submitting the project.

*/

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var snows=[];
var snowman1,snowman2;
var fwd, bwd;
function preload() {
  backgroundImg = loadImage("snow1.jpg");
  snowman1=loadImage("snowman.png");
 // bgMusic = loadSound("snow_music.mp3");
}

function setup() {
  createCanvas(1550,750);
  
  ch1 = createSprite(20, 500, 50, 50);
	ch1.addImage(snowman1);
	ch1.scale = 0.5;  
  engine = Engine.create();
  world = engine.world;


  fwd=true;
}

function draw() {
  background(backgroundImg);  

  // playing music is making my laptop struck.Hence commenting the code
  //bgMusic.play();


  //move the sprite characters
 if(fwd && ch1.x>=20 && ch1.x<1300 )
 {
  ch1.x = ch1.x + 3;
  
 }
 else{
  fwd=false;
  ch1.x = ch1.x-4;
 }

 if(ch1.x<20)
 {
  fwd= true;
  ch1.x=20;
 }
  console.log (ch1.x);
  //create snows objects
  if(frameCount%60===0)
  {
    snows.push(new Snow(random(50,1500),50,30,30,'snow4.webp'));
    snows.push(new Snow(random(50,1500),50,30,30,'snow5.webp'));
  }
  if(frameCount%50===0)
  {
    snows.push(new Snow(random(50,1500),50,30,30,'snow5.webp'));
    snows.push(new Snow(random(50,1500),50,30,30,'snow5.webp'));

  }
  Engine.update(engine);
  for (var i = 0; i < snows.length; i++) {
   snows[i].display();   
  }
  drawSprites();
}

function keyPressed(){
  if(keyCode === 32){
    //bgMusic.stop();
  }
}