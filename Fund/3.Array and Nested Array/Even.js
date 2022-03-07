function name(arr) 
{
    let out = "";
    for (let index = 0; index < arr.length; index++)
     {
        let element = arr[index];
        if (element%2==0) {
          out+= String(element)+" ";
        }
    }
    console.log(out)
}
name([2,3,4,5]) 