var shipImg,ship,seaImage,sea;
function preload(){

  shipImage=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
  seaImage=loadImage("sea.png")
}

function setup(){
  createCanvas(1200,700);

  
  sea=createSprite(10,200,600,10);
  sea.x=sea.width/2
  sea.velocityX=-2;
  sea.visible=true
  sea.addImage(seaImage)
  ship=createSprite(400,250,20,20)
  ship.addAnimation("ship",shipImage)
  ship.scale=0.5
}
function draw(){
  background(0)
  drawSprites()
  if(sea.x<0){
sea.x=sea.width/2  }
}