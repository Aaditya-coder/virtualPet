var dogHappy,dogSad;
var dog, happyDog, database, foodS, foodStock;
var canvas,background;
function preload()
{
  dogHappy = loadImage("dogImg1.png");
  dogSad = loadImage("dogImg.png");
}

function setup() {
   canvas = createCanvas(500,500);
  var dog = createSprite(250,250);
  dog.addImage(dogSad);
  database = firebase.database();
  foodStock = database.ref('foodStock');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }

  drawSprites();
 text("remain stock"+ foodStock,250,100);
 textSize(15);
 fill("white");

  //add styles here

}
function readStock(data){
  foodS = data.val();
}

function writeStock(x){

database.ref('/').update({
  Food:x
})


}

