function Splash(x,y) {
    this.x = x;
    this.y = y;
    this.dirX = random(-5,5);
    this.dirY = random(-1,-4);

    this.show = function() {
        stroke(138,43,226);
        line(this.x, this.y, this.x+this.dirX, this.y+this.dirY);
    }

    this.move = function() {
        this.x += this.dirX;
        this.y += this.dirY;
        this.dirY /= 2;
    }
}