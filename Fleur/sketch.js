var arrosoir;
var fleurs = [];
var gouttes = [];

function setup() { 
  createCanvas(800, 600);
  arrosoir = new Arrosoir();
  for( var i=0; i < 8; i++ ) {
      fleurs[i] = new Fleur(i*80+80);
  }
} 

function draw() { 
  background(51);

  for( var i=0; i < fleurs.length; i++ ) {
    fleurs[i].show();
    fleurs[i].move();
    if( fleurs[i].x > width || fleurs[i].x < 0) {
      for( var j=0; j < fleurs.length; j++ ) {
        fleurs[j].shiftDown();
      }
    }
  }

  for( var i=gouttes.length-1; i >= 0; i-- ) {
    var goutte = gouttes[i];
    goutte.show();
    goutte.move();
    for( var j=0; j < fleurs.length; j++ ) {
      if( goutte.hits(fleurs[j])) {
          gouttes.splice(i,1);
          fleurs[j].r *= 1.1;
      }
    }
  }
  arrosoir.show();
  arrosoir.move();
}

function keyReleased() {
  if( key !== ' ') {
    arrosoir.setDir(0);
  }
}

function keyPressed() {
  if( keyCode === RIGHT_ARROW) {
    arrosoir.setDir(1);
  } else if( keyCode === LEFT_ARROW) {
    arrosoir.setDir(-1);
  }
  if(key===' ') {
    gouttes.push(new Goutte(arrosoir.x, arrosoir.y));
  }
}