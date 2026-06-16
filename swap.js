let signer;
let provider;
let userAddress;

// PancakeSwap Router (BSC Mainnet)
const ROUTER_ADDRESS = "0x10ED43C718714eb63d5aA57B78B54704E256024E";

// WBNB
const WBNB = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";

// ABI (Router minimal)
const routerABI = [
"function getAmountsOut(uint amountIn, address[] calldata path) view returns (uint[] memory amounts)",
"function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline) payable returns (uint[] memory amounts)",
"function swapExactTokensForTokens(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) returns (uint[] memory amounts)"
];

// ERC20 ABI
const erc20ABI = [
"function approve(address spender, uint amount) returns (bool)",
"function allowance(address owner, address spender) view returns (uint)"
];

// CONNECT FROM wallet.js
async function initSigner(){
provider = new ethers.BrowserProvider(window.ethereum);
signer = await provider.getSigner();
userAddress = await signer.getAddress();
}

// GET PRICE QUOTE
async function getQuote(tokenIn, tokenOut, amount){

try{

await initSigner();

const router = new ethers.Contract(ROUTER_ADDRESS, routerABI, provider);

const path = [tokenIn, tokenOut];

const amountIn = ethers.parseEther(amount.toString());

const amounts = await router.getAmountsOut(amountIn, path);

return amounts[1];

}catch(err){
console.log("Quote error", err);
}

}

// APPROVE TOKEN
async function approveToken(tokenAddress, amount){

const token = new ethers.Contract(tokenAddress, erc20ABI, signer);

const tx = await token.approve(
ROUTER_ADDRESS,
ethers.MaxUint256
);

await tx.wait();

}

// SWAP EXECUTION
async function executeSwap(){

try{

await initSigner();

const tokenIn = document.getElementById("tokenIn").value;
const tokenOut = document.getElementById("tokenOut").value;
const amount = document.getElementById("amountIn").value;

// deadline
const deadline = Math.floor(Date.now()/1000) + 60 * 10;

// path
const path = [tokenIn, tokenOut];

const router = new ethers.Contract(ROUTER_ADDRESS, routerABI, signer);

// If selling BNB
if(tokenIn === "BNB" || tokenIn === "ETH"){

const tx = await router.swapExactETHForTokens(
0,
path,
userAddress,
deadline,
{
value: ethers.parseEther(amount)
}
);

await tx.wait();

alert("Swap Successful 🚀");
return;

}

// ERC20 Swap flow
await approveToken(tokenIn, amount);

const amountIn = ethers.parseEther(amount.toString());

const tx = await router.swapExactTokensForTokens(
amountIn,
0,
path,
userAddress,
deadline
);

await tx.wait();

alert("Swap Completed 🚀");

}catch(err){

console.log(err);
alert("Swap Failed ❌");

}

}

// UI HOOK
document.getElementById("swapButton").onclick = executeSwap;
