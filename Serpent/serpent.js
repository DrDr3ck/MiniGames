function Serpent(x,y) {
    this.x = scl;
    this.y = scl;
    this.xspeed = scl;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];
    this.eating = 0;

    this.die = function() {
        var result = false;
        for(var i=0; i < this.tail.length; i++ ) {
            if( this.tail[i].x === this.x && this.tail[i].y === this.y ) {
                return true;
            }
        }
        return result;
    }

    this.reset = function() {
        console.log(this.total);
        this.x = scl;
        this.y = scl;
        this.xspeed = scl;
        this.yspeed = 0;
        this.total = 0;
        this.tail = [];
    }

    this.show = function() {
        for(var i=0; i < this.tail.length; i++ ) {
            var color = (this.tail.length+1-i)*5;
            fill(255-color,255,255-color);
            rect(this.tail[i].x, this.tail[i].y, scl, scl);    
        }
        fill(255);
        if( state === "die") {
            image(imgSerpentDead, this.x, this.y,scl,scl);
        } else if( (this.eating % 2) === 0 ) {
            image(imgSerpent, this.x, this.y,scl,scl);
            if( this.eating > 0 ) {
                this.eating--;
            }
        } else {
            image(imgSerpentEating, this.x, this.y,scl,scl);
            this.eating--;
        }
    }

    this.eat = function(pos) {
        var d = dist(this.x, this.y, pos.x, pos.y);
        if( d < 1 ) {
            this.total++;
            this.eating = 6;
            return true;
        }
        return false;
    }

    this.setDir = function(xspeed, yspeed) {
        this.xspeed = xspeed*scl;
        this.yspeed = yspeed*scl;
    }

    this.update = function() {
        if( this.total === this.tail.length ) {
            for( var i=0; i < this.tail.length ;i++) {
                this.tail[i] = this.tail[i+1];
            }
        }
        this.tail[this.total-1] = createVector(this.x, this.y);

        this.x += this.xspeed;
        this.y += this.yspeed;

        this.x = constrain(this.x, 0, widthScreen-scl);
        this.y = constrain(this.y, 0, height-scl);
    }
}