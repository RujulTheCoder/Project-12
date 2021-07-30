var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x=mouseX;

  createApples();
  createLeaves();

  drawSprites();
}

function createApples(){
  if (frameCount % 80===0){
    apple = createSprite(200,50,40,10);
    apple.addImage(appleImg);
    apple.x=Math.round(random(10,390));
    apple.velocityY = 5;
    apple.scale = 0.1;

    apple.lifetime=58;
    rabbit.depth=apple.depth+1;
  }
}

function createLeaves(){
  if (frameCount % 80===0){
    leaf = createSprite (20,60,40,10);
    leaf.addImage(orangeImg);
    leaf.x=Math.round(random(10,390));
    leaf.velocityY = 3;
    leaf.scale = 0.1;

    leaf.lifetime=95;
    rabbit.depth=leaf.depth+1;
  }
}