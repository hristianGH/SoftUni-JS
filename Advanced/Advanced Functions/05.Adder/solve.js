function solve() {
  console.log(add(1)(6)(-3).toString());

  function add(num) {
    let result = 0;
    result += num;

    function calc(num) {
      result += num;
      return calc;
    }

    calc.toString=()=>result;
    return calc
  }
}

solve();
