var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
//var gameState = "play",   gameState = 'end'

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
  doorsGroup = new Group()
  climbersGroup = new Group()
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  ghost = createSprite(200,200,50,50)
  ghost.addImage('ghost', ghostImg)
  ghost.scale= 0.3
  
}

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }
  if (keyDown('RIGHT_arrow')){
  ghost.x+= 3
}
  if (keyDown('left_arrow')){
  ghost.x-= 3 
  
}
  if (keyDown('space')){
    ghost.velocityY=-3
  }
  ghost.velocityY+= 0.5
    spawndoors()
    drawSprites()

  if (ghost.isTouching(climbersGroup)) {
    gameState = end 
    textSize (50)
    text('Game over',300,300)
    if (gamestate===END){
      tower.velocityY=0
      ghost.velocityY=0
      
      climbers_group.setVelocityXEach(0)
      doors_group.setVelocityXEach(0)
    }
  
      
 
   
   
}

function spawndoors(){
if (frameCount%200===0){
  door = createSprite(200,-50)
  door.addImage('door',doorImg)
  climber = createSprite(200, 13)
  climber.addImage('climber',climberImg)
  ghost.depth = climber.depth = door.depth
  ghost.depth += 1

  


  door.x= Math.round(random(150, 400))
  climber.x=door.x
  climber.velocityY=1
  door.velocityY=1
  doorsGroup.add(door)
  door.lifetime = 700
  climber.lifetime=700
  climbersGroup.add(climber)
}
}

}
function reset() {
  doorsGroup.setvelocityYEach(0)
  climbersGroup.setvelocityYEach(0) 
  ghost.velocityY = 0
  
}