function Clock(x,y,r) {
    this.location = createVector(x,y);
    this.radius = r;
    this.strokeWeight = 8;

    this.show = function() {
        push();
        strokeWeight(this.strokeWeight/2);
        noFill();

        arc(100,100,100,100)

        const hr = hour();
        const endHour = map(hr % 12, 0, 12, -90, 270);
        stroke(6,49,96);
        arc(this.location.x, this.location.y, this.radius*2, this.radius*2, -90, endHour);

        const mn = minute();
        const endMinute = map(mn % 60, 0, 60, -90, 270);
        stroke(229,240,252);
        arc(this.location.x, this.location.y, this.radius*2-this.strokeWeight, this.radius*2-this.strokeWeight, -90, endMinute);

        const sc = second();
        const endSecond = map(sc % 60, 0, 60, -90, 270);
        stroke(195,212,231);
        arc(this.location.x, this.location.y, this.radius*2-this.strokeWeight*2, this.radius*2-this.strokeWeight*2, -90, endSecond);
        pop();
    }
}
