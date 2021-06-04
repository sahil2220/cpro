var balloon,balloonImage1,balloonImage2;
// create database and position variable here
var database
function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  
  createCanvas(1500,700);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;

  database=firebase.database();

   var balloonPosition=database.ref('balloon/height')
  balloonPosition.on("value" ,readPosition, showError)

  textSize(20); 
}

// function to display UI
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    updateHeight(-10,0)
    balloon.addAnimation("hotairballon",balloonImage2)
    
  }
  else if(keyDown(RIGHT_ARROW)){
    updateHeight(10,0)
    balloon.addAnimation("hotairballon",balloonImage2)
     
  }
  else if(keyDown(UP_ARROW)){
    updateHeight(0,-10)
    balloon.addAnimation("hotairballon",balloonImage2)
    
  }
  else if(keyDown(DOWN_ARROW)){
    updateHeight(0,10)
    balloon.addAnimation("hotairballon",balloonImage2)
      
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}

function updateHeight(x,y){
  database.ref('balloon/height').set({x:height.x+x,y:height.y+y})
 
}

function readPosition(data){
  height=data.val()
  balloon.x=height.x
  balloon.y=height.y

}

function showError(){
console.log("Error in to the database")

}