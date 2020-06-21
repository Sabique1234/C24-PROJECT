const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var dustbin;
var ball;
var ground

function setup()
{
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
	world = engine.world;

	ball = new Ball(400,200,30);
	dustbin = new Bin(800,300,300,50);
	fill("yellow");
	dustbin2= new Bin(800,150,50,150);
	dustbin3= new Bin(1050,150,50,150);

	console.log(dustbin);
	
	var options =
	{
		isStatic: true
	}

	ground = Bodies.rectangle(700,370, 1200, 10, options);
	World.add(world, ground);
	
}

function draw () {
	background(0,225,0);

	Engine.update(engine);

	ball.display();

	dustbin.display();
	dustbin2.display();
	dustbin3.display();
	
}

function keyPressed()
 {
	if(keyCode === UP_ARROW)
	 {
		Matter.Body.applyForce(ball.body, ball.body.position,{x:85, y:-85})
	}
}