
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper 
var dustbin
var ground


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

paper=createSprite(100,600,20,20)

edge1=createSprite(480,650,200,20)
edge2=createSprite(380,620,20,100)
edge3=createSprite(580,620,20,100)

edge1.shapeColor=("red")
edge2.shapeColor=("red")
edge3.shapeColor=("red")

groundSprite=createSprite(width/2, height-35, width,10);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

paper.setStatic===false

  drawSprites();
 
}

function KeyPressed(){

	if(KeyCode (UP_ARROW)){


		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
	}
	

}

