function Balle(barre) {
    this.barre = barre;
    this.radius = 15;
    this.location = createVector(this.barre.location.x+this.barre.width/2, this.barre.location.y-this.radius-2);
    this.velocite = createVector(5,-5);

    this.show = function() {
        fill(229,240,252);
        ellipse(this.location.x, this.location.y, this.radius*2, this.radius*2);
    }

    this.update = function() {
        this.location.add(this.velocite);
    }

    this.reverse = function(coord) {
        this.velocite[coord] *= -1;
    }

    this.isBelow = function() {
        return this.location.y-this.radius >= height;
    }

    this.left = function() {
        return this.location.x-this.radius;
    }
    this.right = function() {
        return this.location.x+this.radius;
    }
    this.top = function() {
        return this.location.y-this.radius;
    }
    this.bottom = function() {
        return this.location.y+this.radius;
    }

    this.bounceBarre = function() {
        const cx = this.location.x;
        const cy = this.location.y;
        const rx = this.barre.location.x;
        const ry = this.barre.location.y;
        const rw = this.barre.width;
        const rh = this.barre.height;

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

        if (distance <= this.radius) {
            if( reverseX ) {

            } else {
                this.reverse('y');
                this.location.y = this.barre.location.y - this.radius - 2;
            }
        }
    }

    this.bounceEdge = function() {
        if( this.location.x + this.radius >= widthScreen || this.location.x-this.radius <= 0 ) {
            this.reverse('x');
        } else if( this.location.y - this.radius <= 0 ) {
            this.reverse('y');
        }
    }

}