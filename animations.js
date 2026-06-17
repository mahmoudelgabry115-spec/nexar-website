document.addEventListener("mousemove", (e)=>{

let glow = document.createElement("div");

glow.style.position = "fixed";

glow.style.left = e.clientX + "px";

glow.style.top = e.clientY + "px";

glow.style.width = "10px";

glow.style.height = "10px";

glow.style.borderRadius = "50%";

glow.style.background = "#00c6ff";

glow.style.boxShadow = "0 0 20px #00c6ff";

glow.style.pointerEvents = "none";

glow.style.opacity = "0.7";

document.body.appendChild(glow);

setTimeout(()=>glow.remove(),300);

});
