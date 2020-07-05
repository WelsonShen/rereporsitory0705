//第八關 if 與指派運算子 - 幫幫小杰的金魚腦
//第一題
var salary = 23500;
//遲到
salary-= 1000;
//偷吃
salary-= 2500;
console.log("小杰目前還剩下"+salary+"元");
// 小杰目前還剩下20000元
//第二題
var giftNum = 3;     // 贈品數量
var customerA = 150; // 顧客 A 消費金額
var customerB = 99;  // 顧客 B 消費金額
//if(客戶A條件){}
if (customerA >= 100){
    giftNum-= 1;
}
//if(客戶B條件){}
if (customerB >= 100){
    giftNum-=1;
}
console.log("目前贈品剩下"+giftNum+"個");
// 目前贈品剩下2個
//第三題
var giftNum = 50; // 贈品數量
var friesPrice = 30; // 薯條單價
var hamburgerPrice = 50; // 漢堡單價
function count(hamNum, friesNum){
    var spend = hamburgerPrice*hamNum+friesPrice*friesNum;
    var customerGiftNum = parseInt(spend / 50);
    return customerGiftNum;
}
var maryGift = count(10, 10);
giftNum -= maryGift;
if(giftNum > 0){
    console.log("老闆！贈品還夠！剩下"+giftNum+"個~");
}else{
    console.log("老闆贈品賣光啦~")
}
// 老闆！贈品還夠！剩下34個~