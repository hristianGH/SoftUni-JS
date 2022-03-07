function NegativePositive(arr) 
{
     arr.sort();
    arr.forEach(x => 
        {
         console.log(x)
    });
}

NegativePositive([7, -2, 8, 9])