// Portfolio Dashboard

async function updatePortfolio(){

try{

// لو المحفظة غير متصلة
if(!walletAddress){

return;

}

// رصيد BNB
const bnbBalance =
parseFloat(
document
.getElementById(
"bnbBalance"
)
.innerText
);

// رصيد NXR
const nxrBalance =
parseFloat(
document
.getElementById(
"nxrBalance"
)
.innerText
);

// سعر NXR الحالي
const currentPrice =
parseFloat(
document
.getElementById(
"price"
)
.innerText
.replace("$","")
);

// قيمة BNB التقريبية
const bnbPrice = 650;

// القيمة الإجمالية
const totalValue =

(
bnbBalance * bnbPrice
)
+
(
nxrBalance * currentPrice
);

// عرض القيمة

document
.getElementById(
"portfolioValue"
)
.innerText =
"$"
+
totalValue.toFixed(2);

}
catch(error){

console.log(error);

}

}

// تحديث تلقائي

setInterval(

updatePortfolio,

10000

);
