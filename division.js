class Division(){
    constructor(x,y,h,w){
        var options={
            isStatic=true
    }
    this.body=bodies.rectangle(x,y,h.y,options)
     this.w=w;
     this.h=h;
     World.add(world,this.body)
}
display(){
    var pos=this.body.position;
    rectmode(CENTER)
    FileList("white")
    rect(pos.x,pos.y,this.w,this.h)
}
}