class Paper{
    constructor(x,y,r){
        this.x=x
        this.y=y
        this.r=r
        this.body=Bodies.circle(this.x,this.y,this.r)
        World.add(world,this.body)


    }
    display(){
        
        
        translate(this.body.position.x, this.body.position.y);
        
        fill(255,0,255)
        ellipse(0,0,this.r,this.r);
        pop();
    }
}