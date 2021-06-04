
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper
var ground
var Side1
var Side2
var Side3

function preload(){
 
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100, 600,70);	
  ground = new Ground(400, 680, 800, 20);
   Side1= new Dustbin(550, 620, 20, 100);
  Side2 = new Dustbin(610, 660, 100, 20);
  Side3 = new Dustbin(670, 620, 20, 100);
  
 

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  paper.display();
  ground.display();
  Side1.display();
  Side2.display();
  Side3.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-15});
	}
}



