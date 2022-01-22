var arrowimg,strikerimg,striker,boardimg,red,yellow;
var queen,token1,token2,token3,token4;
var borders,wood1,wood2,wood3,wood4;
var pushstrength = 0;
var score = 0;
var canfire = true;

function preload(){
boardimg = loadImage("board.png");
arrowimg = loadAnimation("arrow1.png","arrow2.png","arrow3.png");

red = loadImage("red.png");
strikerimg = loadImage("striker.png");
yellow = loadImage("yellow.png");

}
function setup(){
createCanvas(550,550);

borders = createGroup();

wood1 = createSprite(275,0,550,72);
wood1.shapeColor = ('#68482F');
borders.add(wood1);


wood2 = createSprite(275,550,550,72);
wood2.shapeColor = ('#68482F');
borders.add(wood2);

wood3 = createSprite(0,275,72,550);
wood3.shapeColor = ('#68482F');
borders.add(wood3);

wood4 = createSprite(550,275,72,550);
wood4.shapeColor = ('#68482F');
borders.add(wood4);

borders.bounciness = 0.5;

arrow = createSprite(280,430);
arrow.addAnimation("arrow",arrowimg);
arrow.scale = 0.5;
arrow.visible = false;
arrow.rotateToDirection = true;
arrow.pause();

queen = createSprite(275,275);
queen.addImage("Queen",red);
queen.scale = 0.1;
queen.setCollider("circle",0,0,100);
//queen.debug = true;

token1 = createSprite(250,275)
token1.addImage("token",yellow);
token1.scale = 0.1;
token1.setCollider("circle",0,0,100);

token2 = createSprite(300,275)
token2.addImage("token1",yellow);
token2.scale = 0.1;
token2.setCollider("circle",0,0,100);

token3 = createSprite(275,303)
token3.addImage("token2",yellow);
token3.scale = 0.1
token3.setCollider("circle",0,0,100);

token4 = createSprite(275,250)
token4.addImage("token3",yellow);
token4.scale = 0.1
token4.setCollider("circle",0,0,100);

striker = createSprite(280,430);
striker.addImage("striker",strikerimg);
striker.scale = 0.15;
striker.setCollider("circle",0,0,120);
striker.rotation = 270;


}
function draw(){
background(boardimg);
fill("white");
text(mouseX +"," +mouseY,mouseX,mouseY);

striker.bounceOff(borders);
token1.bounceOff(borders);
token2.bounceOff(borders);
token3.bounceOff(borders);
token4.bounceOff(borders);
queen.bounceOff(borders);

striker.bounce(token1);
striker.bounce(token2);
striker.bounce(token3);
striker.bounce(token4);
striker.bounce(queen);

token1.bounce(token2);
token1.bounce(token3);
token1.bounce(token4);
token1.bounce(queen);

token2.bounce(token3);
token2.bounce(token4);
token2.bounce(queen);

token3.bounce(token4);
token3.bounce(queen);

token4.bounce(queen);
drawSprites();
createEdgeSprites();
if(keyWentUp("up")){
    striker.addSpeed(pushstrength,striker.rotation);
    canfire = false;
}
//reseting the campfire variable.
if(striker.getSpeed()<0.2){
    canfire = true;
}
//To aim and fire
if(keyDown(UP_ARROW ) && canfire == true){
    arrow.visible = true;
    pushstrength = pushstrength + 0.5;
    if(pushstrength > 10 && pushstrength < 14.9)
    {
      arrow.setFrame(0);
    }
    else if(pushstrength > 15 && pushstrength < 19.9)
    {
        arrow.setFrame(1);
    }
    else if(pushstrength > 20)
    {
        pushstrength=20;
        arrow.setFrame(2);
    }
    else
    {
        arrow.setFrame(2);
    }
}

else
{
    arrow.visible = false;
    pushstrength=0;
}
if(keyDown(LEFT_ARROW) && canfire == true)
{
    striker.rotation = striker.rotation - 5;
}
else if (keyDown(RIGHT_ARROW) && canfire == true)
{
    striker.rotation = striker.rotation + 5;
}
//Slow the striker and tokens

striker.setSpeedAndDirection(striker.getSpeed() * 0.97);
token1.setSpeedAndDirection(token1.getSpeed() * 0.975);
token2.setSpeedAndDirection(token2.getSpeed() * 0.975);
token3.setSpeedAndDirection(token3.getSpeed() * 0.975);
token4.setSpeedAndDirection(token4.getSpeed() * 0.975);
queen.setSpeedAndDirection(queen.getSpeed() * 0.975);

//Move arrow with striker
arrow.x = striker.x;
arrow.y = striker.y;
arrow.rotation = striker.rotation;
//for top left hole.
if(token1.x > 40 && token1.x < 75 && token1.y > 43 && token1 < 50){
    score = score+1;
    token1.x = -100;
}
if(token2.x > 40 && token2.x < 75 && token2.y > 43 && token2 < 50){
    score = score+1;
    token2.x = -100;
}
if(token3.x > 40 && token3.x < 75 && token3.y > 43 && token3 < 50){
    score = score+1;
    token3.x = -100;
}
if(token4.x > 40 && token4.x < 75 && token4.y > 43 && token4 < 50){
    score = score+1;
    token4.x = -100;
}
if(queen.x > 40 && queen.x < 75 && queen.y > 43 && queen.y < 50){
    score = score+1;
    queen.x = -100;
}
//top right hole
if(token1.x > 480 && token1.x < 495 && token1.y > 50 && token1 < 75){
    score = score+1;
    token1.x = -100;
}
if(token2.x > 480 && token2.x < 495 && token2.y > 50 && token2 < 75){
    score = score+1;
    token2.x = -100;
}
if(token3.x > 480 && token3.x < 495 && token3.y > 50 && token3 < 75){
    score = score+1;
    token3.x = -100;
}
if(token4.x > 480 && token4.x < 495 && token4.y > 50 && token4 < 75){
    score = score+1;
    token4.x = -100;
}
if(queen.x > 480 && queen.x < 495 && queen.y > 50 && queen.y < 75){
    score = score+1;
    queen.x = -100;
}
//bottom left
if(token1.x > 40 && token1.x < 75 && token1.y > 480 && token1 < 495){
    score = score+1;
    token1.x = -100;
}
if(token2.x > 40 && token2.x < 75 && token2.y > 480 && token2 < 495){
    score = score+1;
    token2.x = -100;
}
if(token3.x > 40 && token3.x < 75 && token3.y > 480 && token3 < 495){
    score = score+1;
    token3.x = -100;
}
if(token4.x > 40 && token4.x < 75 && token4.y > 480 && token4 < 495){
    score = score+1;
    token4.x = -100;
}
if(queen.x > 40 && queen.x < 75 && queen.y > 480 && queen.y < 495){
    score = score+1;
    queen.x = -100;
}
//bottom right
if(token1.x > 480 && token1.x < 495 && token1.y > 480 && token1 < 495){
    score = score+1;
    token1.x = -100;
}
if(token2.x > 480 && token2.x < 495 && token2.y > 480 && token2 < 495){
    score = score+1;
    token2.x = -100;
}
if(token3.x > 480 && token3.x < 495 && token3.y > 480 && token3 < 495){
    score = score+1;
    token3.x = -100;
}
if(token4.x > 480 && token4.x < 495 && token4.y > 480 && token4 < 495){
    score = score+1;
    token4.x = -100;
}
if(queen.x > 480 && queen.x < 495 && queen.y > 480 && queen.y < 495){
    score = score+1;
    queen.x = -100;
}
textSize(20);
text("Score : "+score,220,22);





}
