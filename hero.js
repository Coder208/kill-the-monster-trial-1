class Hero{
    constructor(x,y,w,h){
        var options={
            density:1,
            frictionAir:0.005
        }
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.image=loadImage("images/Superhero-02.png");
        this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,options);
        World . add(world, this.body);


    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push ();
        translate (pos.x,pos.y);
        rotate (angle);
        imageMode(CENTER);
        image (this.image,0,0,this.w, this.h);
    
        pop ();
    }
}