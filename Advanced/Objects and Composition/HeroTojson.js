function Solve(heroes){

    let arr=[];
    let index = 0;
  heroes.forEach(x => {
      let hero = heroes.shift();
      let [name,lvl,items]=hero.split(' / ');
      lvl= Number(lvl);
      const itemsText =items.split(', ')

      arr.push(name,lvl,itemsText);
  });
    return JSON.stringify(arr);
}

Solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
)