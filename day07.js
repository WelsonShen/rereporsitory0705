//第七關 if - 認真的小杰竟被客訴
//第一題
var VIPTotal = 200;
var memberPrice = 350;
// 請透過 if 來設計回覆，如果對方滿足門檻
// 就回覆 console.log("您好，您有達到 VIP 門檻。這裡給您 VIP 會員卡(遞上")
if (memberPrice >= VIPTotal){
    console.log('您好，您有達到 VIP 門檻。這裡給您 VIP 會員卡(遞上');
}
//第二題
var hamburgerPrice = 50;
var friesPrice = 30;
// 請透過 if else 來去設計對方是否有達到條件，有或沒有都需要回覆對方
// 如果有，請顯示 console.log("尊敬的客戶您好，您有達到 VIP 條件")
// 如果沒有達到條件，便用 else 顯示 console.log("尊敬的客戶您好，您還差 xx 元，才有符合 VIP 條件哦~")
var markTotal = hamburgerPrice * 2 + friesPrice * 2;
if(markTotal >= VIPTotal){
    console.log('尊敬的客戶您好，您有達到 VIP 條件');
}else{
    console.log('尊敬的客戶您好，您還差'+(VIPTotal - markTotal)+'元，才有符合 VIP 條件哦~');
}
//第三題
var hungryNum = 53;
var hungerLevel = {
    general:{
        min: 0,
        max: 20,
        message: '飯糰'
    },
    fair:{
        min: 21,
        max: 40,
        message: '肉燥飯+貢丸湯'
    },
    poor:{
        min: 41,
        max: 60,
        message: '麥當勞'
    },
    extreme:{
        min: 61,
        max: 100,
        message: '99元火鍋吃到飽'
    }
};
if (hungryNum >= hungerLevel.general.min && hungryNum <= hungerLevel.general.max){
    console.log("主人公因為飢餓度在"+hungryNum+"，所以他決定去吃"+hungerLevel.general.message);
}else if(hungryNum >= hungerLevel.fair.min && hungryNum <= hungerLevel.fair.max){
    console.log("主人公因為飢餓度在"+hungryNum+"，所以他決定去吃"+hungerLevel.fair.message);
}else if(hungryNum >= hungerLevel.poor.min && hungryNum <= hungerLevel.poor.max){
    console.log("主人公因為飢餓度在"+hungryNum+"，所以他決定去吃"+hungerLevel.poor.message);
}else if(hungryNum >= hungerLevel.extreme.min && hungryNum <= hungerLevel.extreme.max){
    console.log("主人公因為飢餓度在"+hungryNum+"，所以他決定去吃"+hungerLevel.extreme.message);
}
// 