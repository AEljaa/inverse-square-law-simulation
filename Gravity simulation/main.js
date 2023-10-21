const canvas=document.getElementById("myCanvas");
canvas.width=1920;
const ctx = canvas.getContext("2d");
var coords=[];







// Get viewport dimensions
const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;

// Generate random positions within the viewport dimensions
const x1 = Math.floor(Math.random() * viewportWidth);
const y1 = Math.floor(Math.random() * viewportHeight);
const x2 = Math.floor(Math.random() * viewportWidth);
const y2 = Math.floor(Math.random() * viewportHeight);

console.log(x1,x2,y1,y2)
                              //x1 x2  y1  y2   rad1  rad2
const particles= new Particles(x1,x2,y1,y2,25,25)

animate();

function animate(){
    
    canvas.height=window.innerHeight;
    var force = Gravity(particles.x1,particles.x2,particles.y1, particles.y2, particles.q1, particles.q2);
 
    particles.update();
    

    
    particles.drawcircle1(ctx);
    
    particles.drawcircle2(ctx);

    
 
   
    requestAnimationFrame(animate);
    document.getElementById("currentforce").innerHTML=force[0];
    document.getElementById("bluemass").innerHTML=particles.q1;
    document.getElementById("greenmass").innerHTML=particles.q2;
    document.getElementById("x1").innerHTML=particles.x1;
    document.getElementById("x2").innerHTML=particles.x2;
    document.getElementById("y1").innerHTML=particles.y1;
    document.getElementById("y2").innerHTML=particles.y2;
    
    
}