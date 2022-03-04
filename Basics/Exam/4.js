function Bracelet(input)
 {
   let saves =5*input[0];
   let payment = 5*input[1];
   let sumMoney = saves+payment;
   let moneyAfter= sumMoney-input[2];
   if(moneyAfter>=input[3])
   {
       console.log(`Profit: ${moneyAfter.toFixed(2)} BGN, the gift has been purchased.`)
   }   
   else
   (
       console.log(`Insufficient money: ${(input[3]-moneyAfter).toFixed(2)} BGN.`)
   )
}
Bracelet(([2.10,
    17.50,
    20.20,
    148.50])
)