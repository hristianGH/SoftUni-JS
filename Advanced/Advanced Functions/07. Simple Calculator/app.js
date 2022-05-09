function calculator() {
  const one = document.getElementById(`num1`);
  const two = document.getElementById(`num2`);
  const result = document.getElementById("result");
  return {
    add: () => {
      result.value = Number(one.value) + Number(two.value);
    },
    subtract: () => {
      result.value = Number(one.value) - Number(two.value);
    }
  };
}
const calculate = calculator();
