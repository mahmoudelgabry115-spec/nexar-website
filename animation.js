const canvas = document.getElementById("stars");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;

canvas.height = window.innerHeight;

window.addEventListener("resize",()=>{

canvas.width = window.innerWidth;

canvas.height = window.innerHeight;

});

class Star{

constructor(){

this.reset();

}

reset(){

this.x=Math.random()*canvas.width;

this.y=Math.random()*canvas.height;

this.radius=Math.random()*2.5;

this.speed=Math.random()*0.5+0.1;

this.alpha=Math.random();

}

update(){

this.y+=this.speed;

if(this.y>canvas.height){

this.y=0;

this.x=Math.random()*canvas.width;

}

}

draw(){

ctx.beginPath();

ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);

ctx.fillStyle="rgba(255,255,255,${this.alpha})";

ctx.fill();

}

}

const stars=[];

for(let i=0;i<250;i++){

stars.push(new Star());

}

function nebula(){

const gradient=ctx.createRadialGradient(

canvas.width/2,

canvas.height/2,

50,

canvas.width/2,

canvas.height/2,

900

);

gradient.addColorStop(0,"rgba(212,175,55,.03)");

gradient.addColorStop(.4,"rgba(255,255,255,.015)");

gradient.addColorStop(1,"rgba(0,0,0,0)");

ctx.fillStyle=gradient;

ctx.fillRect(0,0,canvas.width,canvas.height);

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

nebula();

stars.forEach(star=>{

star.update();

star.draw();

});

requestAnimationFrame(animate);

}

animate();
