function Point(x,y) {
    this.x = x;
    this.y = y;
}

function Rectangle(x,y,w,h) {
    this.x = x; // center X
    this.y = y;
    this.w = w; // half size
    this.h = h;

    this.contains = function(point) {
        return (
            point.x >= this.x-this.w &&
            point.x <= this.x+this.w &&
            point.y >= this.y-this.h &&
            point.y <= this.y+this.h
        );
    }
}

function QuadTree(boundary, n=4) {
    this.boundary = boundary;
    this.capacity = n;
    this.points = [];
    this.divided = false;

    this.insert = function(point) {
        if(!this.boundary.contains(point)) {
            return false;
        }

        if( this.points.length < this.capacity ) {
            this.points.push(point);
            return true;
        } else {
            this.subdivide();
            if( this.topRight.insert(point) ) {
                return true;
            } else if( this.topLeft.insert(point) ) {
                return true;
            } else if( this.bottomRight.insert(point) ) {
                return true;
            } else if( this.bottomLeft.insert(point) ) {
                return true;
            }
        }
    }

    this.subdivide = function() {
        if( this.divided) {
            return;
        }
        const tr = new Rectangle(this.boundary.x+this.boundary.w/2, this.boundary.y-this.boundary.h/2,this.boundary.w/2, this.boundary.h/2);
        this.topRight = new QuadTree(tr,this.capacity);
        const tl = new Rectangle(this.boundary.x-this.boundary.w/2, this.boundary.y-this.boundary.h/2,this.boundary.w/2, this.boundary.h/2);
        this.topLeft = new QuadTree(tl,this.capacity);
        const br = new Rectangle(this.boundary.x+this.boundary.w/2, this.boundary.y+this.boundary.h/2,this.boundary.w/2, this.boundary.h/2);
        this.bottomRight = new QuadTree(br,this.capacity);
        const bl = new Rectangle(this.boundary.x-this.boundary.w/2, this.boundary.y+this.boundary.h/2,this.boundary.w/2, this.boundary.h/2);
        this.bottomLeft = new QuadTree(bl,this.capacity);
        this.divided = true;
    }

    this.show = function() {
        stroke(255);
        noFill();
        rectMode(CENTER);
        rect(this.boundary.x, this.boundary.y, this.boundary.w*2, this.boundary.h*2);
        if( this.divided ) {
            this.topLeft.show();
            this.topRight.show();
            this.bottomRight.show();
            this.bottomLeft.show();
        }
        strokeWeight(2);
        this.points.forEach(p=>point(p.x, p.y));
    }
}