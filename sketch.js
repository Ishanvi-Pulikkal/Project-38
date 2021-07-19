var monkey,monkeyIMG;
var banana,bananaI;
var bananaGroup, obstacleGroup;
var obstacle,obstacleI;
var score=0;
var ground;
var bananaTaken=0
var back,backImage;
var gameOver ,gameOverI;
var over, overI;

function preload(){
  
 monkey_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png",
 "Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")

  backImage = loadImage("jungle.png") 

  bananaI = loadImage("banana.png");
  obstacleI = loadImage ("obstacle.png");
 
  gameOverI = loadImage("gameover.png")
  overI = loadImage("over.jpg");
  
 
}



function setup() {
  createCanvas(displayWidth,displayHeight)

  back = createSprite(displayWidth,displayHeight/3.75,displayWidth*5.,displayHeight)
  back.addImage(backImage);
  back.scale = 1.8;
  back.depth = 0.1;
  //back.velocityX = -2;

  monkey = createSprite(50,200,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.17;
  
  
  gameOver = createSprite(displayWidth/6.5,displayHeight/3.75,100,100);
  gameOver.addImage(gameOverI);
  gameOver.scale = 1.5
  gameOver.visible = false;
  gameOver.depth = 4
  
  over = createSprite(displayWidth/6.5,displayHeight/3.75,400,400);
  over.addImage(overI);
  over.visible = false
  over.scale = 2;
  over.depth = 3
 
  
  ground = createSprite(displayWidth,displayHeight/1.4,displayWidth*5,10);
  //ground.velocityX = -10;
  ground.depth = 1
  ground.visible = false
  
  bananaGroup = new Group ();
  obstacleGroup = new Group();
      
  bananas();
  Obstacle();

 
  
  monkey.setCollider("circle",0,0,50)
 
  
  
}


function draw() {
  background("white")
   drawSprites();

 
 addScore();
 //bananasTaken();

 camera.x = monkey.x;
 camera.y = displayHeight/2;  
  
 
  
 //con[[sole.log(monkey.y);
  if(bananaGroup.isTouching(monkey)){
    for(var i=0; i<bananaGroup.length; i++){
      if(bananaGroup.get(i).isTouching(monkey)){
        bananaGroup.get(i).destroy();
        score++;
      }
    }
  }
/*  if(monkey.collide(obstacleGroup)){
    bananaGroup.destroyEach();
    obstacleGroup.destroyEach();
    bananaGroup.velocityX = 0
    obstacleGroup.velocityX = 0
    gameOver.visible = true;
    over.visible = true;
    monkey.destroy();
  }*/
   
  if(keyDown("RIGHT_ARROW")){
    monkey.x += 5;
  }
  
  
  if((keyDown("space")||keyDown("up")) && monkey.y >= 314.3){
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.5
  monkey.collide(ground);
  //monkey.collide(obstacleGroup);
}
  

function bananas(){
  for(var i = 200;i<displayWidth*5; i+=300){
    banana = createSprite(i,200,20,20);
    banana.y = Math.round(random(250,400));
    banana.addImage(bananaI);
    banana.scale = 0.1
    banana.depth = 1
    bananaGroup.add(banana);
  }

    
}
function Obstacle(){
  for(var i=150; i<displayWidth*5; i+=500){
    obstacle = createSprite(i,displayHeight-250,20,20);
    obstacle.scale = 0.2 ;
    obstacle.addImage(obstacleI);
    obstacle.depth = 1
    obstacleGroup.add(obstacle)
  }
}

function addScore(){
  stroke ("black");
  textSize(20);
  fill("black");
 // survivalTime = Math.ceil(frameCount/frameRate());
  text("score: "+ score, 300, 100);
  
}
function bananasTaken(){
  stroke ("black");
  textSize(20);
  fill("black");
  text("Bananas Eaten:" + bananaTaken,10,100)
}

