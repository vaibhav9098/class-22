const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
var engine,world,ball,ground;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world
  
  var ballop={
    restitution:1.0
  }
  ball=Bodies.circle(200,100,20,ballop);
  World.add(world,ball);

  var groundop={
    isStatic:true
  }
  ground=Bodies.rectangle(200,390,20,20,groundop)
  World.add(world,ground);
}

function draw() {
  background("black");  
  Engine.update(engine)
   
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)

  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20)
}