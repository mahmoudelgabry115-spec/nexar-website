// ========= MARKET DATA =========

// ضع عقد NXR الحقيقي هنا
const TOKEN_ADDRESS =
"0x50503105BEC1D34A4Ba6E193486911bd9bA6F0e4";

// DexScreener API

async function loadMarketData(){

try{

const response =
await fetch(

`https://api.dexscreener.com/latest/dex/tokens/${TOKEN_ADDRESS}`

);

const data =
await response.json();

const pair =
data.pairs?.[0];

if(!pair){

return;

}

// السعر

document
.getElementById(
"price"
)
.innerText =
"$"
+
Number(
pair.priceUsd
).toFixed(6);

// Market Cap

document
.getElementById(
"marketCap"
)
.innerText =
"$"
+
Number(
pair.fdv
).toLocaleString();

// Liquidity

document
.getElementById(
"liquidity"
)
.innerText =
"$"
+
Number(
pair.liquidity.usd
).toLocaleString();

// Volume

document
.getElementById(
"volume"
)
.innerText =
"$"
+
Number(
pair.volume.h24
).toLocaleString();

}
catch(error){

console.log(

"Market Error",

error

);

}

}

// أول تشغيل

loadMarketData();

// تحديث كل 15 ثانية

setInterval(

loadMarketData,

15000

);
