var ship,ship_moving;
var sea;
var seaImage;

function preload(){
ship_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);

  sea = createSprite(200,200,20,20);
  sea.addImage(seaImage);
  sea.scale=0.3;

ship = createSprite(200,230,20,20);
ship.addAnimation("moving",ship_moving);
ship.scale=0.18;

}

function draw() {
 background(0);


sea.velocityX=-2;

if(sea.x < 0){
  sea.x = sea.x+400
}
drawSprites();
}