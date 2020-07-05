//第十關 函式參數設計
//第一題
var friesPrice = 40;
var hamburgerPrice = 50;
function count1(customer, friesNum, hamburgerNum){
    var customTotal = friesNum*friesPrice + hamburgerNum*hamburgerPrice;
    console.log(`${customer}您好，您詢問的金額為${customTotal}元`);
}
count1('BOb', 5, 6);   //BOb您好，您詢問的金額為500元
count1('Mark', 2, 5);  //Mark您好，您詢問的金額為330元
count1('Mary', 5, 7);  //Mary您好，您詢問的金額為550元
//第二題
function count2(customer2, customerWallet, friesNum, hamburgerNum){
    var total = friesNum*friesPrice + hamburgerNum*hamburgerPrice;
    var customTotal2 =customerWallet - total;
    console.log(`${customer2}買完東西後，錢包剩下${customTotal2}元`);
}
count2('BOb',3443, 5, 6);  //BOb買完東西後，錢包剩下2943元
count2('Mark',4574, 2, 5);  //Mark買完東西後，錢包剩下4244元
count2('Mary',8945, 5, 7); //Mary買完東西後，錢包剩下8395元
//第三題
var sale = 0.9;
function count3(customer, customerWallet, friesNum, hamburgerNum){
    var total = (friesNum*friesPrice + hamburgerNum*hamburgerPrice)*sale;
    var customerTotal3= customerWallet - total;
    console.log(`${customer}買完東西後，錢包剩下${customerTotal3}元`);
}
count3('BOb',3443, 5, 6);  //BOb買完東西後，錢包剩下2943元
count3('Mark',4574, 2, 5);  //Mark買完東西後，錢包剩下4244元
count3('Mary',8945, 5, 7); //Mary買完東西後，錢包剩下8395元