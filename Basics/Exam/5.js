function Everest(input) {
  let position = 5364;
  let end = 8848;
  let day = 1;
  for (let index = 0; index < 10; index += 2) {
    if (input[index] == `END`) {
      console.log(`Failed!`);
      console.log(`${position}`);
      break;
    }
    if (input[index] == `Yes`) {
      day++;
    } else if (input[index] == `No`) {
    }
    position += Number.parseInt(input[index + 1]);

    if (day >= 5) {
      console.log(`Failed!`);
      console.log(`${position}`);
      break;
    }
    if (position >= end) {
      console.log(`Goal reached for ${day} days!`);
      break;
    }
  }
}

Everest(["Yes", "1254", "Yes", "1402", "No", "250", "Yes", "635"]);
//Everest(["Yes", "535", "Yes", "849", "Yes", "499", "Yes", "400", "Yes", "500"]);
