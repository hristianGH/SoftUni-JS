function FishTank(lenght,width,height,percent)
{
    let volume= lenght*width*height;
    let volumeLitre = volume*0.001;
    percent=percent*0.01;
    let litreNeeded= volumeLitre*(1-percent);
    console.log(litreNeeded);
}
FishTank(85,75,47,17)