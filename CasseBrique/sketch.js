let ball;
let barre;
let playing;
let bricks;
let scorePlayer;
let widthScreen;
let clock;

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
      bricks.push(new Brique(brickSpacing*i+margin, 100+j*30, brickSize, 25, floor(1+random(3))));
    }
  }
  playing = "play";
  scorePlayer = 0;
  angleMode(DEGREES);
  clock = new Clock(width-30, height-30,25);

  document.body.style.backgroundColor = "#1168CC";
}

function setup() { 
  widthScreen = 800;
  heightScreen = 800;
  createCanvas(widthScreen+200, heightScreen);
  textSize(32);
  textFont('Helvetica');

  resetGame();  
} 

function draw() {

  // static render as background
  background(195,212,231);
  fill(165,192,222);
  rect(widthScreen+2, 0+2, width-widthScreen-1-4, height-1-4, 20);

  if( playing === "play" ) {
    //physics
    balle.bounceBarre();
    balle.bounceEdge();
    for( let i = bricks.length-1; i >= 0; i--) {
      const brick = bricks[i];
      if( brick.collide(balle) ) {
        scorePlayer += 1;
        if( brick.score === 0) {
          bricks.splice(i,1);
          break;
        }
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
      playing = "over";
    }
    if( balle.isBelow() ) {
      playing = "over";
    }
  }

  // render
  push();
  bricks.forEach(brick => brick.show());
  pop();
  barre.show();
  balle.show();
  
  if( playing === "over" ) {
    fill(6,49,96);
    textAlign(CENTER);
    text('Press space to restart', widthScreen/2, 300);
  }
  fill(6,49,96);
  textAlign(CENTER);
  text(`Score ${scorePlayer}`, widthScreen+(width-widthScreen)/2, 30);
  clock.show();
}

function keyReleased() {
  if( playing === "over" && key === ' ') {
    resetGame();
  }
}