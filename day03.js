//第三關 變數型別轉換
//第一題
var a = 1;
console.log(typeof(a));  //number

var b = "hello";
console.log(typeof(b));  //string

var c = 1+"hello";
console.log(typeof(c));  //string

var d = 1+"11";
console.log(d)           //'111'
console.log(typeof(d))   //string

//第二題

var a;
a = a+"hello"
console.log(a);           //'undefinedhello'
console.log(typeof(a))    //string

var b = 3;
console.log(b*"hello");   //NaN


//第三題

var a = 9;
console.log(a+9);         //18
console.log(a+'9');       //'99'

var b = "9";    
console.log(b*b)          //81
console.log(typeof(b*b))  //number  