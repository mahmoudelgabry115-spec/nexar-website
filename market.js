async function loadMarket(){

const price = (Math.random()*0.003).toFixed(6);

document.getElementById("price").innerText =
"$"+price;

document.getElementById("value").innerText =
"$"+(price*1000).toFixed(2);

setTimeout(loadMarket,3000);

}

loadMarket();
