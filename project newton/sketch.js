
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
function preload(){
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	bob = new Bob(100,100,20);
	bob2 = new Bob(300,100,20)
	roof = new Roof(200,200,80,20)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
bob.display();
bob2.display();
roof.display();
 
}



