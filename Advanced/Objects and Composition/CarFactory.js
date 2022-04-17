function Solve(car) {
  function getEngine(power) {
    const engines = [
      { power: 90, volume: 1800 },
      { power: 120, volume: 2400 },
      { power: 200, volume: 3500 },
    ];

    return engines.find((x) => x.power >= power);
  }
  function GetWheels(wheels) {
    let arr = [0, 0, 0, 0];
    for (let index = 0; index < 4; index++) {
      if (Math.floor(wheels) === 0) {
          arr[index]=wheels;
      } else {
        arr[index]=wheels-1;
      }
    }
    return arr
  }
  let output = {
    model: car.model,
    power: getEngine(car.power),
    carriage: { type: car.carriage, color: car.color },
    wheelsize: GetWheels(car.wheels),
  };

  return output;
}

console.log(
  Solve({
    model: "VW Golf II",
    power: 90,
    color: "blue",
    carriage: "hatchback",
    wheelsize: 14,
  })
);
