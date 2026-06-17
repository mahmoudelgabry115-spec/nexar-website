function notify(msg){

let box = document.createElement("div");

box.innerText = msg;

box.style.position = "fixed";
box.style.bottom = "20px";
box.style.right = "20px";

box.style.padding = "15px 25px";
box.style.background = "rgba(0,0,0,0.85)";
box.style.color = "#FFD700";

box.style.border = "1px solid #FFD700";
box.style.borderRadius = "12px";

box.style.boxShadow = "0 0 20px #FFD700";

document.body.appendChild(box);

setTimeout(()=> box.remove(), 3000);

}
