//第四關 比較運算子
//第一題
var a = 2;
var b = 1;
console.log(a>0);     //true
console.log((a+b)>1); //true

var c = 4;
var d = 3;
console.log(c == d);  //false

var e = 8;
var f = 5;
console.log(f >= e)   //false
console.log(f != e);  //true
console.log(f == e);  //false

//第二題 搭配型別自動轉型
var a=3; 
var b="3";
console.log(a==1);    //false
console.log(a==b);    //true

var c = 2;
var d = "5";
// 請解釋為什麼
console.log((c*d)>=5) 
//string遇到*運算子時自動轉型 答案為true

//第三題 嚴謹模式
var a = 1;
var b = "1";
console.log(a==1);     //true
console.log(a==b);     //true
console.log(a===b);    //false
console.log(a!==b);    //true   