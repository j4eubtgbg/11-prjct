        var array = [1,2,3,4,56,6,'d','a',14];

var Ig;

var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
function preload() {
    trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
    trex_collided = loadImage("trex_collided.png");
    groundImage = loadImage("ground2.png")
        }

function setup() {

    for(i = 0; i<array.length; i++){
         console.log(array[i]);
           }

createCanvas(600, 200);


    trex = createSprite(50,160,20,50);
    trex.addAnimation("running", trex_running);
    trex.scale = 0.5;

//create a ground sprite
    ground = createSprite(200,180,400,20);
    ground.addImage("ground",groundImage);
    ground.x = ground.width /2;
    ground.velocityX = -4;

    Ig = createSprite(25,190,100,10);
    Ig.visible= false;
}

function draw() {
    background(220);
    //jump when the space button is pressed
     if (keyDown("space")&& trex.y>150) {
            trex.velocityY = -12;
                }
    
        console.log(trex.y);
    trex.velocityY = trex.velocityY + 0.8
            if (ground.x < 0) {
                    ground.x = ground.width / 2;
                        }
    trex.collide(Ig);
    drawSprites();
}   
