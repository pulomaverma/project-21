var bullet,wall;
var speed,weight;
var thikness;

function setup() {
  createCanvas(1600,400);
speed=random(55,90)
weight=random(400,1500)
bullet=createSprite(50,200,50,50);
bullet.shapecolor="white";
wall=createSprite(1200,200,thikness,height/2);
wall.shapeColor="20";

bullet.velocityX=speed;

}


function draw() {
  background(0);  
  
if (wall.x-bullet.x<(bullet.width+wall.width)/2)
  {
     bullet.velocityX=0;
  var deformation=0.5 + weight + speed + speed/22509;
  if (deformation>180)
  {
    bullet.shapeColor="red";
  }
  if (deformation>180 && deformation>100)
  {
    bullet.shapeColor="green";
  }
  
  if (deformation>100)
  {
    bullet.shapeColor="yellow";
  }
  
}
  thikness=random(22,83)
  speed=random(223,321)
  weight=random(30,52)
  
if (hasCollided(bullet,wall))
{
bullet.velocityX=0;
var damage=0.5+weight+speed+speed/(thikness+thikness+thikness);
if (damage>10)
{
wall.shapeColor="blue";
}
if (damage<10)
{
wall.shapeColor="orange";
}

}
  
     drawSprites();
}
function hasCollided(bullet,wall)
{
bulletRightEdge=bullet.x-bullet.width;
wallLeftEdge=wall.x;
if(bulletRightEdge>wallLeftEdge)
{
  return true
}
else {
  return false;
}
}































