function Arrosoir() {
    this.x = width/2;
    this.y = height-20;
    this.dir = 0;
    
    this.show = function() {
        fill(250);
        rectMode(CENTER);
        rect(this.x, this.y, 20, 60);
    }

    this.setDir = function(dir) {
        this.dir = dir;
    }

    this.move = function() {
        this.x += this.dir;
    }
}