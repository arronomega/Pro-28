class mango {
    constructor(x,y,r){
var options = {
    isStatic:false,
    restituion:0.1,
    friction:1,
    density:1.1,

}
this.x = x;
this.y = y;
this.r = r;
this.image = loadImage("img/mango.png");
this.body = Bodies.circle(this.x,this.y,this.r/2,options);
World.add(world,this.body);
    }
    display(){

        var mangopos = this.body.positon;
        push();
        translate(mangopos.x,mangopos.y);
        imageMode(CENTER);
        ellipseMode(RADIUS);
        fill(112,222,112);
        image(this.image,0,0,this.r*2,this.r*2);
        pop();
    }


}