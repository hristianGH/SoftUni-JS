function Sumsec(num1, num2, num3) {
  var sum = num1 + num2 + num3;
  if (sum % 60 < 10) {
    console.log(`${(sum / 60).toFixed()}:0${sum % 6}`);
  } else {
    console.log(`${(sum / 60).toFixed()}:${sum % 6}`);
  }
}
Sumsec(35, 45, 44);
