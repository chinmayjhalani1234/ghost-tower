var tower,towerImage;
var door,doorImage,doorsGroups;
var ghost,ghostImage;
var climber,climberImage,climbersGroups;
var invisibleblock,invisiblegroups;
var gamestate="play"
function preload(){
  towerImage=loadImage("tower.png")
  doorImage=loadImage("door.png")
  ghostImage=loadImage("ghost-standing.png")
  climberImage=loadImage("climber.png")

}
function setup(){
  createCanvas(600,600)
  tower=createSprite(300,300)
  tower.addImage("tower",towerImage);
  tower.velocityY=1;
  doorsGroups=new Group();
  climbersGroups=new Group();
  invisiblegroups=new Group();
  
  ghost=createSprite(200,200,50,50);
  ghost.addImage(ghostImage);
  ghost.scale=0.3
  
}
function draw(){
  background(0);
  
  if(gamestate==="play"){
    
  
  
  
  if(tower.y>400){
    tower.y=300;
  }
  
  if(keyDown("LEFT_ARROW")){
    ghost.x=ghost.x-3;
  }
  if(keyDown("RIGHT_ARROW")){
    ghost.x=ghost.x+3;
  }
  if(keyDown("SPACE")){
   ghost.velocityY=-5;
    
  }
  ghost.velocityY+=0.8;
  
 if(climbersGroups.isTouching(ghost)){
   ghost.velocityY=0                                               
 } 
  
  if(invisiblegroups.isTouching(ghost)|| ghost.y>600){
    ghost.destroy();
    gamestate="end"
  }
    
  
    
  spawndoor()
    
    drawSprites()
      
    }
    if(gamestate==="end"){
      stroke("yellow");
      fill("red");
      textSize(30);
      text("gameover",230,250)
    }
  
    
}

function spawndoor(){
  if(frameCount%240===0){
    door=createSprite(200,50);
    door.addImage(doorImage)
    door.x=Math.round(random(120,400));
    door.velocityY=1;
    door.lifetime=800;
    doorsGroups.add(door);
    climber=createSprite(200,100);
    climber.addImage(climberImage);
    climber.x=door.x
    climber.velocityY=1;
    climber.lifetime=800;
    climbersGroups.add(climber);
    ghost.depth=door.depth;
    ghost.depth+=1; 
    invisibleblock=createSprite(200,100,80,15);
    invisibleblock.x=door.x;
    invisibleblock.velocityY=1;
    invisibleblock.liftime=800;
    
  }
}