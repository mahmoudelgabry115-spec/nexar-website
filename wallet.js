let provider;
let signer;
let walletAddress;

// عنوان عقد NXR الحقيقي
const NXR_CONTRACT =
"0x50503105BEC1D34A4Ba6E193486911bd9bA6F0e4";

const ERC20_ABI = [

"function balanceOf(address owner) view returns (uint256)",

"function decimals() view returns (uint8)"

];

// Connect Wallet

document
.getElementById("connectButton")
.addEventListener(
"click",
connectWallet
);

async function connectWallet(){

try{

if(!window.ethereum){

alert("Please install MetaMask");

return;

}

// Browser Provider

provider =
new ethers.BrowserProvider(
window.ethereum
);

// طلب الحسابات

await provider.send(
"eth_requestAccounts",
[]
);

signer =
await provider.getSigner();

walletAddress =
await signer.getAddress();

// عرض العنوان

document
.getElementById(
"walletAddress"
)
.innerText =
walletAddress.slice(0,6)
+
"..."
+
walletAddress.slice(-4);

// رصيد BNB

loadBNBBalance();

// رصيد NXR

loadNXRBalance();

}
catch(error){

console.log(error);

}

}

// BNB Balance

async function loadBNBBalance(){

const balance =
await provider.getBalance(
walletAddress
);

document
.getElementById(
"bnbBalance"
)
.innerText =
(
Number(balance)
/
1e18
).toFixed(4);

}

// NXR Balance

async function loadNXRBalance(){

if(
NXR_CONTRACT.includes(
"PUT"
)
){

return;

}

const token =
new ethers.Contract(

NXR_CONTRACT,

ERC20_ABI,

provider

);

const decimals =
await token.decimals();

const balance =
await token.balanceOf(
walletAddress
);

document
.getElementById(
"nxrBalance"
)
.innerText =
(
Number(balance)
/
10**decimals
).toFixed(2);

}
