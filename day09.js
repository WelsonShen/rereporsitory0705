//Day9 觀念總整理 - 幫小杰學會 Function 之呼吸
//第一式：變數型別之呼吸
var a = 1;
a+=1;   //a=2
a+=5;   //a=7
var b = 5;
console.log(a+b);   //12

var c = 3;
var d = "hello";
console.log(c*d);   //NaN

var e = 8 + 2 * "9";
console.log(e); //26字串透過運算子轉換型別

var f = 1;
var g = "2";
var h = 3;
console.log(typeof(f+g+h)); //string

//第二式運算子之呼吸
var total = 200;
var isVip = true;
console.log(total>=200 && isVip);   //true

var a = true;
var b = false;
console.log( a && b);   //false
console.log( a || b);   //true

var c = 10;
var d = 20;
var e = 30;
console.log(c==10 && d>=5 && e !== 20); //true
console.log(c==10 || d>=5 || e !== 20); //true
console.log(c==5 || d>=40 || e !== 30); //false

//第三式運算子之呼吸
var maryIsVIP = true;
if(maryIsVIP){
 console.log("哇貴婦餒！");
}else{
 console.log("你一定搞錯了，叫你們店長出來！");
    }   //哇貴婦餒！

var momSwim = false;
var girlfriendSwim = true;

if(momSwim && girlfriendSwim){
 console.log("都不救，因為他們都會游泳");
}else{
    console.log("小杰大喊：「你們誰不會游泳啊？？」");
    if(girlfriendSwim){
        console.log("那你自己游上來！");
    }else{
        console.log("我先問我阿母會不會游泳！");
    }
    
    if(momSwim){
        console.log("媽妳先自己游上來！");
    }else{
        console.log("媽我去救你！");
    }
}
// 小杰大喊：「你們誰不會游泳啊？？
// 那你自己游上來！
// 媽我去救你！
   