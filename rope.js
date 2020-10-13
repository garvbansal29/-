class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var rope_options = {
     bodyA:bodyA,
     bodyB:bodyB,
     pointB:{x:this.offsetX,y:this.offsetY} 
     
        }
        this.rope = Constraint.create(rope_options);
        World.add(world,this.rope);
    }
    display(){
       
        strokeWeight(3);
       
        line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.bodyB.position.x+this.offsetX,this.rope.bodyB.position.y+this.offsetY); 
    }
}