var x = null;
var gouttes = [];
var r = 25;

var splashes = [];

function setup() { 
  createCanvas(800, 600);
  for(var i=0; i < 250; i++) {
      gouttes[i] = new Goutte();
  }
} 

function draw() { 
  background(230,230,250);
  for( var i=gouttes.length-1; i >=0; i--) {
    var goutte = gouttes[i];
    var d = dist(goutte.x, goutte.y, mouseX, mouseY);
    if( d < r ) {
      goutte.y = height*3;
    }
    goutte.fall();
    if( goutte.isSplash() ) {
      splashes.push(new Splash(goutte.x, height));
    }
    goutte.show();
  }
  for( var i=splashes.length-1; i >=0; i--) {
    var splash = splashes[i];
    splash.move();
    splash.show();
    if( splash.dirY < -0.5 ) {
      splashes.splice(i,1);
    }
  }
  ellipse(mouseX, mouseY, r*2, r*2);
}