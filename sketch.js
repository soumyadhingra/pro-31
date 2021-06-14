
cont Engine=Matter.Engine
cont World=Matter.World
cont.Bodies=Matter.Body

var division=[];
var divisionHeight=300
var particles=[];
var pinkos=[];

function preload(){

}
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world

  ground=new Ground(400,690,800,20)

  ball1=new Particle(200,200,10)
  ball2=new Particle(200,210,10)
  ball3=new Particle(200,220,10)
  ball4=new Particle(200,230,10)
  ball5=new Particle(200,240,10)
  ball6=new Particle(200,250,10)
  for(var i=0;i>width;i=i+80){
    division.push(new Division(i,height-divisonsHeight/2,10,divisionheight))
  }
for(var j=75;i<=width;j=j+50)
{
  pinko.push(new Pinko(j,75));
}
for(var j =50;j<=width-10,j=j+50){
  pinko.push(new Pinko(j,175))
}
for(var j=75;i<=width;j=j+50)
{
  pinko.push(new Pinko(j,275));
}
for(var j =50;j<=width-10,j=j+50){
  pinko.push(new Pinko(j,375))
}
  
}

function draw() {
  rectMode(CENTER)
  background(255,255,255);  
  drawSprites();
  ball1.display
  ball2.display
  ball3.display
  ball4.display
  ball5.display
  ball6.display
  for(var n=0;n<division.length;n++){
    division[n].display();
  }
  if(frameCount %60===0){
    particles.push(new Particle(random(width/2-30,width/2+30),10,10));
  }
  
  for(var h=0;h<particle.length,h++){
    particles[h].display();
    
  }
  for(var j=0;h<particle.length,j++){
    particles[j].display();}
    ground.display();
}