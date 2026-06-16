let provider;
let signer;
let user;

async function connectWallet(){

if(!window.ethereum){
alert("Install MetaMask");
return;
}

provider = new ethers.BrowserProvider(window.ethereum);
await provider.send("eth_requestAccounts", []);
signer = await provider.getSigner();

user = await signer.getAddress();

document.getElementById("wallet").innerText =
user.slice(0,6)+"..."+user.slice(-4);

const bal = await provider.getBalance(user);

document.getElementById("bnb").innerText =
(Number(bal)/1e18).toFixed(4);

loadNXR();

}
