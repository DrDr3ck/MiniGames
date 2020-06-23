function Goutte() {
    this.x = random(0,width);
    this.y = random(-300,-100);
    var z = random(0,20);
    this.len = map(z, 0,20,10,20);
    this.thick = map(z, 0, 20, 1, 2);
    this.yspeed = map(z, 0, 20, 4, 10);

    this.isSplash = function() {
        if( this.y >= height ) {
            this.y = random(-300,-100);
            if( this.y <= height*2 ) {
                return true;
            }
            return false;
        }
        return false;
    }

    this.fall = function() {
        this.y += this.yspeed;
    }

    this.show = function() {
        strokeWeight(this.thick);
        stroke(138,43,226);
        line(this.x, this.y, this.x, this.y+this.len)        ;
    }
}