const Engine=Matter.Engine;
const World=Matter.World;
const Body=Matter.Body;
const Constraint=Matter.Constraint;
var engine, world;
var ground1,ground2,ground3;

function preload(){   
}

function setup(){
    var canvas=createCanvas(1200,400);
    engine=Engine.create();
    world=engine.world;

  ground1=new land(200,200,20,20);
}

function draw(){
 background("black")
    Engine.update(engine);
drawSprites();
    ground1.display();
}