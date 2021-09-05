
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var mango1,mango2,mango3;
var slingshot;
var stone;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

 mango1 = new mango(600,600,20 );
 mango2 = new mango(500,560,20 );
 mango3 = new mango(700,200,20 );

	Engine.run(engine);
   stone = new Stone(200,50);
	ground = new Ground(400,10,1000,20);
    //log6 = new Log(230,180,80, PI/2);
    slingshot = new Launcher(stone.body,{x:200, y:300});
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 mango1.display();
 mango2.display();
 mango3.display();

 slingshot.display();
 stone.display();
}


function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(stone.body);
        gameState = "onSling";
    }
}
