const PRICE = 0.01;

async function buyToken(){

if(typeof window.ethereum === "undefined"){
alert("Install MetaMask first");
return;
}

const input = document.getElementById("buyAmount");
let amount = Number(input.value);

if(!amount || amount < 100){
alert("Min buy is 100 NXR");
return;
}

if(amount > 10000){
alert("Max buy is 10,000 NXR");
return;
}

let accounts = await ethereum.request({
method: "eth_requestAccounts"
});

let user = accounts[0];

/* fake tx simulation (لحد ربط العقد الحقيقي) */
let usdtValue = amount * PRICE;

alert(
`Preparing transaction:
User: ${user}
Amount: ${amount} NXR
Cost: ${usdtValue} USDT`
);

/* هنا لاحقًا هنربط contract.methods.buy().send() */

}const PRICE = 0.01;

async function buyToken(){

if(typeof window.ethereum === "undefined"){
alert("Install MetaMask first");
return;
}

const input = document.getElementById("buyAmount");
let amount = Number(input.value);

if(!amount || amount < 100){
alert("Min buy is 100 NXR");
return;
}

if(amount > 10000){
alert("Max buy is 10,000 NXR");
return;
}

let accounts = await ethereum.request({
method: "eth_requestAccounts"
});

let user = accounts[0];

/* fake tx simulation (لحد ربط العقد الحقيقي) */
let usdtValue = amount * PRICE;

alert(
`Preparing transaction:
User: ${user}
Amount: ${amount} NXR
Cost: ${usdtValue} USDT`
);

/* هنا لاحقًا هنربط contract.methods.buy().send() */

}
