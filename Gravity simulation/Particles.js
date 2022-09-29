class Particles{
    constructor(x1,x2,y1,y2,radius1,radius2){

        const q1=0.005
        const q2=2

        this.q1=q1
        this.q2=q2


        this.x1=x1;
        this.x2=x2;
        this.y1=y1;
        this.y2=y2;
    

        this.radius1=radius1;
        this.radius2=radius2;
        
        let ForceAndHypotDist=Gravity(this.x1,this.x2,this.y1,this.y2,this.q1,this.q2);
        this.Force=ForceAndHypotDist[0];
        var x_dist=ForceAndHypotDist[1];
        var y_dist=ForceAndHypotDist[2];
        
        const theta=Math.atan2(x_dist,y_dist);
        this.angle=theta;
       
        
        
        this.speed_x1=0;
        this.speed_x2=0;
        this.speed_y1=0;
        this.speed_y2=0;
        
        
        this.acceleration=(this.Force);
     
       

    }


    update(){
        this.move();
        
      
    }

    move(){
        
        this.x1 +=  this.acceleration*Math.sin(this.angle);
        this.y1 += this.acceleration*Math.cos(this.angle);
        this.x2 +=  this.acceleration*Math.cos(this.angle);
        this.y2 -= this.acceleration*Math.sin(this.angle);
        let Values=Gravity(this.x1,this.x2,this.y1,this.y2,this.q1,this.q2);
        
        this.Force= Values[0]
        var x_dist= Values[1]
        var y_dist= Values[2]
     
        
        
        const theta=Math.atan2(x_dist,y_dist);
        this.angle=theta;
        
        
        //console.log(this.acceleration,Math.sin(this.angle),Math.cos(this.angle))
        
    }



    drawcircle1(ctx){
        ctx.beginPath();
        ctx.arc(this.x1,this.y1,this.radius1, 0, 2 * Math.PI);
        ctx.closePath()

        ctx.fillStyle = 'blue';
        ctx.fill();
        
    
    }

    drawcircle2(ctx){
        ctx.beginPath();
        ctx.arc(this.x2,this.y2,this.radius2, 0, 2 * Math.PI);
        ctx.closePath()

        ctx.fillStyle = 'green';
        ctx.fill();
        

    }
    
}


