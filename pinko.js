class Pinko(){
    constructor(x,y,width,height){
        var options={
            isStatic=true
            resitution:0
        friction:0
            
        }
        this.r=10
        this.body=Bodies.circle(x,y,this.r,options)
        world.add(world,this.body)
    }
    display(){
        var pso=this.body.position
        var angle=this.body.angle
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER)
        noStroke();
        fill("white")
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r)
        pop();

    }
    }