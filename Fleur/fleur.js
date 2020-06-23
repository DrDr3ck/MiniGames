function Fleur(x) {
    this.x = x;
    this.y = 50;
    this.r = 30;

    this.xdir = 1;

    this.show = function() {
        noStroke();
        fill(255,0,200,150);
        var diameter = this.r*2;
        ellipse(this.x, this.y, diameter, diameter);
    }

    this.shiftDown = function() {
        this.xdir *= -1;
        this.y += this.r;
    }

    this.move = function(dir) {
        this.x += this.xdir;
    }
}