const connectButton = document.getElementById("connectButton");

let provider;

connectButton.onclick = async () => {

if (!window.ethereum) {
alert("MetaMask not detected");
return;
}

try {

await window.ethereum.request({
method: "eth_requestAccounts"
});

provider = window.ethereum;

const accounts = await provider.request({
method: "eth_accounts"
});

const address = accounts[0];

connectButton.innerText =
address.slice(0,6) + "..." + address.slice(-4);

} catch (err) {
console.log(err);
}

};
