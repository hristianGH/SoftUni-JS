function Delivery(chiken,fish,vegan)
{
    chiken= chiken*10.35;
    fish = fish*12.40;
    vegan= vegan*8.15;
    sum = chiken+fish+vegan;
    let desert = sum*0.20;
    let delivery = 2.50;
    sum = sum+desert+delivery;
    console.log(sum)
}
Delivery(2,4,3)