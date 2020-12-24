class Chain{
    constructor(body1,point2){
       var options ={
        bodyA:body1,
        pointB:point2,
        stiffness: 0.04,
        length:10
       } 
       this.pointB=point2
       this.chain = Constraint.create(options)
        World.add(world,this.chain)
    }
    display(){
        if(this.chain.bodyA){
            var posA=this.chain.bodyA.position
            var posB=this.pointB
            strokeWeight(4)
                line(posA.x,posA.y,posB.x,posB.y)
        }
        
    }
    fly(){
        this.chain.bodyA=null
    }
}