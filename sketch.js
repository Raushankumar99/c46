var score =0;
var backgroundImg , bottle1,bottle2,bottle3,bottle4,bottle5,bottle6,bullet,M1887;

var backgroundImg , bottle1Img , bottle2Img,bottle3Img,bottle4Img,bottle5Img,bottle6Img,bulletImg,
M1887Img;

var bottle1Group, bottle2Group,bottle3Group,bottle4Group,bottle5Group,bottle6Group,bulletGroup,
M1887Group;

var life =3;
var score =0;
var gameState = 1

function preload(){
   M1887Img = loadImage("M1887.png")
   bottle1Img = loadImage("bottle 1.png")
   bottle2Img = loadImage("bottle 2.png")
   bottle3Img = loadImage("bottle 3.png")
   bottle4Img = loadImage("bottle 4.png")
   bottle5Img = loadImage("bottle 5.png")
   bottle6Img = loadImage("bottle 8.png")
   backgroundImg = loadImag('background.jpg')
   bulletImg = loadImage("bullet.png")
}

function setup(){
   createCanvas (800,800)

   backboard = createSprite(50,width/2,100,height)
   backboard = addimage(backgroundImg)

M1887 = createSprite(100, height/2,50,50)
M1887 .addImage(M1887Img)
M1887 .scale=0.2;

bulletGroup = createGroup();
bottle1Group = createGroup();
bottle2Group = createGroup();
bottle3Group = createGroup();
bottle4Group = createGroup();
bottle5Group = createGroup();
bottle6Group = createGroup();

scoreboard= createElement("h1");
}

function draw(){
   backgroundImg("red")

   scoreboard.htm1("Score: "+score)
   scoreboard.style('colour:red');
   scoreboard.position(width-200,20)

   if(gameState===1){
      M1887.y=mouseY

      if (frameCount % 60 === 0) {
         drawbottle1();
      }

      if (frameCount % 70 === 0) {
         drawbottle2();
      }

      if (frameCount % 80 === 0){
         drawbottle3();
      }

      if (frameCount % 90 ===0){
         drawbottle4();
      }

      if (frameCount % 100 ===0){
         drawbottle5();
      }

      if (frameCount % 110 ===0){
         drawbottle6();
      }

      if(keyDown("space")){
         shootbullet();
      }


      if(bottle1Group.collide(bulletGroup)){
         bottle1Group.destroyEach();
         if(life>0){
            score=score+1
         }
      }

      if(bottle2Group.collide(bulletGroup)){
         bottle2Group.destroyEach();
         if(life>0){
            score=scoe+1
         }
      }

      