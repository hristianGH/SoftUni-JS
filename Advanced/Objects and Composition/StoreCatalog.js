function Solve(items) { 
let dictionary = [];
while(items.length){
    let [name,price]=this.items.shift().split(' : ');
    const firstLetter = name[0];

    if (!dictionary[firstLetter]) {
        dictionary[firstLetter]=[];
    }
    dictionary[firstLetter].push([name,price(Number(price))]);
    dictionary[firstLetter].sort((a,b)=>(a.name).localeCompare(b.name));

    let result = [];
    Object.entries(dictionary).sort((a,b)=>a[0].localeCompare(b[0])).forEach(x=>{
        let val = x[1].sort((a,b)=>(a.name).localeCompare(b.name))
        .map(prod=> `  ${prod.name}: ${prod.price}`)
        .join(`\n`)
        let str = `${x[0]}\n${val}`;
        result.push(str);
    })

    return result
}
    
}


Solve('Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10',

)