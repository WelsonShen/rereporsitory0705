//第六關 變數實作情境題
//第一題
var VIPTotal = 200;
var hamburgerPrice = 50;
var friesPrice = 30;
var isVIP;
// 請透過比較運算子，將比較結果寫在 isVip 上
// 請利用 VIPTotal、hamburgerPrice、friesPrice 的變數進行比較
// isVIP 的型別必須為布林值 (true or false)
isVIP = hamburgerPrice * 2 + friesPrice * 2 >= VIPTotal;
console.log("Bob 的 VIP 條件為"+ isVIP)

//第二題
var markHamburgerNum = 2;
var markfriesNum = 4;
var markIsVIP;
var VIPTotal;
// 如上面新增的變數，馬克買了 2 個漢堡，與 4 個薯條
// 請同時運用比較運算子與邏輯運算子，將比較結果寫在 markIsVIP 上
// markIsVIP 的型別必須為布林值 (true or false)
VIPTotal = hamburgerPrice * maryHamburgerNum + friesPrice * maryHamburgerNum;
maryIsVIP = maryTotal >= VIPTotal && maryHamburgerNum >=1;
console.log("mark 的 VIP 條件為"+ markIsVIP);

//第三題
var maryHamburgerNum = 0;
var maryfriesNum = 10;
var maryIsVIP;
// 如上面新增的變數，Mary 買了 0 個漢堡，與 10 個薯條
// 請同時運用比較運算子與邏輯運算子，將比較結果寫在 markIsVIP 上
// maryIsVIP 的型別必須為布林值 (true or false)
var maryTotal = hamburgerPrice * maryHamburgerNum + friesPrice * maryHamburgerNum;
maryIsVIP = maryTotal >= VIPTotal || maryHamburgerNum >= 1;
console.log("mary 的 VIP 條件為"+ maryIsVIP);

var marryIsVIPTwo = maryTotal >= VIPTotal || maryHamburgerNum >= 1;
console.log("生氣 mary 的 VIP 條件為"+ maryIsVIP);