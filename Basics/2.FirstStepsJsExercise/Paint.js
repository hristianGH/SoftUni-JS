function Painting(cover,paint,thinner,hours)
{
  cover= (cover+2)*1.5;
  let plastic = 0.40;
  paint += (paint*0.1);
  paint=paint*14.50;
  thinner=thinner*5.00;
  let workersForHour = ((cover+plastic+paint+thinner)*0.3)*hours;
  console.log(cover+plastic+paint+thinner+workersForHour)
}
Painting(10,11,4,8)