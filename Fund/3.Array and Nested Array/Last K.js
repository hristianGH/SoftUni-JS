function LastK(one,two)
 {
     
    let arr= new Array(one).fill(0);
    arr[0]=1;
     for (let i = 0; i < one; i++) 
     {

             for (let j = i-(two); j < i; j++) 
             {
                 if (j>=0)
                  {
                     
                     arr[i]+=arr[j];
                     ;
                  }
             }

         
     }
     console.log(arr)
}
LastK(8,2);

[1, 1, 2, 4, 7, 13]
[1, 1, 1, 1, 1, 1]