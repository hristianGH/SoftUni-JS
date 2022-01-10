function Calc(sum,term,interest)
{
   let interestSoFar=sum*0.057
    let monthlyInterest = interestSoFar/12
    console.log(sum+3*monthlyInterest)
}
Calc(200,3,5.7)