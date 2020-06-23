function Brique(x,y,widthScreen,height,score) {
    this.location = createVector(x,y);
    this.color = color(165,192,222);
    this.width = widthScreen;
    this.height = height;
    this.score = score;

    this.show = function() {
        fill(this.color);
        strokeWeight(this.score);
        rect(this.location.x, this.location.y, this.width, this.height);
    }

    this.collide = function(ball) {
        const cx = ball.location.x;
        const cy = ball.location.y;
        const rx = this.location.x;
        const ry = this.location.y;
        const rw = this.width;
        const rh = this.height;

        let testX = cx;
        let testY = cy;

        let reverseX = true;
        if (cx < rx) {
            testX = rx;        // left edge
        } else if (cx > rx+rw) { 
            testX = rx+rw;     // right edge
        }

        if (cy < ry) {
            testY = ry;        // top edge
            reverseX = false;
        } else if (cy > ry+rh) {
            testY = ry+rh;     // bottom edge
            reverseX = false;
        }

        const distX = cx-testX;
        const distY = cy-testY;
        const distance = sqrt( (distX*distX) + (distY*distY) );

        if (distance <= ball.radius) {
            if( reverseX ) {
                ball.reverse('x');
            } else {
                ball.reverse('y');
            }
            this.score -= 1;
            return true;
        }
        return false;
    }

    this.left = function() {
        return this.location.x;
    }
    this.right = function() {
        return this.location.x+this.width;
    }
    this.top = function() {
        return this.location.y;
    }
    this.bottom = function() {
        return this.location.y+this.height;
    }
}