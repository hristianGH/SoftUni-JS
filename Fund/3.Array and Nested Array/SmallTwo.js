function SmallestTwo(arr) 
{
  for (let i = 0; i < 2; i++) 
  {
      let indx=0;
      let n = Number.MAX_SAFE_INTEGER;
    for (let j = 0; j < arr.length; j++) 
    {
         if(arr[j]<n)
         {
            n=arr[j];
            indx=j;
         }
    }
    console.log(n)
    arr[indx]=undefined;
  }
}
SmallestTwo([30, 15, 50, 5])