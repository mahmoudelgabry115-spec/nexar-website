// system loader
console.log("Nexar Network Loaded");

// auto refresh UI
setInterval(()=>{

if(window.ethereum && provider){

provider.getBalance(user).then(bal=>{
document.getElementById("bnb").innerText =
(Number(bal)/1e18).toFixed(4);
});

}

},5000);
