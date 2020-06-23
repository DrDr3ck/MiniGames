function Goutte(x,y) {
    this.x = x;
    this.y = y;
    this.r = 8;

    this.show = function() {
        noStroke();
        fill(150,0,200);
        var diameter = this.r*2;
        ellipse(this.x, this.y, diameter, diameter);
    }

    this.hits = function(fleur) {
        var d = dist(fleur.x, fleur.y, this.x, this.y);
        return d < fleur.r+this.r;
    }

    this.move = function() {
        this.y -= 5;
    }
}