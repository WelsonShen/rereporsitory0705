//第十一關 函式參數再練習
//第一題
var salary = 23500;
//請依照上面的武功秘笈 Codepen，依序實現兩步驟，算出小杰被扣了多少錢
function total(money){
    salary -= money;
    console.log("小杰目前還剩下"+salary+"元");
}
total(1000);
total(3500);
total(500);

//第二題
var giftNum = 3;     // 贈品數量
function gift(customer){
    if(customer >= 100){
        giftNum -= 1;
        console.log("目前贈品剩下"+giftNum+"個");
    }
}
gift(150);
gift(99);
gift(100);
//第三題
var giftNum = 200; // 贈品數量
var friesPrice = 30; // 薯條單價
var hamburgerPrice = 50; // 漢堡單價

function order(friesNum, hamburgerNum){
    var total = friesPrice*friesNum + hamburgerPrice*hamburgerNum;
    if( total > 50){
        giftNum -= Math.floor(total/50);
    }
    if( giftNum >0 ){
        console.log("老闆！贈品還夠！剩下"+giftNum+"個~");
    }
    else{
        console.log("老闆贈品賣光啦~")
    }
}
order(10,10);   //老闆！贈品還夠！剩下184個~
order(1,0);     //老闆！贈品還夠！剩下184個~
order(20,15);   //老闆！贈品還夠！剩下157個~
