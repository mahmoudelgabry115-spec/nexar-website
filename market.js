const marketContainer = document.getElementById("marketContainer");
const searchInput = document.getElementById("searchInput");

let coins = [];

async function loadMarket(){

try{

const res = await fetch(
"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
);

coins = await res.json();

render(coins);

}catch(err){
console.log("API Error", err);
}

}

function render(data){

if(!marketContainer) return;

marketContainer.innerHTML = "";

data.forEach(coin => {

let changeColor = coin.price_change_percentage_24h >= 0 ? "#00ff88" : "#ff4d4d";

marketContainer.innerHTML += `
<div class="coinCard">
<div class="coinLeft">
<img src="${coin.image}">
<div>
<h3>${coin.name}</h3>
<p>${coin.symbol.toUpperCase()}</p>
</div>
</div>

<div class="coinRight">
<h3>$${coin.current_price}</h3>
<p style="color:${changeColor}">
${coin.price_change_percentage_24h?.toFixed(2)}%
</p>
</div>
</div>
`;

});

}

if(searchInput){
searchInput.addEventListener("input", () => {

let val = searchInput.value.toLowerCase();

let filtered = coins.filter(c =>
c.name.toLowerCase().includes(val) ||
c.symbol.toLowerCase().includes(val)
);

render(filtered);

});
}

loadMarket();
setInterval(loadMarket, 15000);
