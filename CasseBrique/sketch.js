let ball;
let barre;
let playing;
let bricks;
let scorePlayer;
let widthScreen;

function resetGame() {
  const margin = 5;
  barre = new Barre();
  balle = new Balle(barre);
  const bricksPerRow = 10;
  const brickSize = (widthScreen - margin - margin - margin*(bricksPerRow-1)) / bricksPerRow;
  const brickSpacing = (widthScreen -margin-margin) / bricksPerRow;
  bricks = [];
  for(let j=0; j < 5; j++ ) {
    for(let i=0; i < 10; i++ ) {
      bricks.push(new Brique(brickSpacing*i+margin, 100+j*30, brickSize, 25, 1));
    }
  }
  playing = true;
  scorePlayer = 0;
}

function setup() { 
  widthScreen = 800;
  heightScreen = 600;
  createCanvas(widthScreen+200, heightScreen);
  textSize(32);
  textFont('Helvetica');

  resetGame();  
} 

function draw() {

  if( playing ) {
    // static render as background
    background(195,212,231);
    fill(165,192,222);
    rect(widthScreen, 0, width, height);

    //physics
    balle.bounceBarre();
    balle.bounceEdge();
    for( let i = bricks.length-1; i >= 0; i--) {
      const brick = bricks[i];
      if( brick.collide(balle) ) {
        scorePlayer += brick.score;
        bricks.splice(i,1);
      }
    }

    //update
    if( keyIsDown(LEFT_ARROW)) {
      barre.move('left');
    } else if( keyIsDown(RIGHT_ARROW)) {
      barre.move('right');
    }
    balle.update();    

    // late update
    if( bricks.length === 0 ) {
      playing = false;
    }
    if( balle.isBelow() ) {
      playing = false;
    }

    // render
    bricks.forEach(brick => brick.show());
    barre.show();
    balle.show();
  } else {
    fill(6,49,96);
    textAlign(CENTER);
    text('Press space to restart', widthScreen/2, 300);
  }
  fill(6,49,96);
  textAlign(LEFT);
  text(`Score ${scorePlayer}`, widthScreen+30, 30);
}

function keyReleased() {
  if( !playing && key === ' ') {
    resetGame();
  }
}