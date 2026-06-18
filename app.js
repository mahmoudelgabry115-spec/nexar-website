function copyContract(){
navigator.clipboard.writeText(
"0x50503105BEC1D34A4Ba6E193486911bd9bA6F0e4"
);
alert("Contract Copied");
}

/* CONNECT WALLET */
const connectBtn = document.querySelector(".connectWallet");

connectBtn.addEventListener("click", async () => {
if(window.ethereum){
try{
const accounts = await ethereum.request({
method:"eth_requestAccounts"
});
connectBtn.innerHTML =
accounts[0].slice(0,6) + "..." + accounts[0].slice(-4);
}
catch(err){
alert("Connection rejected");
}
}else{
alert("Install MetaMask");
}
});
window.addEventListener("load",()=>{
const loader = document.getElementById("loader");
if(loader){
loader.style.display = "none";
}
});

/* SIMPLE SMOOTH EFFECT */
document.querySelectorAll("nav a").forEach(link=>{
link.addEventListener("click",()=>{
console.log("Navigating...");
});
});
