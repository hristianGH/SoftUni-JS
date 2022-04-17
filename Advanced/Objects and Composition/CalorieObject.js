function Result(arr) {
    let foodresult={};

    for (let index = 0; index < arr.length; index+=2) {
         
        foodresult[arr[index]]= Number(arr[index+1]);
    }
  return foodresult;
    
}


console.log(Result(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));