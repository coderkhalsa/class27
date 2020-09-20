class RubberBand {
    constructor(objectA,objectB){
var options={
    bodyA:objectA,
    bodyB:objectB,
length:10,
stiffness:0.04,

}
this.band = Matter.Constraint.create(options)
    World.add(world,this.band)

}
display(){
    var pointA = this.band.bodyA.position
    var pointB = this.band.bodyB.position
push();

    strokeWeight(5)
   line(pointA.x,pointA.y,pointB.x,pointB.y)

   pop();

}




}
