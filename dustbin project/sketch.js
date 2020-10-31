
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,paper,dwall1,dwall2,dwall3;


function setup() {
	createCanvas(800, 700);
rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(400,690,800,20);
paper=new Paper(100,670,20);
dwall1=new Dustbin(600,670,140,20);
dwall2=new Dustbin(530,645,20,70);
dwall3=new Dustbin(670,645,20,70);
	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  dwall1.display();
  dwall2.display();
  dwall3.display();
  
  
 
}

function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:90,y:150});
	}
}

