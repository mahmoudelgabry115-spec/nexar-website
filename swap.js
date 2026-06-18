const prices = {
BNB: 0.0002,
USDT: 0.01,
ETH: 0.00003,
BTC: 0.000001
};

const fromAmount = document.getElementById("fromAmount");
const fromToken = document.getElementById("fromToken");
const toAmount = document.getElementById("toAmount");

function calculateSwap(){

let amount = Number(fromAmount.value);
let token = fromToken.value;

if(!amount || amount <= 0){
toAmount.value = "";
return;
}

let nxr = amount / prices[token];

toAmount.value = nxr.toFixed(2);

}

fromAmount.addEventListener("input", calculateSwap);
fromToken.addEventListener("change", calculateSwap);
