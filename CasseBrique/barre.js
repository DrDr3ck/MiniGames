function Barre() {
    this.width = 150;
    this.height = 25;
    this.color = color(229,240,252);
    this.location = createVector(widthScreen/2-this.width/2, height-35);
    const speed = 8;
    this.speed = {
        right:createVector(speed, 0),
        left:createVector(-speed, 0)
    };

    this.show = function() {
        fill(this.color);
        rect(this.location.x, this.location.y, this.width, this.height);
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

    this.move = function(direction) {
        this.location.add(this.speed[direction]);
        if( this.location.x < 0 ) {
            this.location.x = 0;
        }
        if( this.location.x+this.width > widthScreen ) {
            this.location.x = widthScreen-this.width;
        }
    }
}