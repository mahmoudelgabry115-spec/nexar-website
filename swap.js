const routerAddress = "0x10ED43C718714eb63d5aA57B78B54704E256024E";

async function swapTokens(){

if(!signer){
alert("Connect Wallet First");
return;
}

const tokenIn = document.getElementById("tokenIn").value;
const tokenOut = document.getElementById("tokenOut").value;
const amount = document.getElementById("amount").value;

const router = new ethers.Contract(routerAddress,[
"function swapExactETHForTokens(uint,address[],address,uint) payable returns(uint[])"
],signer);

const path = [tokenIn, tokenOut];

try{

const tx = await router.swapExactETHForTokens(
0,
path,
user,
Math.floor(Date.now()/1000)+600,
{value: ethers.parseEther(amount)}
);

await tx.wait();

alert("Swap Successful 🚀");

}catch(e){
alert("Swap Failed");
console.log(e);
}

}
