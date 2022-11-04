
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane,block1,block2,rotator1,rotator2,rotator3;
var angle = 63;
var angle2 = 45;
var angle3 = -74;
var b1,b2,b3,b4,b5;

function preload()
{
	
}

function setup() {
	createCanvas(700, 600);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
	var b_option={
		restitution:0.4,
		friction:0.02
	}
	var plane_option={
		isStatic: true
	}
	fill ("brown")
	plane=Bodies.rectangle(350,600,700,20,plane_option);
	World.add(world, plane);
	block1=Bodies.rectangle(150,350,150,20,plane_option);
	World.add(world, block1);
	block2=Bodies.rectangle(550,350,150,20,plane_option);
	World.add(world, block2);
	rotator1=Bodies.rectangle(350,200,150,20,plane_option);
	World.add(world,rotator1);
	rotator2=Bodies.rectangle(350,200,150,20,plane_option);
	World.add(world,rotator2);
	rotator3=Bodies.rectangle(350,200,150,20,plane_option);
	World.add(world,rotator3);
	b1=Bodies.circle(350,10,10,b_option);
	World.add(world,b1);
	b2=Bodies.circle(355,10,10,b_option);
	World.add(world,b2);
	b3=Bodies.circle(360,10,10,b_option);
	World.add(world,b3);
	b4=Bodies.circle(345,10,10,b_option);
	World.add(world,b4);
	b5=Bodies.circle(340,10,10,b_option);
	World.add(world,b5);
	
	rectMode(CENTER);
  ellipseMode(RADIUS);
  
}


function draw() {
  background(200);
  Engine.update(engine);

  Matter.Body.rotate(rotator1,angle);
  push();
  translate(rotator1.position.x, rotator1.position.y);
  rotate(angle);
  rect(0,0,150,20);
  pop();
  angle+=20;
  Matter.Body.rotate(rotator2,angle2);
  push();
  translate(rotator2.position.x, rotator2.position.y);
  rotate(angle2);
  rect(0,0,150,20);
  pop();
  angle2+=14;
  Matter.Body.rotate(rotator3,angle3);
  push();
  translate(rotator3.position.x, rotator3.position.y);
  rotate(angle3);
  rect(0,0,150,20);
  pop();
  angle3-=17;
  
  rect(plane.position.x,plane.position.y,700,20);
  rect(block1.position.x,block1.position.y,150,20);
  rect(block2.position.x,block2.position.y,150,20);
  ellipse(b1.position.x,b1.position.y,10);
  ellipse(b2.position.x,b2.position.y,10);
  ellipse(b3.position.x,b3.position.y,10);
  ellipse(b4.position.x,b4.position.y,10);
  ellipse(b5.position.x,b5.position.y,10);
}



