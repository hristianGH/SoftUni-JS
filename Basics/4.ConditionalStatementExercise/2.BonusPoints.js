function Bonus(num1){
    let bonusPoints=0;
if(num1<=100)
{
   bonusPoints+=5;

}
else if(num1>100&&num1<1000)
{
  bonusPoints+=num1/0.2;
}
else
{
    bonusPoints+=num1/0.1;
}

}