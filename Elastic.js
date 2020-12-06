class Elastic {

    constructor(bodyA,pointB){

        this.pointB = pointB;

        var options = {
            bodyA : bodyA,
            pointB : pointB,
            length : 10,
            stiffness : 0.004
        }

        this.body = Constraint.create(options);
        World.add(world,this.body);

    }

    fly(){

        this.body.bodyA = null;

    }

    attach(newBodyA){
        this.body.bodyA = newBodyA;
    }

    display(){

        if(this.body.bodyA){
            strokeWeight(5);
            var posA = this.body.bodyA.position;
            var posB = this.pointB;
            line(posA.x,posA.y,posB.x,posB.y);
        }

    }

}