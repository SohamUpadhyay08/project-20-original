var car,wall
var speed,weight,deformation;
var speddT,weightT,deformationT;

function setup() {
  createCanvas(1000,500);
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(150,250,50,50);
  car.velocityX = speed;
  wall = createSprite(800,250,40,150);
 
  
}

function draw() {
  background("black");
  textSize(20);
  fill("red");
if(wall.x-car.x<(car.width+wall.width)/2){
  car.velocityX = 0
  deformation = 0.5*weight*speed*speed/22500
  if(deformation>180){
    car.shapeColor = color(255,0,0);
  }
  if(deformation<180 && deformation > 100){
    car.shapeColor = color(230,230,0);
  } 
  if(deformation<100){
    car.shapeColor = color(0,255,0);
  } 
}
speedT = speed;
weightT = weight;
deformationT = deformation;
  drawSprites();
  text("Speed:"+ speedT , 500,40);
  text("weight:"+ weightT , 500,90);
  text("deformation:"+ deformationT,500,130);
}
