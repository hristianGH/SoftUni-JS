class Stringer {
  constructor(text, lenght) {
    this.text = [...text];
    this.lenght = lenght;
  }
  decrease(amount) {
    this.lenght -= amount;
  }
  increase(amount) {
    this.lenght += amount;
  }
  toString() {
    let output = this.text.slice(0, this.lenght).join("");
    if (this.lenght >= this.text.length) {
      return output;
    }
    return output + "...";
  }
}
function solve() {
  let test = new Stringer("Test", 5);
  console.log(test.toString()); // Test

  test.decrease(3);
  console.log(test.toString()); // Te...

  test.decrease(5);
  console.log(test.toString()); // ...

  test.increase(4);
  console.log(test.toString()); // Test
}
solve();
