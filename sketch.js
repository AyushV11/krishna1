var newx=700

function setup() {
  createCanvas(1200,800);
  edge1= createSprite(3000,20,6000,10)
  edge2= createSprite(3000,780,6000,10) 
  edge1.visible=false
  edge2.visible=false
 krishna = new Player(200,500)
 rockgroup= new Group()
 for(var i=0;i<=5;i++){
 rock1 = new Rock(newx)
 rockgroup.add(rock1.body)
 newx+=800
 }
 
 enemy = new Enemy(6000,500)
}

function draw() {
  background(0);
 
  drawSprites();
  
  rockgroup.bounceOff(edge1)
  rockgroup.bounceOff(edge2)
  camera.position.x= krishna.body.x

  if(keyDown(RIGHT_ARROW)){
    krishna.body.x+=30
  }

  if(keyDown(LEFT_ARROW)){
    krishna.body.x-=30
  }

  if(keyDown(UP_ARROW)){
    krishna.body.y-=5
  }

  if(keyDown(DOWN_ARROW)){
    krishna.body.y+=5
  }
}