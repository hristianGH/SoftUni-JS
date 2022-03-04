function Nmae(input) {
  let sum = 0;
  let nightsCost = input[1] * 20;
  let transportCost = input[2] * 1.6;
  let ticketsPrice = input[3] * 6;
  sum = nightsCost + transportCost + ticketsPrice;
  sum = sum * input[0];
  sum = sum*1.25;
  console.log(sum.toFixed(2));
}
Nmae(["20","14","30","6"]);


