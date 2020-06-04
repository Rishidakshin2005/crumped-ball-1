var  paperSprite;
var dustbinSprite;
var dustbin2Sprite;
var dustbin3Sprite;
var groundSprite
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
    
}

function setup() {
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;
    paper = new Paper(400,200,40);
    dustbin = new Dustbin(400,200,100,20);
    dustbin2 = new Dustbin(340,400,20,100);
    dustbin3 = new Dustbin(450,100,20,100)



	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display()
  dustbin.display()
  dustbin2.display()
  dustbin3.display();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
    Matter.Body.setStatic(paperbody,false);
    
  }
}



