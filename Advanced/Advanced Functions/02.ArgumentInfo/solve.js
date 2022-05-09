function solve(params) {
    params.forEach(ele => {
        console.log(`${typeof(ele)}: ${ele}`)
    });
    
}

let test1=['cat', 42, function () { console.log('Hello world!'); }]
solve(test1)