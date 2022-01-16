function Store(prod, city, count) {
  let sum = 0;
  if (city == `Sofia`)
    switch (prod) {
      case `coffee`:
        sum += 0.5 * count;
        break;
      case `water`:
        sum += 0.8 * count;
        break;
      case `beer`:
        sum += 1.2 * count;
        break;
      case `sweets`:
        sum += 1.45 * count;
        break;
      case `peanuts`:
        sum += 1.6 * count;
        break;
    }
  else if (city == `Plovdiv`) {
    switch (prod) {
      case `coffee`:
        sum += 0.4 * count;
        break;
      case `water`:
        sum += 0.7 * count;
        break;
      case `beer`:
        sum += 1.15 * count;
        break;
      case `sweets`:
        sum += 1.3 * count;
        break;
      case `peanuts`:
        sum += 1.5 * count;
        break;
    }
  } else if (city == `Varna`) {
    switch (prod) {
      case `coffee`:
        sum += 0.45 * count;
        break;
      case `water`:
        sum += 0.7 * count;
        break;
      case `beer`:
        sum += 1.1 * count;
        break;
      case `sweets`:
        sum += 1.35 * count;
        break;
      case `peanuts`:
        sum += 1.55 * count;
        break;
    }
  }
}
