const marketContainer =
document.getElementById("marketContainer");

const searchInput =
document.getElementById("searchInput");

let coins=[];

async function loadMarket(){

try{

const response = await fetch(

"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false"

);

coins = await response.json();

renderMarket(coins);

}

catch(error){

console.log(error);

}

}

function renderMarket(data){

marketContainer.innerHTML="";

data.forEach(coin=>{

const color =
coin.price_change_percentage_24h >=0
?
"#00ff99"
:
"#ff4d4d";

marketContainer.innerHTML+=`

<div class="coinCard"><div class="coinLeft"><img src="${coin.image}"><div><h3>${coin.name}

</h3><p>${coin.symbol.toUpperCase()}

</p></div></div><div class="coinRight"><h3>$${coin.current_price}

</h3><p style="color:${color}">${coin.price_change_percentage_24h.toFixed(2)}%

</p></div></div>`;

});

}

searchInput.addEventListener("input",()=>{

const keyword =
searchInput.value.toLowerCase();

const filtered =
coins.filter(coin=>

coin.name.toLowerCase().includes(keyword)

||

coin.symbol.toLowerCase().includes(keyword)

);

renderMarket(filtered);

});

loadMarket();

setInterval(loadMarket,10000);
