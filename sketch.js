const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){
	treeImage = loadImage("images/tree.png");
	boyImage = loadImage("images/boy.png");
}

function setup() {
	
	createCanvas(900,400);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(450,375,900,50);
	stone = new Stone(160,285,50);
	elastic = new Elastic(stone.body,{x:160,y:285});

	mango1 = new Mango(750,100,50);
	mango2 = new Mango(700,60,50);
	mango3 = new Mango(800,130,50);
	mango4 = new Mango(630,140,50);
	mango5 = new Mango(690,130,50);

	Engine.run(engine);
  
}


function draw() {
 
  rectMode(CENTER);
  background("lightblue");

  elastic.display();
  ground.display();

  imageMode(CENTER);
  image(boyImage,200,330,130,180);
  image(treeImage,700,200,300,400);

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);

}

function mouseDragged(){

    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){

    elastic.fly();

}

function detectCollision(Stone,mango){
	
	mangoBodyPosition = mango.body.position
	stoneBodyPosition = Stone.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance <= mango.r + Stone.r){
		Matter.Body.setStatic(mango.body,false);
	}
}

function keyPressed(){
	if (keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:160,y:285});
		elastic.attach(stone.body);
	}
}