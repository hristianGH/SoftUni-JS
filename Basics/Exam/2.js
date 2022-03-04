function name(input)
 {
     let nPeople=input[0];
     let season= input[1];
     let sum =0;
  if(season==`spring`)
  {
     if(nPeople<=5)
     {
        sum= 50*nPeople;
     }
     else{
        sum= 48*nPeople;
     }
  }  
  else if (season==`summer`) 
  {
      if(nPeople<=5)
     {
        sum= 48.50*nPeople;
     }
     else{
        sum= 45*nPeople;
     }
     sum=sum*0.85;
  }
  else if (season==`autumn`) 
  {
    if(nPeople<=5)
    {
        sum= 60*nPeople;
    }
    else{
        sum= 49.50*nPeople;
    }
  }
  else if (season==`winter`) 
  {
    if(nPeople<=5)
    {
        sum= 86*nPeople;
    }
    else{
        sum= 85*nPeople;
    }
    sum=sum*1.08;
  }
  console.log(`${sum.toFixed(2)} leva.`)
}
name([10,`summer`])