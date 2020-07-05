//第一關 環境與變數環境
//第1題
a = 1;           //undefind
a = "hello";     //1
console.log(a);  //'hello'

//第2題
var b = 3 ;      //3個變數 b c d ,2個型別 ,6個記憶體
var c = 4;       // b         c         d
                 // undefiend undefiend undefiend
                 // 3         4         7
console.log(d)   //undefiend
var d = b+c;        
console.log(d)   //7
                  
//第 3 題
console.log(e)   //undefiend
var e;                  
e = 5;           //一個變數四個型別
e = "hello"      //四個記憶體 
e = true;        //undefined,5,'hello',true
console.log(e)   //true 