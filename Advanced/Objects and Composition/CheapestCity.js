function Solve(cities) {
    let arr=[]
    cities.forEach(x => {
      let town = x.split('|')[0];
      let product = x.split('|')[1];
      let price = x.split('|')[2];
            
      arr.push(`${product} -> ${price} (${town})`)
    });
   arr.forEach(x => {
       console.log(x)
   });
}


Solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
)