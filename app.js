/* ===========================
CONNECT WALLET
=========================== */

const connectBtn = document.querySelector(".connectWallet");

connectBtn.addEventListener("click", async ()=>{

if(window.ethereum){

try{

const accounts = await ethereum.request({
method:"eth_requestAccounts"
});

connectBtn.innerHTML =
accounts[0].slice(0,6)+"..."+accounts[0].slice(-4);

}

catch{

alert("Connection rejected");

}

}

else{

alert("Install MetaMask");

}

});

/* ===========================
COPY CONTRACT
=========================== */

function copyContract(){

navigator.clipboard.writeText(
"0x50503105BEC1D34A4Ba6E193486911bd9bA6F0e4"
);

alert("Contract copied");

}

/* ===========================
BUY BOX
=========================== */

const prices={

BNB:0.0002,

USDT:0.1,

ETH:0.00003,

BTC:0.000001

};

let selected="BNB";

function changeToken(token){

selected=token;

document.getElementById("tokenName").innerHTML=token;

document.getElementById("priceInfo").innerHTML=
"1 NXR = "+prices[token]+" "+token;

calculate();

}

function calculate(){

let amount=
parseFloat(
document.getElementById("payInput").value
);

if(isNaN(amount)){

document.getElementById("receiveAmount").innerHTML=0;

return;

}

let receive=amount/prices[selected];

document.getElementById("receiveAmount").innerHTML=
receive.toFixed(2);

}

document.getElementById("payInput")
.addEventListener("input",calculate);

/* ===========================
BACK HOME
=========================== */

function backHome(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}

/* ===========================
SCROLL EFFECT
=========================== */

window.addEventListener("scroll",()=>{

let header=document.querySelector(".header");

if(window.scrollY>100){

header.style.background="rgba(0,0,0,.8)";

}

else{

header.style.background="rgba(0,0,0,.4)";

}

});

/* ===========================
LAUNCH APP
=========================== */

document.querySelector(".launchBtn")
.addEventListener("click",()=>{

document.querySelector(".buyBox")
.scrollIntoView({

behavior:"smooth"

});

function copyContract(){

navigator.clipboard.writeText(

"0x50503105BEC1D34A4Ba6E193486911bd9bA6F0e4"

);

alert(

"Contract copied successfully"

);

}

});
