const buyButton = document.getElementById("buyButton");
const swapButton = document.getElementById("swapButton");

buyButton.onclick = () => {

let amount = document.getElementById("amount").value;

if(!amount){
notify("Please enter amount");
return;
}

notify("Buying " + amount + " NXR 🚀");

};

swapButton.onclick = () => {
notify("Swap feature coming soon 🔄");
};
