
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground,roof;
var rope,rope2,rope3,rope4,rope5;
var bob,bob2,bob3,bob4,bob5;

function preload()
{
	
}

function setup() {
	createCanvas(900, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(450,470,1200,20);
	roof = new Roof(450,50,300,10);

	bob = new Bob(200,200);
	bob2 = new Bob(188,200);
	bob3 = new Bob(176,200);
	bob4 = new Bob(164,200);
	bob5 = new Bob(152,200);

	rope = new Rope(roof.body,bob.body,-80,0);
	rope2 = new Rope(roof.body,bob2.body,-40,0);
	rope3 = new Rope(roof.body,bob3.body,0,0);
	rope4 = new Rope(roof.body,bob4.body,40,0);
	rope5 = new Rope(roof.body,bob5.body,80,0);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
ground.display();
roof.display();

bob.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();

rope.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

  drawSprites();
 
}



