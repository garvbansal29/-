class Bob{
    constructor(x,y){
        var bob_options = {
            isStatic:false,
            restitution:1,
            friction:0,
            density:1.2
        }
        this.body = Bodies.circle(x,y,20,bob_options);
        this.radius=20;
        World.add(world,this.body);
    }
display(){
    push();
    strokeWeight(4);
    stroke("yellow");
    translate(this.body.position.x,this.body.position.y);
    fill("white");
    ellipseMode(RADIUS);
    ellipse(0,0,this.radius,this.radius);
    pop();
}
}