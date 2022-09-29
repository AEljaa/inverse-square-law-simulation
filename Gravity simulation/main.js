    const canvas=document.getElementById("myCanvas");
canvas.width=1920;
const ctx = canvas.getContext("2d");
var coords=[];






var x1=(Math.floor((Math.random() * 10)))*170

const x2=(Math.floor((Math.random() * 10)))*170
var y1= (Math.floor((Math.random() * 5)))*100
const y2=(Math.floor((Math.random() * 5)))*100
                              //x1 x2  y1  y2   rad1  rad2
const particles= new Particles(x1,x2,y1,y2,25,25)

animate();

function animate(){
    
    canvas.height=window.innerHeight;

 
    particles.update();
    

    
    particles.drawcircle1(ctx);
    
    particles.drawcircle2(ctx);
    
 
   
    requestAnimationFrame(animate);
}