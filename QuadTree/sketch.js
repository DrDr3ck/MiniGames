let quadtree;

function setup() {
    createCanvas(400,400);
    const rect = new Rectangle(200,200,200,200)
    quadtree = new QuadTree(rect,4);

    for( let i = 0; i < 50; i++ ) {
        const p = new Point(random(width), random(height));
        quadtree.insert(p);
    }

    console.log(quadtree);
}

function draw() {
    background(51);
    quadtree.show();
}