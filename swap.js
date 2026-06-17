const prices={

BNB:0.0002,

USDT:0.10,

ETH:0.00003,

BTC:0.000001

};

const fromAmount =
document.getElementById("fromAmount");

const toAmount =
document.getElementById("toAmount");

const fromToken =
document.getElementById("fromToken");

const swapPrice =
document.getElementById("swapPrice");

const minimumReceived =
document.getElementById("minimumReceived");

function calculateSwap(){

let amount =
parseFloat(fromAmount.value);

let token =
fromToken.value;

if(isNaN(amount)){

toAmount.value="";

return;

}

let nxr = amount/prices[token];

toAmount.value = nxr.toFixed(2);

minimumReceived.innerHTML =
(nxr*0.995).toFixed(2);

swapPrice.innerHTML =
"1 NXR = "+prices[token]+" "+token;

}

fromAmount.addEventListener(
"input",
calculateSwap
);

fromToken.addEventListener(
"change",
calculateSwap
);
