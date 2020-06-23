function Ball() {
    this.x = 0;
    this.y = 0;
    this.color = [random()*255,random()*255,random()*255];
    this.forced = false;

    this.show = function() {
        fill(this.color);
        ellipse(this.x, this.y, 50, 50);
    }

    this.setForced = function(value) {
        if( value === this.forced ) {
            return;
        }
        this.forced = value;
        if( this.forced ) {
            // force color to be white
            this.color = 255;
        } else {
            this.color = [random()*255,random()*255,random()*255];
        }
    }

    this.setPosition = function(x,y) {
        if( x !== this.x || y != this.y ) {
            this.x = x;
            this.y = y;
        }
    }
}