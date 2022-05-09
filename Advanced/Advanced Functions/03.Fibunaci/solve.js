function solve() {
  let result = 0;
  let lastN = 0;

  let fib = getfibonacci;
  console.log(fib());
  console.log(fib());
  console.log(fib());
  console.log(fib());
  console.log(fib());
  console.log(fib());
  console.log(fib());

  function getfibonacci() {
    result += lastN;
    lastN = result - lastN;
    if (result == 0) {
      result++;
    }
    return result;
  }
}
solve();
