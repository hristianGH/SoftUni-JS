function solve(arr) {
    let result = arr.nums
    if(arr.type=='asc')
    {
    result=result.sort(function(a,b){return(a-b)});
    }
    else{
    result=result.sort(function(a,b){return(b-a)});

    }
    
}
let test1={nums:[14, 7, 17, 6, 8],type: `asc`};
let test2={nums:[14, 7, 17, 6, 8],type: `desc`};
solve(test2);
