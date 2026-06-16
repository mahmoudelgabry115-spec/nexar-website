let provider;
let signer;
let userAddress;

// INIT SYSTEM
async function initApp(){

if(window.ethereum){

provider = new ethers.BrowserProvider(window.ethereum);

signer = await provider.getSigner();

userAddress = await signer.getAddress();

console.log("App Initialized:", userAddress);

loadAllData();

}

}

// LOAD ALL MODULES
async function loadAllData(){

try{

loadPortfolio();

loadMarket();

setInterval(()=>{

loadPortfolio();
loadMarket();

},10000);

}catch(err){

console.log(err);

}

}

// PORTFOLIO ENGINE
async function loadPortfolio(){

if(!userAddress) return;

const bnb = document.getElementById("bnbBalance")?.innerText || "0";
const nxr = document.getElementById("nxrBalance")?.innerText || "0";

const price = document.getElementById("price")?.innerText?.replace("$","") || "0";

const bnbValue = parseFloat(bnb) * 600;
const nxrValue = parseFloat(nxr) * parseFloat(price);

const total = bnbValue + nxrValue;

const el = document.getElementById("portfolioValue");

if(el){
el.innerText = "$" + total.toFixed(2);
}

}

// MARKET SYNC (fallback if API fails)
async function loadMarket(){

try{

const priceEl = document.getElementById("price");
const capEl = document.getElementById("marketCap");
const liqEl = document.getElementById("liquidity");
const volEl = document.getElementById("volume");

// fallback simulated live data
if(priceEl && priceEl.innerText === "--"){

priceEl.innerText = "$" + (Math.random()*0.002).toFixed(6);
capEl.innerText = "$1,200,000";
liqEl.innerText = "$320,000";
volEl.innerText = "$85,000";

}

}catch(err){

console.log(err);

}

}

// WALLET AUTO DETECT
async function detectWallet(){

if(window.ethereum){

provider = new ethers.BrowserProvider(window.ethereum);

const accounts = await provider.send("eth_accounts", []);

if(accounts.length > 0){

userAddress = accounts[0];

console.log("Wallet detected:", userAddress);

}

}

}

// START APP
window.addEventListener("load", async ()=>{

await detectWallet();

await initApp();

// ============================
// NEXAR NETWORK - NXR SYSTEM
// ============================

const NXR_PRICE = 0.002;

// حساب السعر
function calculateNXR(){

let amount = document.getElementById("nxrAmount").value;

if(!amount || amount <= 0){

document.getElementById("nxrTotal").innerText = "$0.00";
return;

}

let total = parseFloat(amount) * NXR_PRICE;

document.getElementById("nxrPrice").innerText = "$" + NXR_PRICE;

document.getElementById("nxrTotal").innerText = "$" + total.toFixed(4);

}

// شراء MXR
function buyNXR(){

let amount = document.getElementById("nxrAmount").value;

if(!amount || amount <= 0){

alert("Please enter NXR amount");
return;

}

if(!window.ethereum){

alert("Please install MetaMask");
return;

}

// ربط مع المحفظة (لاحقاً swap)
alert("NEXAR NETWORK: Preparing transaction...");

console.log("BUY NXR:", amount);

}

});

