function Firm(input) {
  let n = input[0];
  let avg = 0;
  let salesMade=0;
  for (let index = 1; index <= n ; index++) {
    let curr = input[index];
    let rating = curr[2];
    let sales = Number.parseInt(curr[0]+curr[1]);
     avg+=Number.parseInt( rating);
     if(rating==2)
     {
     }
     else if(rating==3)
     {
       salesMade+=Number.parseFloat(sales)*0.5;
     }
     else if(rating==4)
     {
       salesMade+=Number.parseFloat(sales)*0.7;
     }
     else if(rating==5)
     {
       salesMade+=Number.parseFloat(sales)*0.85;
     }
     else if(rating==6)
     {
       salesMade+=Number.parseFloat(sales)*1;
     }

  }
  console.log(salesMade.toFixed(2))
  console.log((avg/n).toFixed(2))
}
Firm(["3", "103", "103", "103"]);
